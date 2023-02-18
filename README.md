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

