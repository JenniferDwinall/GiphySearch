import 'isomorphic-unfetch' /* global fetch */

import ResponseHandler from './ResponseHandler'

export default function requestHandler (endpoint, params) {
  function requestFn (endpoint, params) {
    let querystring = '?'

    Object.keys(params).forEach((key, index, map) => {
      const glue = '&'
      // @FIXME: Could this be more efficient?
      if (index < map.length - 1) {
        querystring = querystring.concat(key + '=' + params[key] + glue)
      } else {
        querystring = querystring.concat(key + '=' + params[key])
      }
    })

    const url = `${endpoint}${querystring}`

    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          response.json()
            .then((data) => {
              ResponseHandler(
                response,
                data,
                (response) => {
                  resolve(response)
                },
                (e) => {
                  reject(e)
                }
              )
            })
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  // Return the promise.
  return requestFn(endpoint, params)
}
