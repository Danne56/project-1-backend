const express = require('express')
const app = express()

var bodyParser = require('body-parser')
var cors = require('cors')

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const port = 3000

app.use(cors())
app.use(jsonParser);
app.use(urlencodedParser);

app.post('/login', (req, res) => {
  // Simulasi data dari database
  const username = 'Danne'
  const password = '09865421'

  // check if username is valid
  if (req.body.username !== username) {
    res.json({ status: 'error, username not found' })
    return
  }

  // check if password is valid
  if (req.body.password !== password) {
    res.json({ status: 'error, wrong password' })
    return
  }

    res.json({ status: 'success' })
})

app.listen(port, () => {
  console.log(`Example app listening port ${port}`)
})