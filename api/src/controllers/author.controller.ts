import { Request, Response } from "express"
import { validationResult } from "express-validator/src/validation-result"
import { Author } from "../schemas/author.schema"

class AuthorController {

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
            msg: "New user has been created ¡congratulations!", author
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

}


export const authorController = new AuthorController()