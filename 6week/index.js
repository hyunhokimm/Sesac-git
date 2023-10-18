const express = require('express');
const app = express();
const PORT = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/userCreate', (req, res) => {
  const user = req.body;
  console.log(user);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
