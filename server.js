const express = require('express')
const path = require('path')
const routes = require('./routes/routings')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.use(express.json())

app.use('/dashboard', routes)

app.get('/', (req, res) => {   
    
    res.send('ok')
})

app.listen(3000, () => console.log('Listening on port 3000'))