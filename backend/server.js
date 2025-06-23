import express from 'express';
import doteenv from 'dotenv';
import connectDB from './db.js';

const app = express();
doteenv.config();

app.get("/", (req, res) => {
  res.send("Hello Worlddd!");
});

app.listen(3000, () => {
  connectDB();
  console.log('Server is running on port 3000');
});
