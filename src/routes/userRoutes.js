import { Router } from 'express'
import { UserController } from "../controller/UserController.js"

const userRoutes = Router()

// camelCase
const userController = new UserController()

// PATH
// QUERY
userRoutes.get('/:name', userController.getUsers)

// PATH
// QUERY
// BODY
userRoutes.post('/testing', userController.postUser)

// PATH
// QUERY
// BODY
userRoutes.put('/testing', userController.putUser)

// PATH
// QUERY
// BODY
userRoutes.patch('/patch', userController.patchUser)

export {
  userRoutes
}