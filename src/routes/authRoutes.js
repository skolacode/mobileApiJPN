import { Router } from 'express'
import { AuthController } from '../controller/AuthController.js'

const authRoutes = Router()

const authController = new AuthController()

authRoutes.post('/login', authController.login)

export {
  authRoutes
}