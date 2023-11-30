const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const port = 3000

// Middleware Built-in Funcion
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port, () => {
    console.log("Listening on Port: ", port)
})