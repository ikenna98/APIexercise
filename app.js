const express = require('express')
const app = express()

app.use(express.json())

const gameOfThrones = [
    {id: 1, name:'House Of Stark'},
    {id: 2, name:'House Of Targaryen'},
    {id: 3, name:'House Of Tully'},

];


app.get('/', (req, res) => {
    res.send("Welcome to our presentation!")
})

app.get("/GoT", (req, res) => {
    res.json(gameOfThrones)
})

app.get("/GoT/:id", (req, res) => {
    const idx = parseInt(req.params.id)
    const matcher = gameOfThrones.find( object => object.id === idx)
    res.json(matcher)
})


module.exports = app
