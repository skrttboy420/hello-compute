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
