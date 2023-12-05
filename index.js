import express from 'express'
import { UserController } from './src/controller/UserController.js'
import bodyParser from 'body-parser'

const app = express()
const port = 3011

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// camelCase
const userController = new UserController()

// PATH
// QUERY
app.get('/:name', userController.getUsers)

// PATH
// QUERY
// BODY
app.post('/testing', userController.postUser)

// PATH
// QUERY
// BODY
app.put('/testing', userController.putUser)

// PATH
// QUERY
// BODY
app.patch('/patch', userController.patchUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})