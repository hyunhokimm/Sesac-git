import express from 'express';
import { userCheck } from '../controller/userController.mjs';
const router = express.Router();

router.post('/create', (req, res) => {
  res.send(userCheck(req.body));
});

export default router;
