require('dotenv').config()
const express = require('express')
const app = express();
const router = require('./router/router')
const ConnectDB=require('./database/connectDB')
const cors=require('cors');


// Cors setup to allow request from front-end pages and reject other pages
var corspermission = {
    origin: 'http://localhost:3000',
    method:"POST,GET,DELETE,PATCH,PUT,HEAD",
    credentials:true
}
app.use(cors(corspermission))

// Use to read and accept json files
app.use(express.json());


// Routing different path
app.use('/api/auth/', router)


// Connecting to database
ConnectDB();

// Listening to app on server
const port = 3001;
app.listen(port, () => {
    console.log(`Listing on port ${port}`)
})