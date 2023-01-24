import { Router } from 'express'
import { userController } from '../controllers/users.controller'

export const userRouter = Router()
// userRouter.use("/id",)
userRouter.route("/:id")
    .get(userController.getUser)
    .delete(userController.deleteUser)
    .put(userController.updateUser)

userRouter.post("/create-user", userController.createUser)
userRouter.get("/", userController.getAllUsers)


userRouter.post("/login", userController.loginUser)