/**
 * @class TheOneApiSdk
 * SDK for https://the-one-api.dev/
 * Prior to using this SDK, please ensure you have a valid API token by
 * signing up for a free account here: https://the-one-api.dev/sign-up
 *
 * Usage:
 *  const SDK = TheOneApiSdk(myToken);
 *  const data = SDK.getAllMovies();
 * Interface:
 *  getAllMovies((callback))
 *  getMovie(id, (callback))
 *  getMovieQuotes(id, (callback))
 *
 * @param {string} token - the API token for your account
 * @returns {{getMovieQuotes, getAllMovies, getMovie}}
 */
class TheOneApiSdk {
  constructor(token) {
    this._sdk = SdkHelper(token);
  }

  /**
   * List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies
   * @param {function} callbackFn - (optional) callback function which will receive the retrieved json data
   * @returns {Promise<any>} A promise containing the retrieved json data
   * @throws Will throw an error if the API call was unsuccessful
   */
  async getAllMovies(callbackFn) {
    return await this._sdk.getAllMovies(callbackFn);
  }

  /**
   * Request one specific movie
   * @param {string} id - the id of the movie to retrieve information about
   * @param {function} callbackFn - (optional) callback function which will receive the retrieved json data
   * @returns {Promise<any>} A promise containing the retrieved json data
   * @throws Will throw an error if the API call was unsuccessful
   * @throws Will throw an error if the id is not provided
   */
  async getMovie(id, callbackFn) {
    return await this._sdk.getMovie(id, callbackFn);
  }

  /**
   * Request all movie quotes for one specific movie (only working for the LotR trilogy)
   * @param {string} id - the id of the movie to retrieve quotes from
   * @param {function} callbackFn - (optional) callback function which will receive the retrieved json data
   * @returns {Promise<any>} A promise containing the retrieved json data
   * @throws Will throw an error if the API call was unsuccessful
   * @throws Will throw an error if the id is not provided
   */
  async getMovieQuotes(id, callbackFn) {
    return await this._sdk.getMovieQuotes(id, callbackFn);
  }

}

function SdkHelper(token) {
  // ----- Private Variables --------------------
  const _apiUrlRoot = 'https://the-one-api.dev/v2';


  // ----- Public Functions --------------------
  async function getAllMovies(callbackFn) {
    const callback = checkCallback(callbackFn);
    const data = await getRemoteData(makeUrl('/movie'));
    callback?.(data);
    return data;
  }

  async function getMovie(id, callbackFn) {
    if (id === undefined) {
      throw 'getMovie requires param `id`';
    }
    const callback = checkCallback(callbackFn);
    const data = await getRemoteData(makeUrl(`/movie/${id}`));
    callback?.(data);
    return data;
  }

  async function getMovieQuotes(id, callbackFn) {
    if (id === undefined) {
      throw 'getMovie requires param `id`';
    }
    const callback = checkCallback(callbackFn);
    const data = await getRemoteData(makeUrl(`/movie/${id}/quote`));
    callback?.(data);
    return data;
  }


  // ----- Private Functions --------------------

  function checkCallback(callbackFn) {
    return (typeof (callbackFn) === 'function') ? callbackFn : undefined;
  }

  function makeUrl(endpoint) {
    return _apiUrlRoot + endpoint;
  }

  async function getRemoteData(url) {
    const response = await fetch(url, {
      method: 'GET',
      withCredentials: false,
      headers: {
        'Authorization': getBearerToken(),
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      return await response.json();
    }

    throw `Failed to fetch remote data at (${url}) : ${response.error}`;
  }

  function getBearerToken() {
    return 'Bearer ' + token;
  }

  // ----- Interface --------------------
  return {
    getAllMovies,
    getMovie,
    getMovieQuotes
  };
}

export default TheOneApiSdk;
