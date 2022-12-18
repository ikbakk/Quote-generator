import { useState, useEffect } from 'react'
import { data } from './data'

const App = () => {
  const [dataShown, setDataShown] = useState({ quote: ' ', author: ' ' })
  // const [isLoading, setIsLoading] = useState(null)
  // const [err, setErr] = useState(null)

  // const handleClick = async () => {
  //   setIsLoading(true)
  //   try {
  //     const response = await fetch(
  //       'https://api.api-ninjas.com/v1/quotes?category=humor',
  //       {
  //         method: 'GET',
  //         headers: {
  //           Accept: 'application/json',
  //           'X-Api-Key': import.meta.env.VITE_API_KEY
  //         }
  //       }
  //     )
  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`)
  //     }
  //     const result = await response.json()
  //     setData(result)
  //   } catch (err) {
  //     setErr(err.message)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // program to get a random item from an array

  const getRandomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex]
    return item
  }
  const set = getRandomItem(data)
  const quote = dataShown.quote
  const author = dataShown.author

  let twitterLink = ['https://twitter.com/intent/tweet?text=', quote]

  return (
    <>
      <div id='quote-box' className='box'>
        <div className='box-content'>
          <div className='text-section'>
            <h3 id='text'>{quote}</h3>
            <p id='author'>-{author}</p>
          </div>
          <div>
            <button
              id='new-quote'
              onClick={() => {
                setDataShown(set)
              }}>
              Click
            </button>
            <a href={twitterLink.join('')} target='_blank' id='tweet-quote'>
              <button>Tweet quote</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
