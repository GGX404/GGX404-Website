const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { initializeApp } = require('firebase/app');
require('dotenv').config({ path: './key.env' });

const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(express.json());

// API Key
const API_KEY = process.env.GEMINI_API_KEY;
console.log('GEMINI_API_KEY:', API_KEY);

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5-2G9kDs1c6J8S36L9LsOSYmFqVav3LQ",
  authDomain: "mainwebsiteggx404.firebaseapp.com",
  projectId: "mainwebsiteggx404",
  storageBucket: "mainwebsiteggx404.firebasestorage.app",
  messagingSenderId: "617960092201",
  appId: "1:617960092201:web:e37740125b9837a178e238"
};

// Initialize Firebase
initializeApp(firebaseConfig);
console.log('Firebase app initialized');

// Google Auth

// Route to handle queries
app.post('/api/query', async (req, res) => {
  const { query } = req.body;

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash-thinking-exp',
      systemInstruction: 'fact check and provide proof. translate the response into HTML text like it was going in a <div>. I only want your answer in the HTML format. provide in plaintext. remove the html definition.',
    });
    const prompt = `${query}.`;
    const result = await model.generateContent(prompt);
    let responseText = result.response.text();
    if (responseText === query) {
      res.status(500).json({ error: 'String is too long.' });
    }
    const lines = responseText.split('\n');
    let modifiedResponse = lines.slice(1, -1).join('\n'); // Remove the first and last lines
    modifiedResponse = modifiedResponse.replace(/^"(.*)"$/, '$1');
    res.json({ response: modifiedResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch data from Gemini API' });
  }
});

module.exports = app;