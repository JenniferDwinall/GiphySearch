import RequestHandler from './RequestHandler'

const GIPHY_API_KEY = 'RWGUHFz8uOSGg0BNnSRHP9lZU9OlaGeV'

const API_URL = 'http://api.giphy.com'
const API_VERSION = '/v1'
const API_METHOD_RANDOM = '/gifs/random'
const API_METHOD_SEARCH = '/gifs/search'
const API_METHOD_TRENDING = '/gifs/trending'

const API_DEFAULT_PARAMS = {
  limit: 25,
  offset: 0,
  lang: 'en',
  rating: null,
  fmt: 'json'
}

export default class Giphy {
  constructor () {
    this.apiKey = GIPHY_API_KEY
    this.apiUrl = `${API_URL}${API_VERSION}`
    this.apiQuery = {
      api_key: this.apiKey
    }
  }

  /**
   * Setter function for the endpoint property.
   *
   * @param endpoint {String}
   */
  setEndpoint (endpoint) {
    // @TODO: Validate input
    // if (!endpoint)

    this.endpoint = `${this.apiUrl}${endpoint}`
  }

  /**
   * Builds a random request.
   *
   * Params object taken from Giphy docs, random endpoint.
   *  https://developers.giphy.com/docs/
   *  api_key is set in the request handler
   *
   * @param params {Object}
   * @param [params.tag] {String} Filters results by specified tag.
   * @param [params.rating=] {String} Filters results by specified rating.
   * @param [params.fmt="json"] {String} Used to indicate the expected response
   *  format.
   *
   * @return
   */
  random (params) {
    // @TODO: Validate input
    // if (!params.tag)

    let constructedParams = Object.assign(this.apiQuery, {
      tag: params.tag,
      // rating: params.rating || API_DEFAULT_PARAMS.rating,
      fmt: params.fmt || API_DEFAULT_PARAMS.fmt
    })

    if (params.rating) {
      constructedParams.rating = params.rating
    }

    this.setEndpoint(API_METHOD_RANDOM)
    return RequestHandler(this.endpoint, constructedParams)
  }

  /**
   * Builds a search request.
   *
   * Params object taken from Giphy docs, search endpoint.
   *  https://developers.giphy.com/docs/
   *  api_key is set in the request handler
   *
   * @param params {Object}
   * @param params.q {String} Search query term or phrase.
   * @param [params.limit=25] {Integer} The maximum number of records to return.
   * @param [params.offset=0] {Integer} An optional results offset.
   * @param [params.rating=] {String} Filters results by specified rating.
   * @param [params.lang="en"] {String} Specify default language for regional content;
   *  Use a 2-letter ISO 639-1 language code. See list of supported languages
   *  here: https://developers.giphy.com/docs/#language-support
   * @param [params.fmt="json"] {String} Used to indicate the expected response
   *  format.
   *
   * @return
   */
  search (params) {
    // @TODO: Validate input
    // if (!params.q)

    let constructedParams = Object.assign(this.apiQuery, {
      q: params.q,
      limit: params.limit || API_DEFAULT_PARAMS.limit,
      offset: params.offset || API_DEFAULT_PARAMS.offset,
      // rating: params.rating || API_DEFAULT_PARAMS.rating,
      lang: params.lang || API_DEFAULT_PARAMS.lang,
      fmt: params.fmt || API_DEFAULT_PARAMS.fmt
    })

    if (params.rating) {
      constructedParams.rating = params.rating
    }

    this.setEndpoint(API_METHOD_SEARCH)
    return RequestHandler(this.endpoint, constructedParams)
  }

  /**
   * Builds a trending request.
   *
   * Params object taken from Giphy docs, trending endpoint.
   *  https://developers.giphy.com/docs/
   *  api_key is set in the request handler
   *
   * @param params {Object}
   * @param [params.limit=25] {Integer} The maximum number of records to return.
   * @param [params.offset=0] {Integer} An optional results offset.
   * @param [params.rating=] {String} Filters results by specified rating.
   * @param [params.fmt="json"] {String} Used to indicate the expected response
   *  format.
   *
   * @return
   */
  trending (params) {
    // @TODO: Validate input
    // if (!params.tag)

    let constructedParams = Object.assign(this.apiQuery, {
      limit: params.limit || 25,
      offset: params.offset || 0,
      // rating: params.rating || null,
      fmt: params.fmt || 'fmt'
    })

    if (params.rating) {
      constructedParams.rating = params.rating
    }

    this.setEndpoint(API_METHOD_TRENDING)
    return RequestHandler(this.endpoint, constructedParams)
  }
}
