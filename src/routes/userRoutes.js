import { Router } from 'express'
import { UserController } from "../controller/UserController.js"

const userRoutes = Router()

// camelCase
const userController = new UserController()

userRoutes.get('/applications', userController.getApplications)
userRoutes.get('/application', userController.getApplicationByDepartureAndArrivalDate)

export {
  userRoutes
}