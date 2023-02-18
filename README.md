# TheOneApiSdk

An SDK for https://the-one-api.dev/

Works on all browsers except Internet Explorer and Opera Mini (due to dependency on javascript `fetch`).

## Usage:
```
const SDK = TheOneApiSdk(myToken);
const data = SDK.getAllMovies();
```

## Interface:

#### async getAllMovies((callback))
List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies

#### async getMovie(id, (callback))
Request one specific movie

#### async getMovieQuotes(id, (callback))
Request all movie quotes for one specific movie (only working for the LotR trilogy)

## Data Formats:
All successful results are in the form:
```json
{
  "docs": [
    <ENTRY>(, <ENTRY>, <ENTRY>...)
  ],
  "total": <int>,
  "limit": <int>,
  "offset": <int>,
  "page": <int>,
  "pages": <int>
}
```
where `<ENTRY>` is either a `Movie` or a `Quote`.

#### Movie example
```json
{
  "_id": "5cd95395de30eff6ebccde5d",
  "name": "The Return of the King",
  "runtimeInMinutes": 201,
  "budgetInMillions": 94,
  "boxOfficeRevenueInMillions": 1120,
  "academyAwardNominations": 11,
  "academyAwardWins": 11,
  "rottenTomatoesScore": 95
}
```
#### Quote examples
```json
{
  "_id": "5cd96e05de30eff6ebccf140",
  "dialog": "Foolhardy maybe. He's a Took!",
  "movie": "5cd95395de30eff6ebccde5d",
  "character": "5cd99d4bde30eff6ebccfc7c",
  "id": "5cd96e05de30eff6ebccf140"
}
```
