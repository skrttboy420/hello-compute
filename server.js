const axios = require('axios'); // ถ้ายังไม่มี
const LINE_ACCESS_TOKEN = 'cXjjG2M+BoFGyqP7GhizhWuBVA109TDjghcWtOEpdwPWcrzzcWpA7f105akofaf5q+h94oGuFrgyr6j4lP0SSJeyHf2oP7kqVpN1X+4/ycvQYxSafuDVub440nOW34rj7X90w7l82ziQCZ60q33DEQdB04t89/1O/w1cDnyilFU=';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const events = req.body.events;

  for (const event of events) {
    if (event.type === 'message' && event.message.type === 'text') {
      const replyToken = event.replyToken;
      const userMessage = event.message.text;

      await axios.post('https://api.line.me/v2/bot/message/reply', {
        replyToken: replyToken,
        messages: [
          {
            type: 'text',
            text: `คุณพิมพ์ว่า: ${userMessage}`
          }
        ]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINE_ACCESS_TOKEN}`
        }
      });
    }
  }

  res.status(200).json({ message: 'Webhook Event Processed' });
});


app.get('/', (req, res) => {
  res.send('LINE Webhook Server is running 🚀');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
