const express = require('express');
const db = require('./models/index.js');
const app = express();
const { sequelize } = require('./models/index');
const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const router = require('./routes/index.js');
const userRoute = require('./routes/userRoute.js');
const productRoute = require('./routes/productRoute.js');

app.use('/', router);
app.use('/user', userRoute);
app.use('/product', productRoute);

sequelize
  .sync({ force: false })
  .then(() => console.log('db connect'))
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
