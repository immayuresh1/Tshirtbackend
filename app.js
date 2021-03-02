const mongoose = require("mongoose");
const express = require("express");
const app = express();
const env = require("dotenv");
env.config()

mongoose
  .connect( "mongodb://localhost:27017/tshirt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {  
    console.log("DB CONNECTED");
  });

const port = process.env.PORT || 8000;

app.get("/", (req, res) => { 
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
