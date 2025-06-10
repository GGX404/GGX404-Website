const functions = require('@google-cloud/functions-framework');
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config({ path: './key.env' });

const app = express();

// Enhanced CORS configuration
const corsOptions = {
  origin: ['https://ggx404.com', 'http://localhost:5173'], // Allow both production and development
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // Cache preflight request for 24 hours
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(express.json());

// API Key
const API_KEY = process.env.GEMINI_API_KEY;

const handleRequest = async (req, res) => {
  // Set CORS headers explicitly for each response
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', true);
  
  const { query } = req.body;

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: 'fact check and provide proof. translate the response into HTML text like it was going in a <div>. I only want your answer in the HTML format. provide in plaintext. remove the html definition. remove any stars or line breaks.',
    });
    
    const prompt = `${query}.`;
    const result = await model.generateContent(prompt);
    let responseText = result.response.text();
    
    if (responseText === query) {
      res.status(500).json({ error: 'String is too long.' });
      return;
    }
    
    const lines = responseText.split('\n');
    let modifiedResponse = lines.slice(1, -1).join('\n');
    // Remove quotes and asterisks
    modifiedResponse = modifiedResponse
      .replace(/^"(.*)"$/, '$1')
      .replace(/\*/g, '');  // Add this line to remove all asterisks
    
    res.json({ response: modifiedResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch data from Gemini API' });
  }
};

// Enhanced function handler with preflight handling
functions.http('api', async (req, res) => {
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    // Set CORS headers
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Max-Age', '86400');
    res.status(204).send();
    return;
  }
  
  if (req.method === 'POST') {
    await handleRequest(req, res);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
});