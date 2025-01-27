import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai'

const PORT = 8000
const app = express()

app.use(cors())
app.use(json())
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY) 

app.post("/gemini", async (req, res) => {
    const model = genAI.getGenerativeModel({model:"gemini-pro"})

    // Validate and preprocess the chat history
    const formattedChatHistory = req.body.history.map((entry) => ({
        role: entry.role,
        parts: Array.isArray(entry.parts)
          ? entry.parts.map((part) => (typeof part === "string" ? { text: part } : part))
          : [{ text: entry.parts }],
      }));

    const chatHistoryForAPI = { contents: formattedChatHistory };

    const chat = model.startChat({ history: chatHistoryForAPI.contents })

    const msg = req.body.message
  
    const result = await chat.sendMessage(msg)
  
    const response = await result.response
  
    const text = response.text()
    res.send(text)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
