import { useState, useEffect } from 'react'

const App = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [err, setErr] = useState(null)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=humor',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'X-Api-Key': import.meta.env.VITE_API_KEY
          }
        }
      )
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`)
      }
      const result = await response.json()
      setData(result)
    } catch (err) {
      setErr(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default App
