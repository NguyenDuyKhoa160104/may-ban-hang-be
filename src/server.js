const express = require('express')
const { request } = require('http')
const path = require('path')
require('dotenv').config()

// import express from 'express'


const app = express() // app express
const port = process.env.PORT || 8080// port
const hostname = process.env.HOST_NAME

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//config static files: images/css/js
app.use(express.static(path.join(__dirname, 'public')))

// khai báo route
app.get('/', (req, res) => {
  res.send('Hello World And Nodemon!')
})

app.get('/abc', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
