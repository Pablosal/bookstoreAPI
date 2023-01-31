import { Router } from 'express'
import { authorController } from '../controllers/author.controller'
export const authorRoutes = Router()



authorRoutes.route("/admin").delete(authorController.deleteAllAuthors)
authorRoutes.route("/:id/:bookId").delete(authorController.removeAuthorBook)
authorRoutes.route("/:id")
    .get(authorController.getAuthor)
    .delete(authorController.deleteAuthor)
    .put(authorController.updateAuthor)
    .post(authorController.addAuthorBook)


authorRoutes.route("/")
    .get(authorController.getAuthors)
    .post(authorController.createAuthor)


