import express from 'express'
import bodyParser from 'body-parser'
import { userRoutes } from './src/routes/userRoutes.js'
import { jwtMiddleware } from './src/middleware/jwtMiddleware.js'
import { authRoutes } from './src/routes/authRoutes.js'
import { driverRoutes } from './src/routes/driverRoutes.js'
import mysql from 'mysql'

const app = express()
const port = 3011

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'mobileAPI'
})

connection.connect()

export { connection }

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/test/me', (req, res) => { res.send('test') })

app.use('/auth', authRoutes)

app.use(jwtMiddleware)

app.use('/user', userRoutes)

app.use('/driver', driverRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})