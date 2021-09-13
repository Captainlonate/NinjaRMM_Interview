/*
  Every API Fetch will use this.
  Regardless of the results (success or error), anything that uses one of the API Utils
  will always receive back an object with the same structure:
  { data, error } and the try...catch will have already caught anything
  so there's no need for calling code to wrap it every time.
*/
export const makeApiCall = async ({ url, method = 'GET', body = null, headers = {} }) => {
  const results = { data: null, error: null }
  try {
    const apiResponse = await window.fetch(url, { method, headers, body })
    results.data = await apiResponse.json()
  } catch (ex) {
    console.error(ex)
    results.error = ex.message
  }
  return results
}
