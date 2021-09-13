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
