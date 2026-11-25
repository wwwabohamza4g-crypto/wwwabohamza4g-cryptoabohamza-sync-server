const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Abo Hamza Sync Server is Running!' });
});

app.all('*', (req, res) => {
  console.log('--- طلب جديد من التطبيق ---');
  console.log('الطريقة:', req.method);
  console.log('المسار:', req.path);
  console.log('البيانات:', JSON.stringify(req.body, null, 2));
  console.log('----------------------------');

  res.status(200).json({
    success: true,
    status: 'synced',
    message: 'تم الاستلام بنجاح'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
