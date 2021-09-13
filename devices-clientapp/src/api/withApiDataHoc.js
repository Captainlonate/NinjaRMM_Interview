import { useState, useEffect } from 'react'
import { isFunction } from '../utils'

/*
  Higher Order Component that provides the wrapped component with:
    The data returned from an API request
    If the API request is still loading
    If the API request resulted in an error
    A method to re-fetch the API data
  
  Since it's possible that one component may want to have/access
  multiple API endpoints, you can configure this with the `propName`
  option. The WrappedComponent will have a matching prop, which will
  be an object containing all of the API stuff.

  The fetchFn config is where you specify HOW TO GET the API data,
  since it's likely not enough to just specify a URL.
*/
const withApiDataHoc = (WrappedComponent, {
  propName = 'apiResults',
  fetchFn = null
} = {}) => (props) => {
  const [apiData, setApiData] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [loadingStatus, setLoadingStatus] = useState(true)

  async function getApiData(forceRun = false) {
    const notAlreadyLoading = forceRun || !loadingStatus.loading

    if (isFunction(fetchFn) && notAlreadyLoading) {
      try {
        setLoadingStatus(true)
        const apiResult = await fetchFn()
        setLoadingStatus(false)
        if (apiResult.error) {
          setErrorMessage(apiResult.error)
        } else {
          setApiData(apiResult.data)
        }
      } catch (ex) {
        setLoadingStatus(false)
        setErrorMessage(ex.error)
      }
    }
  }

  useEffect(() => {
    getApiData(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const moreProps = {
    [propName]: {
      data: apiData,
      error: errorMessage,
      reFetch: getApiData,
      loading: loadingStatus
    }
  }

  return (
    <WrappedComponent
      {...props}
      {...moreProps}
    />
  )
}

export default withApiDataHoc
