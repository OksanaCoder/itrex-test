const http = require('http')
const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json())


const cors = require('cors')
const router = require('./routes/items')

app.use(cors({origin: 'http://localhost:8100'}));


app.use('/items', router)


app.use('/', (req, res) => {
    res.send('node-api works :)')
})



const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

server.listen(PORT, ()=>{
    console.log("Server is running on port", PORT)
})