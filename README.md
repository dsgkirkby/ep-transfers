# ep-transfers

## Setup

- Install node 8.x: https://nodejs.org/

- Install dependencies: `npm install` from the root of the repository

- Add your API key to `index.js`

- Run the script: `node index.js --league=[leagueId]` where leagueId is the league ID from EliteProspects (for example, the NHL is 7)

## Notes

One of the limitations of EliteProspect's transfer data is that the leagues for a given transfer aren't stored directly; rather, the current leagues of the involved teams are what is returned by their API.

This means that transfers for teams that have switched leagues will be inaccurate.
