// import { createServer } from 'http';

// createServer((req, res) => {
//   res.write('Hello World!');
//   res.end();
// }).listen(process.env.PORT);
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 9000;

app.get("/", (req,res)=> {
    res.send("Hello there! Api is working")
})

app.listen(PORT, () => console.log(`Sever is running port ${PORT} ...`));