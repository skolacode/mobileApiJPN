import express from 'express'
import bodyParser from 'body-parser'
import { userRoutes } from './src/routes/userRoutes.js'
import { jwtMiddleware } from './src/middleware/jwtMiddleware.js'

const app = express()
const port = 3011

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/test/me', (req, res) => { res.send('test') })

app.use(jwtMiddleware)

app.use('/users', userRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})