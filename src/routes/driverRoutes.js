import { Router } from 'express'
import { DriverController } from '../controller/DriverController.js'

const driverRoutes = Router()

const driverController = new DriverController()

driverRoutes.get('/jobs', driverController.getJobs)
driverRoutes.get('/job', driverController.getJobByDepartureAndArrivalDate)

export {
  driverRoutes
}