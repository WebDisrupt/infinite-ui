const express = require('express')
const app = express()
const port = 3000

const path = require('path')

// Serve up static content to test library
app.use('/', express.static(path.join(__dirname, '../playground')))
app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use('/assets', express.static(path.join(__dirname, '../assets')))

// Check if server is running
app.listen(port, ()=>{
  console.log(`Example app listening at http://localhost:${port}/index.html`)
});