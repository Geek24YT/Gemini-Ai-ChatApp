# Gemini-AI-ChatApp

A simple chat application powered by the Gemini-pro model from Google Generative AI. This app enables users to ask questions and receive intelligent, real-time responses through a conversational interface. It's built with a Node.js backend using Express and a React frontend.

---

## Features

- **AI-Powered Responses**: Leverages the Gemini-pro model for dynamic, natural conversations.
- **Real-time Interaction**: Ask questions and receive instant replies.
- **User-Friendly Interface**: Clean and intuitive design for seamless usage.
- **Chat History**: Tracks your previous questions and answers for context.
- **Surprise Me Feature**: Generates random interesting questions to explore.

---

## Installation

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Geek24YT/Gemini-AI-ChatApp.git
   cd Gemini-AI-ChatApp/Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the backend directory and add your Google Generative AI key:
   ```
   GOOGLE_GEN_AI_KEY=your_api_key_here
   ```

4. Start the backend server:
   ```bash
   node index.js
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd Gemini-AI-ChatApp/Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Usage

1. Start both the backend and frontend servers.
2. Open the app in your browser.
3. Enter a question in the input box or click on "Surprise Me" for a random question.
4. View the AI's response and interact further as needed.
5. Clear the chat history using the "Clear" button.

---

## Code Structure

### Backend
- **Express Server**: Hosts the API to communicate with the Gemini-pro model.
- **Endpoints**:  
  - `POST /gemini`: Accepts chat history and user input, processes it, and sends a response back.

### Frontend
- **React Components**: Handles user interactions and displays the conversation.
- **State Management**: Uses React `useState` to manage chat history and input values.

---

## Dependencies

### Backend
- `express`
- `cors`
- `dotenv`
- `@google/generative-ai`

### Frontend
- `react`
- `react-scripts`

---

## Environment Variables

Add the following variable in a `.env` file in the backend directory:

```env
GOOGLE_GEN_AI_KEY=your_api_key_here
```

---

## Contributing

Contributions are welcome! If you have ideas to improve this project, feel free to fork the repository, create a feature branch, and submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

---

## Acknowledgments

- Powered by [Google Generative AI](https://cloud.google.com/ai-generative)
- Inspired by modern conversational AI tools like ChatGPT
