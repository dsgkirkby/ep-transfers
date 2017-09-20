# ep-transfers

## Setup

- Install node 8.x: https://nodejs.org/

- Install dependencies: `npm install` from the root of the repository

- Add your API key to `index.js`

- Run the script: `node index.js --league=[leagueId]` where leagueId is the league ID from EliteProspects (for example, the NHL is 7)

## Notes

One of the limitations of EliteProspect's transfer data is that the leagues for a given transfer aren't stored directly; rather, the current leagues of the involved teams are what is returned by their API.

This means that transfers for teams that have switched leagues will be inaccurate.

## Data Format

```json
{
  "fromTeam": {
    "id": 864,
    "inactive": "false",
    "editorialNotes": "",
    "updated": "2016-08-10T12:11:08Z",
    "imageUrl": "vancouver_giants-2.png",
    "foundedYear": 2001,
    "colors": "Maroon + Black + Grey + White",
    "name": "Vancouver Giants",
    "locality": {
      "id": 14415,
      "parentLocality": {
        "id": 52,
        "name": "British Columbia",
        "localityType": "STATE",
        "country": {
          "id": 3,
          "updated": "2014-12-03T14:24:25Z",
          "name": "Canada",
          "continent": "NORTH_AMERICA",
          "abbreviation": "CAN",
          "shortName": "",
          "iso3166_2": "CA",
          "iso3166_3": "CAN"
        }
      },
      "name": "Langley",
      "localityType": "CITY"
    },
    "fullName": "",
    "teamClass": "MEN",
    "teamType": "CLUB",
    "latestTeamStats": {
      "champion": "false",
      "position": 5,
      "GF": 183,
      "OTL": 6,
      "postseason": "Did not make playoffs",
      "GA": 296,
      "L": 46,
      "team": {
        "name": "Vancouver Giants"
      },
      "league": {
        "id": 10079452,
        "playerLevel": "PROFESSIONAL",
        "virtual": "true",
        "parentLeague": {
          "virtual": "false",
          "gameType": "REGULAR_SEASON",
          "imageUrl": "whl_2016-17-4.png",
          "hideParentLeagueName": "false",
          "hasChildLeagues": "true",
          "teamClass": "MEN",
          "playerLevel": "PROFESSIONAL",
          "id": 36,
          "updated": "2017-01-20T02:45:16Z",
          "name": "WHL",
          "continent": "NORTH_AMERICA",
          "fullName": "Western Hockey League",
          "teamType": "CLUB",
          "searchable": "true"
        },
        "gameType": "REGULAR_SEASON",
        "updated": "2016-01-11T02:40:06Z",
        "hideParentLeagueName": "false",
        "name": "Western Conference: B.C. Division",
        "continent": "NORTH_AMERICA",
        "hasChildLeagues": "false",
        "teamType": "CLUB",
        "teamClass": "MEN",
        "searchable": "false"
      },
      "TP": 46,
      "id": 144238,
      "W": 20,
      "season": {
        "id": 176,
        "endYear": 2017,
        "updated": "2017-06-25T09:30:25Z",
        "startYear": 2016,
        "seasonTypeStart": "AUTUMN",
        "name": "2016-2017",
        "active": "false",
        "seasonTypeEnd": "SPRING"
      },
      "updated": "2017-03-25T10:20:20Z",
      "GP": 72
    },
    "searchable": "true",
    "country": {
      "id": 3,
      "updated": "2014-12-03T14:24:25Z",
      "name": "Canada",
      "continent": "NORTH_AMERICA",
      "abbreviation": "CAN",
      "shortName": "",
      "iso3166_2": "CA",
      "iso3166_3": "CAN"
    }
  },
  "id": 29130,
  "player": {
    "yearOfBirth": 1988,
    "dateOfBirth": "1988-04-21",
    "lastName": "Schira",
    "imageByline": "© Photo: Dan Hickling",
    "weight": 89,
    "imageUrl": "craig_schira.jpg",
    "contract": "18/19",
    "playerStatus": "ACTIVE",
    "birthPlace": {
      "id": 790,
      "parentLocality": {
        "id": 62,
        "name": "Saskatchewan",
        "localityType": "STATE",
        "country": {
          "id": 3,
          "updated": "2014-12-03T14:24:25Z",
          "name": "Canada",
          "continent": "NORTH_AMERICA",
          "abbreviation": "CAN",
          "shortName": "",
          "iso3166_2": "CA",
          "iso3166_3": "CAN"
        }
      },
      "name": "Saskatoon",
      "localityType": "CITY"
    },
    "country": {
      "id": 3,
      "updated": "2014-12-03T14:24:25Z",
      "name": "Canada",
      "continent": "NORTH_AMERICA",
      "abbreviation": "CAN",
      "shortName": "",
      "iso3166_2": "CA",
      "iso3166_3": "CAN"
    },
    "id": 9334,
    "playerPosition": "DEFENSEMAN",
    "playerGameStatus": "HEALTHY",
    "height": 182,
    "updated": "2017-08-11T13:56:20Z",
    "clubOfOrigin": {
      "id": 3477,
      "updated": "2015-05-16T16:39:13Z",
      "name": "Spiritwood MHA"
    },
    "shoots": "RIGHT",
    "gender": "MALE",
    "firstName": "Craig"
  },
  "transferDate": "2009-03-07",
  "updated": "2014-06-09T11:32:30Z",
  "transferType": "TRANSFER",
  "extra": "Entry Level",
  "toTeam": {
    "id": 69,
    "inactive": "false",
    "editorialNotes": "",
    "updated": "2017-06-26T14:30:08Z",
    "imageUrl": "ottawa_senators-3.png",
    "foundedYear": 1992,
    "colors": "Red + Black + Gold + White",
    "name": "Ottawa Senators",
    "locality": {
      "id": 154,
      "parentLocality": {
        "id": 59,
        "name": "Ontario",
        "localityType": "STATE",
        "country": {
          "id": 3,
          "updated": "2014-12-03T14:24:25Z",
          "name": "Canada",
          "continent": "NORTH_AMERICA",
          "abbreviation": "CAN",
          "shortName": "",
          "iso3166_2": "CA",
          "iso3166_3": "CAN"
        }
      },
      "name": "Ottawa",
      "localityType": "CITY"
    },
    "fullName": "",
    "teamClass": "MEN",
    "teamType": "CLUB",
    "latestTeamStats": {
      "champion": "false",
      "id": 168474,
      "season": {
        "id": 198,
        "endYear": 2018,
        "updated": "2017-06-25T09:30:26Z",
        "startYear": 2017,
        "seasonTypeStart": "AUTUMN",
        "name": "2017-2018",
        "active": "true",
        "seasonTypeEnd": "SPRING"
      },
      "team": {
        "name": "Ottawa Senators"
      },
      "league": {
        "id": 10000039,
        "playerLevel": "PROFESSIONAL",
        "virtual": "true",
        "parentLeague": {
          "virtual": "false",
          "gameType": "REGULAR_SEASON",
          "imageUrl": "nhl_2017-18-3.png",
          "hideParentLeagueName": "false",
          "hasChildLeagues": "true",
          "teamClass": "MEN",
          "playerLevel": "PROFESSIONAL",
          "id": 7,
          "updated": "2017-07-07T18:05:06Z",
          "name": "NHL",
          "continent": "NORTH_AMERICA",
          "fullName": "National Hockey League",
          "teamType": "CLUB",
          "searchable": "true"
        },
        "gameType": "REGULAR_SEASON",
        "updated": "2014-02-18T08:55:43Z",
        "hideParentLeagueName": "false",
        "name": "Eastern Conference: Atlantic Division",
        "continent": "NORTH_AMERICA",
        "hasChildLeagues": "false",
        "teamType": "CLUB",
        "teamClass": "MEN",
        "searchable": "false"
      }
    },
    "searchable": "true",
    "country": {
      "id": 3,
      "updated": "2014-12-03T14:24:25Z",
      "name": "Canada",
      "continent": "NORTH_AMERICA",
      "abbreviation": "CAN",
      "shortName": "",
      "iso3166_2": "CA",
      "iso3166_3": "CAN"
    }
  },
  "transferSources": [
    {
      "id": 1866,
      "source": "http://www.theprovince.com/sports/Giants+defenceman+signs+deal+with+Senators/1362849/story.html",
      "updated": "2014-02-18T09:57:02Z"
    },
    {
      "id": 265275,
      "source": "https://www.nhl.com/senators/news/bulletin-senators-sign-vancouver-giants-defenceman-craig-schira/c-481856",
      "updated": "2017-04-18T22:55:32Z"
    }
  ],
  "transferProbability": "CONFIRMED",
  "seasonsInFromLeague": [
    {
      "jerseyNumber": 6,
      "sort": 0,
      "G": 1,
      "visibleInRoster": "true",
      "gameType": "PLAYOFFS",
      "A": 1,
      "TP": 2,
      "playerPosition": "SKATER",
      "id": 10102362,
      "PM": -3,
      "season": {
        "id": 7,
        "endYear": 2006,
        "startYear": 2005,
        "seasonTypeStart": "AUTUMN",
        "name": "2005-2006",
        "active": "false",
        "seasonTypeEnd": "SPRING"
      },
      "updated": "2014-05-22T21:15:07Z",
      "GP": 6,
      "contractType": "NORMAL",
      "PIM": 2,
      "PPG": 0.334
    },
    ...
  ],
  "seasonsInToLeague": [
    ...
  ]
}

```
