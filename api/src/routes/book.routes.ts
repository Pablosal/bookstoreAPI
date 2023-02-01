import { Router } from 'express'
import bookController from '../controllers/book.controller'
import { booksValidations } from '../validations/books.validations'

export const bookRouter = Router()
// /books
// bookRouter.use("/",booksValidations)
bookRouter.route("/").get(bookController.getBooks).post(bookController.createBook)
bookRouter.route("/admin").post(bookController.addManyBooks)

// /book/id
bookRouter.route("/:id").get(bookController.getBook).put(bookController.updateBook).delete(bookController.deleteBook)

