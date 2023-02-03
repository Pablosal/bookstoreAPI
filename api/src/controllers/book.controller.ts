import { Request, Response } from "express"
import { validationResult } from "express-validator"
import { bookModel } from "../schemas/book.schema"

class BookController {
    async createBook(req: Request, res: Response) {
        const validations = validationResult(req).array()
        if (validations.length > 0) {
            return res.status(400).json({ error: validations })
        }
        const book = await bookModel.create(
            { ...req.body }
        )
        await book.save()
        res.status(200).json({
            msg: "Book created",
            book
        })
    }
    async getBooks(req: Request, res: Response) {
        const books = await bookModel.find({})
        console.log(books);

        res.status(200).json({ books })
    }
    async updateBook(req: Request, res: Response) {
        const { id } = req.params
        console.log(id)
        const bookFound = await bookModel.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
        if (!bookFound) {
            return res.json({ msg: 'This book does not exist' })
        }
        res.status(200).json({ msg: "Book updated", bookFound })
    }
    async deleteBook(req: Request, res: Response) {
        const { id } = req.params
        const bookFound = await bookModel.findByIdAndDelete(id)
        if (!bookFound) {
            return res.status(404).json({ msg: 'This book does not exist' })
        }
        res.status(200).json({ msg: 'Book was deleted', bookFound })

    }
    async getBook(req: Request, res: Response) {

        const { id } = req.params
        const book = await bookModel.findById(id)
        res.status(200).json({ book })
    }
    async addManyBooks(req: Request, res: Response) {
        const { books } = req.body
        const addManyBooks = await bookModel.insertMany(books)
        if (!addManyBooks) {
            res.status(400).json({
                msg: "Error in the process"
            })
        }
        res.status(200).json({
            msg: "Books added"
        })
    }
}




const bookController = new BookController()


export default bookController