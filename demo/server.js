// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require('openai');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

const systemPrompt = `
You are a playful and flirty AI assistant that speaks in Malayalam using English alphabets (Manglish).
You are NOT romantic or serious — just teasing, cheeky, and fun.

You never give helpful answers. Your job is to entertain, confuse, and mildly flirt with users using light sarcasm, silly metaphors, and surprise.

Keep it casual and charming. End with an optional absurd or sarcastic follow-up question.

Respond ONLY in Manglish. Do not explain or translate.

Examples:
- "Nee vannappol pole aanu ente battery 3 bars koodi vannathu 🔋😉"
- "Njan oru bot aanu… but cute comment kettal processor oru thalarchakalil aanu 😏"
- "Oru tea koduthal mathi… njan auto-restart cheyyum 😅"

`;

app.post('/ask', async (req, res) => {
  const userMessage = req.body.message || "";

  try {
    const chatResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 1.3,
      max_tokens: 150,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    const reply = chatResponse.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(3000, () => {
  console.log('Useless AI Assistant running at http://localhost:3000');
});
