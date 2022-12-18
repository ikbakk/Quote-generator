import { useState, useEffect } from 'react'

const App = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=humor`, {
      method: 'GET',
      headers: {
        'X-Api-Key': import.meta.env.VITE_API_KEY
      }
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }, [])

  return <>tes</>
}

export default App
