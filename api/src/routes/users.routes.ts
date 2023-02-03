import { Router } from 'express'
import { userController } from '../controllers/users.controller'

export const userRouter = Router()
// userRouter.use("/id",)
userRouter.route("/:id")
    .get(userController.getUser)
    .delete(userController.deleteUser)
    .put(userController.updateUser)

userRouter.post("/create-user", userController.createUser)
userRouter.route("/favorite/author").post(userController.addFavoriteAuthor).delete(userController.removeFavoriteAuthor)
userRouter.route("/favorite/book").post(userController.addFavoriteBook).delete(userController.removeFavoriteBook)
userRouter.post("/create-user", userController.createUser)
userRouter.get("/", userController.getAllUsers)


userRouter.post("/login", userController.loginUser)