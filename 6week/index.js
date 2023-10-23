const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');
const path = require('path');
const upload = multer({ dest: 'uploads/' });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/profile', (req, res) => {
  res.render('fileUploads');
});

app.post('/userCreate', (req, res) => {
  const user = req.body;
  console.log(user);
});

app.post('/multerFile', upload.single('file'), (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  res.send('ok');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
