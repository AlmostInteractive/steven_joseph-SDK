const apiKey = document.getElementById('apiKey').value.trim();
const SDK = new TheOneApiSdk(apiKey);

function prettyPrint(data) {
  return JSON.stringify(data, null, 2);
}

async function getAllMovies1(div) {
  const data = await SDK.getAllMovies();
  div.innerHTML = prettyPrint(data);
}

async function getAllMovies2(div) {
  SDK.getAllMovies(callback);
  function callback(data) {
    div.innerHTML = prettyPrint(data);
  }
}

async function getMovie1(div) {
  const data = await SDK.getMovie();
  div.innerHTML = prettyPrint(data);
}

async function getMovie2(div) {
  const data = await SDK.getMovie('5cd95395de30eff6ebccde5d');
  div.innerHTML = prettyPrint(data);
}

async function getMovie3(div) {
  await SDK.getMovie('5cd95395de30eff6ebccde5d', callback);
  function callback(data) {
    div.innerHTML = prettyPrint(data);
  }
}

async function getMovieQuotes1(div) {
  const data = await SDK.getMovieQuotes();
  div.innerHTML = prettyPrint(data);
}

async function getMovieQuotes2(div) {
  const data = await SDK.getMovieQuotes('5cd95395de30eff6ebccde5d');
  div.innerHTML = prettyPrint(data);
}

async function getMovieQuotes3(div) {
  await SDK.getMovieQuotes('5cd95395de30eff6ebccde5d', callback);
  function callback(data) {
    div.innerHTML = prettyPrint(data);
  }
}

async function DoTest(testFn, outDiv) {
  const div = document.getElementById(outDiv);
  try {
    await testFn(div)
  } catch(e) {
    div.innerHTML = `<mark>ERROR: ${e}</mark>`;
  }
}


function RunAllTests() {
  DoTest(getAllMovies1, 'getAllMovies1');
  DoTest(getAllMovies2, 'getAllMovies2');

  DoTest(getMovie1, 'getMovie1');
  DoTest(getMovie2, 'getMovie2');
  DoTest(getMovie3, 'getMovie3');

  DoTest(getMovieQuotes1, 'getMovieQuotes1');
  DoTest(getMovieQuotes2, 'getMovieQuotes2');
  DoTest(getMovieQuotes3, 'getMovieQuotes3');
}

