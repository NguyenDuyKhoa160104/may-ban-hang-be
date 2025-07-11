const path = require('path')
const express = require('express')

const configViewEngine = (app) => {
    console.log()
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')
    //config static files: images/css/js
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine