function formatResponse (data) {
  let retObj = {}

  if (data.pagination) {
    retObj.pagination = data.pagination
    retObj.pagination.offset = data.pagination.offset || 0
  }
  retObj.meta = data.meta || null
  retObj.data = data.data || null

  return retObj
}

function formatErrorResponse (response) {
  return {
    pagination: response.pagination || null,
    data: response.data || null,
    meta: {
      status: response.status,
      statusText: response.statusText
    }
  }
}

export default function responseHandler (response, data, resolve, reject) {
  if (response.status >= 400 && response.status <= 502) {
    // Handle problem
    reject(formatErrorResponse(response))
  }
  if (response && response.status >= 200 && response.status < 300) {
    // Process response
    resolve(formatResponse(data))
  } else {
    // Handle problem
    reject(formatErrorResponse(response))
  }
}
