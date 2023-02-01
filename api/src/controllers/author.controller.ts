import { Request, Response } from "express"
import { validationResult } from "express-validator/src/validation-result"
import { Author } from "../schemas/author.schema"
import { bookModel } from "../schemas/book.schema";

class AuthorController {
    async removeAuthorBook(req: Request, res: Response) {

        const { id, bookId } = req.params;
        const validations = validationResult(req).array()

        if (validations.length > 0) {

            return res.status(400).json({ error: validations[0].msg })
        }
        try {
            const author = await Author.findOneAndUpdate({ _id: id }, { $pull: { author_books: { _id: bookId } } })
            if (!author) {
                res.status(400).json({ msg: "No user found" })
            }
            res.status(200).json({ msg: "Book removed" })

        } catch (error) {
            res.status(400).json({ msg: "Error in update" })

        }

    }
    async addAuthorBook(req: Request, res: Response) {
        const { id } = req.params;
        const newBook = await bookModel.create({ ...req.body })
        const validations = validationResult(req).array()

        if (validations.length > 0) {

            return res.status(400).json({ error: validations[0].msg })
        }
        try {
            const author = await Author.findOneAndUpdate({ _id: id }, { $push: { book: newBook } })
            if (!author) {
                res.status(400).json({ msg: "No user found" })
            }
            res.status(200).json({ msg: "Great new book added" })

        } catch (error) {
            res.status(400).json({ msg: "Error in update" })

        }
    }
    async deleteAllAuthors(req, res) {
        const deletedAuthors = await Author.deleteMany({})
        res.status(400).json({ msg: "Authors deleted", deletedAuthors })
    }
    async createAuthor(req: Request, res: Response) {
        const validations = validationResult(req).array()
        if (validations.length > 0) {
            res.status(400).json({ error: validations[0].msg })
            return
        }

        const {
            author_age,
            author_books,
            author_books_written,
            author_description,
            author_is_death,
            author_name
        } = req.body

        const author = await Author.create({
            author_age,
            author_books,
            author_books_written,
            author_description,
            author_is_death,
            author_name
        })
        author.save()
        return res.status(200).json({
            msg: "New author has been created ¡congratulations!", author
        })


    }
    async getAuthor(req: Request, res: Response) {
        const { id } = req.params
        const author = await Author.findById(id)
        res.status(200).json({ author })
    }
    async getAuthors(req: Request, res: Response) {
        const allAuthors = await Author.find({})
        res.status(200).json({
            allAuthors
        })

    }
    async deleteAuthor(req: Request, res: Response) {
        const { id } = req.params
        const deletedAuthor = await Author.findByIdAndDelete(id)

        res.status(200).json({ deletedAuthor })
    }
    async updateAuthor(req: Request, res: Response) {
        const validations = validationResult(req).array()
        if (validations.length > 0) {
            res.status(400).json({ error: validations[0].msg })
            return
        }

        const { id } = req.params

        const updatedAuthor = await Author.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
        res.status(200).json({ msg: "Updated User", updatedAuthor })
    }
    async addManyAuthors(req: Request, res: Response) {
        const { authors } = req.body
        const addManyAuthors = await Author.insertMany(authors)
        if (!addManyAuthors) {
            res.status(400).json({
                msg: "Error in the process"
            })
        }
        res.status(200).json({
            msg: "Authors added"
        })
    }
}


export const authorController = new AuthorController()