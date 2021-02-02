const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const app = express();


app.use('/', (req, res) => {
    res.send('node-api works :)')
})
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log("Server is running on port", PORT)
})