const axios = require('axios'); // ถ้ายังไม่มี
const LINE_ACCESS_TOKEN = 'cXjjG2M+BoFGyqP7GhizhWuBVA109TDjghcWtOEpdwPWcrzzcWpA7f105akofaf5q+h94oGuFrgyr6j4lP0SSJeyHf2oP7kqVpN1X+4/ycvQYxSafuDVub440nOW34rj7X90w7l82ziQCZ60q33DEQdB04t89/1O/w1cDnyilFU=';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  console.log('📨 LINE Event Received:', req.body.events);

  // ตอบกลับ LINE (optional)
  // คุณสามารถเพิ่ม logic ตรงนี้เพื่อส่งข้อความกลับไปที่ LINE ได้

  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send('LINE Webhook Server is running 🚀');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
