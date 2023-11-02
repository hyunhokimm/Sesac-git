const express = require('express');
const app = express();
const PORT = 8000;
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require('./models/index');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');

db.sequelize.sync({ force: false }).then(() => {
  console.log('db에 연결되었습니다.');
});

app.use('/user', userRoute);
app.use('/product', productRoute);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
