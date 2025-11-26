import express, { NextFunction, Request, Response } from 'express'
import { AuthController } from '../controller/AuthController'
import logger from '../config/logger'
import { UserService } from '../services/userService'
const router = express.Router()



const userService=new UserService()
const authController=new AuthController(
    logger,
    userService
)



router.post(
    '/register',
    // registerValidator,
    (req: Request, res: Response, next: NextFunction) =>
        authController.registerUser(req, res, next),
)



export default router
