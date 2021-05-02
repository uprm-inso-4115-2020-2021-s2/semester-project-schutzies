import { useState, useCallback } from 'react';

// https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599878#overview
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
      }
      )

      if (!response.ok) {
        throw new Error('Request failed!')
      }

      const data = await response.json()
      applyData(data)
    }
    catch (err) {
      setError(err.message || 'Something went wrong!')
    }
    setIsLoading(false)
  }, [])

  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp;