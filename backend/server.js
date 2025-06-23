import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Worlddd!");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
//HKPCFY25a2cVaodv
//mongodb+srv://bhattaraisushant99:HKPCFY25a2cVaodv@cluster0.or2glpe.mongodb.net/