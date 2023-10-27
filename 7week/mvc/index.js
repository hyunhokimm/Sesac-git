import express from 'express';
import user from './routes/userRoute.mjs'; // .mjs 확장자를 사용하거나, package.json에서 "type"을 "module"로 설정합니다.

const PORT = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/user', user);

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('*', (req, res) => {
  res.send('경로가 잘못되었습니다.');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
