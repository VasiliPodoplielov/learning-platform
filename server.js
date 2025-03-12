import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Отримання токену та chat_id з оточення
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.post('/send-message', async (req, res) => {
  const { name, email, phone, accept } = req.body;
  const message = `📩 *Нова заявка*\n\n👤 *Ім'я:* ${name}\n📧 *Email:* ${email}\n📞 *Телефон:* ${phone}\n✅ *Згода:* ${accept ? 'Так' : 'Ні'}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();
    if (data.ok) {
      res.json({ success: true });
    } else {
      res.status(500).json({ error: 'Не вдалося відправити повідомлення' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Помилка сервера' });
  }
});

app.listen(3001, () => console.log('✅ Server running on port 3001'));
