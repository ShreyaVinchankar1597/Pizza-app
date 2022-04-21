const express = require("express");

const Pizza = require('./models/pizzaModel')

const db = require("./db.js")

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.get('/getpizzas', (req, res) => {
  Pizza.find({}, (err, response) => {
      if(err){
          console.log(err)
      } else {
          res.send(response)
      }
  })
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
