const axios = require('axios');
const fs = require('fs');
const _ = require('lodash');
const args = require('command-line-args');
const ProgressBar = require('progress');

const optionDefinitions = [
  {name: 'league', type: Number},
];

const options = args(optionDefinitions);

const RATELIMIT_TIMEOUT = 50;
const TRANSFERS_PER_REQUEST = 200;

const apiUrl = 'http://api.eliteprospects.com:80/beta';
const apiKey = 'YOUR API KEY HERE';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function reliableFetch(url) {
  let numTries = 0;
  let error;

  while (numTries < 10) {
    try {
      return await axios.get(url);
    } catch (e) {
      await timeout(numTries * 100);
      error = e;
      numTries++;
    }
  }

  throw error;
}

const main = async () => {
  const playerStats = {};

  const transferRequestUrl = `${apiUrl}/transfers?apiKey=${apiKey}&filter=${encodeURIComponent(`transferProbability=CONFIRMED${options.league && `&(toTeam.latestTeamStats.league.parentLeague.id=${options.league}|fromTeam.latestTeamStats.league.parentLeague.id=${options.league})`}`)}`;

  const transfersResponse = await reliableFetch(
    `${transferRequestUrl}&limit=1`
  );

  const totalNumberOfRequests = parseInt((transfersResponse.data.metadata.totalCount / TRANSFERS_PER_REQUEST + 1).toFixed(0));

  const transfersProgress = new ProgressBar('Collecting Transfers :bar', {
    total: totalNumberOfRequests,
    complete: '█',
    incomplete: '░'
  });

  const allTransfers = await Promise.all(_.range(totalNumberOfRequests).map(async (i) => {
    await timeout(i * RATELIMIT_TIMEOUT);
    const transfersResponse = await reliableFetch(
      `${transferRequestUrl}&limit=${TRANSFERS_PER_REQUEST}&offset=${i * TRANSFERS_PER_REQUEST}`
    );
    transfersProgress.tick();
    return transfersResponse.data.data;
  }));

  const transfers = _.flatten(allTransfers)
    .filter(Boolean)
    .filter((transfer) => {
      try {
        return transfer.toTeam.latestTeamStats.league.id !== transfer.fromTeam.latestTeamStats.league.id;
      } catch (e) {
        return false;
      }
    });

  const players = transfers.map((transfer) => transfer.player.id);

  const statsProgress = new ProgressBar('Collecting Transferred Players :bar', {
    total: _.uniq(players).length,
    complete: '█',
    incomplete: '░'
  });

  const allStats = players.map(async (id, index) => {
    if (playerStats[id] != null) return Promise.resolve();

    playerStats[id] = 'temp';

    await timeout(index * RATELIMIT_TIMEOUT);
    const stats = await reliableFetch(`${apiUrl}/players/${id}/stats?apiKey=${apiKey}`);
    statsProgress.tick();
    playerStats[id] = stats.data.data;

    return stats;
  });

  await Promise.all(allStats);

  const transfersForOutput = transfers
    .map((transfer) => {
      const seasons = playerStats[transfer.player.id];
      if (!seasons) return null;
      const matchingFromSeason = seasons.find((season) => season.team.id === transfer.fromTeam.id);
      const matchingToSeason = seasons.find((season) => season.team.id === transfer.toTeam.id);
      const matchingFromSeasons = matchingFromSeason ? seasons.filter((season) => season.league.id === matchingFromSeason.league.id) : [];
      const matchingToSeasons = matchingToSeason ? seasons.filter((season) => season.league.id === matchingToSeason.league.id) : [];

      const removeExtraDataFromSeason = (season) => {
        const toRet = {};
        const exclude = ['player', 'league', 'team'];
        Object.keys(season).filter((key) => !exclude.includes(key)).forEach((key) => {
          toRet[key] = season[key];
        });

        return toRet;
      };

      return Object.assign({}, transfer, {
        seasonsInFromLeague: matchingFromSeasons.map(removeExtraDataFromSeason),
        seasonsInToLeague: matchingToSeasons.map(removeExtraDataFromSeason),
      });
    })
    .filter((x) => x != null);

  fs.writeFile('data.json', JSON.stringify(transfersForOutput));
};

main().then(() => console.log('Success! Output all transfers to data.json'));
