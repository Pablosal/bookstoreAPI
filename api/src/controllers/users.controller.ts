import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { createJsonWT, generatePassword, verifyPassword } from "../auth";
import { Author } from "../schemas/author.schema";
import { bookModel } from "../schemas/book.schema";
import userModel from "../schemas/user.schema";

class UserController {

    async loginUser(req: Request, res: Response) {
        const foundUser = await userModel.findById(req.body.id)
        if (!foundUser) {
            return res.json({ msg: 'This user does not exist' })
        }

        const isValid = await verifyPassword(req.body.user_password, foundUser.user_password)
        if (!isValid) {
            return res.json({ msg: 'User password is incorrect' })

        }
        const token = await createJsonWT(req.body.user_name, req.body.user_password)
        return res.json({ token })
    }
    async createUser(req: Request, res: Response) {
        const validations = validationResult(req).array()
        if (validations.length > 0) {
            res.status(400).json({ error: validations })
            return
        }
        const { user_name,
            user_password,
            user_birthdate,
            user_email, } = req.body

        const securedPassword = await generatePassword(user_password)

        const user = await userModel.create({
            user_name,
            user_password: securedPassword,
            user_birthdate,
            user_email,
        })
        user.save()
        res.status(200).json({ msg: "User created", user })
    }
    async getAllUsers(req: Request, res: Response) {
        const allUsers = await userModel.find()
        res.status(200).json({ users: allUsers })
    }
    async getUser(req: Request, res: Response) {
        const { id } = req.params
        const foundUser = await userModel.findById(id)
        if (!foundUser) {
            return res.json({ msg: 'This user does not exist' })
        }
        res.status(200).json({ msg: "Usuario ", user: foundUser })
    }
    async updateUser(req: Request, res: Response) {
        const { id } = req.params
        const updatedUser = await userModel.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
        res.status(200).json({ msg: "Updated User", updatedUser })

    }
    async deleteUser(req: Request, res: Response) {
        const { id } = req.params
        const deletedUser = await userModel.findByIdAndDelete(id)
        res.status(200).json({ msg: "User Deleted", deletedUser })

    }
    async removeFavoriteBook(req: Request, res: Response) {

        const { id, bookId } = req.params;
        const validations = validationResult(req).array()

        if (validations.length > 0) {

            return res.status(400).json({ error: validations[0].msg })
        }
        try {
            const author = await userModel.findOneAndUpdate({ _id: id }, { $pull: { user_favorite_books: { _id: bookId } } })
            if (!author) {
                res.status(400).json({ msg: "No user found" })
            }
            res.status(200).json({ msg: "Book removed" })

        } catch (error) {
            res.status(400).json({ msg: "Error in update" })

        }

    }
    async addFavoriteBook(req: Request, res: Response) {
        const { id } = req.params;
        const newBook = await bookModel.create({ ...req.body })
        const validations = validationResult(req).array()

        if (validations.length > 0) {

            return res.status(400).json({ error: validations[0].msg })
        }
        try {
            const author = await userModel.findOneAndUpdate({ _id: id }, { $push: { user_favorite_books: newBook } })
            if (!author) {
                res.status(400).json({ msg: "No user found" })
            }
            res.status(200).json({ msg: "Great new book added" })

        } catch (error) {
            res.status(400).json({ msg: "Error in update" })

        }
    }
    async removeFavoriteAuthor(req: Request, res: Response) {

        const { id, bookId } = req.params;
        const validations = validationResult(req).array()

        if (validations.length > 0) {

            return res.status(400).json({ error: validations[0].msg })
        }
        try {
            const author = await userModel.findOneAndUpdate({ _id: id }, { $pull: { user_favorite_books: { _id: bookId } } })
            if (!author) {
                res.status(400).json({ msg: "No user found" })
            }
            res.status(200).json({ msg: "Book removed" })

        } catch (error) {
            res.status(400).json({ msg: "Error in update" })

        }

    }
    async addFavoriteAuthor(req: Request, res: Response) {
        const { id, authorId } = req.params;
        const validations = validationResult(req).array()
        if (validations.length > 0) {
            return res.status(400).json({ error: validations[0].msg })
        }
        try {
            const author = await Author.findById(authorId)
            const userUpdated = await userModel.findOneAndUpdate({ _id: id }, { $push: { user_favorite_authors: author } })
            if (!userUpdated) {
                res.status(400).json({ msg: "No user found" })
            }
            res.status(200).json({ msg: "Great new author added to favorites" })

        } catch (error) {
            res.status(400).json({ msg: "Error in update" })

        }
    }

}




export const userController = new UserController()