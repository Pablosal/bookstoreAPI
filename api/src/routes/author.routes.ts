import { Router } from 'express'
import { authorController } from '../controllers/author.controller'
export const authorRoutes = Router()



authorRoutes.route("/:id")
    .get( authorController.getAuthor)
    .delete(authorController.deleteAuthor)
    .put(authorController.updateAuthor)


authorRoutes.route("/")
    .get(authorController.getAuthors)
    .post(authorController.createAuthor)

