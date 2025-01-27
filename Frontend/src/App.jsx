import { useState } from 'react'

import './App.css'

function App() {
  const [error, setError] = useState("")
  const [value,setValue] = useState("")
  const [chatHistory, setChatHistory] = useState([])

  const surpriseOptions = [
    'Who won the latest nobel prize?',
    'What is the capital of France?',
    'What is the population of China?',
    'What is the tallest mountain in the world?',
    'Who is the current president of the USA?',
    'What is the biggest animal in the world?',
    'What is the smallest country in the world?',
    'What is the longest river in the world?',
    'What is the largest ocean in the world?',
    'What is the smallest ocean in the world?',
  ]

  const surprise = () =>{
    //random value from surpriseOptions
    const randomIndex = Math.floor(Math.random() * surpriseOptions.length)
    const randomValue = surpriseOptions[randomIndex]
    setValue(randomValue) 
  }

  const getResponse = async() =>{
    if(!value){
      setError('Please enter a question')
      return
    }

    try{
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({history : chatHistory, message: value})
      }

      const response = await fetch("http://localhost:8000/gemini", options)
      const data = await response.text()
      console.log(data)
      setChatHistory(oldChatHistory => [...oldChatHistory,{
        role:'user',
        parts:value
      },{
        role:'model',
        parts:data
      }])

      setValue("")
    }catch(err){
      console.log(err);
      setError("Something went wrong! Please try again later.")
    }
  }

  const clear = () =>{
    setChatHistory([])
    setError("")
  }
  

  return (
    <div className='app'>
    <p>What do you want to know?
      <button className='surprise' onClick={surprise} disabled={!chatHistory}>Surprise me</button>
    </p>
    <div className='input-container'>
      <input 
       value={value}
       placeholder='Ask me anything...'
       onChange={(e)=>setValue(e.target.value)}
      />

     {! error && <button onClick={getResponse}>Ask me</button>}
     {error && <button onClick={clear}>Clear</button>}
    </div>
    {error && <p className='error'>{error}</p>}
    <div className='search-result'>
      {
        chatHistory.map((chatItem, index) =>(
          <div key={index}>
          <p className='answer'>{chatItem.role} : {chatItem.parts}</p>
        </div>
        ))
      }
    </div>
  </div>
  )
}

export default App
