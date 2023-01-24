import mongoose from "mongoose";
import { AuthorSchema } from "./author.schema";
import { BookSchema } from "./book.schema";

const userSchema = new mongoose.Schema({
    user_email: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_birthdate: {
        type: Date,
        required: true
    },
    user_favorite_books: [BookSchema],
    user_favorite_authors: [AuthorSchema]

}, { timestamps: true })

const userModel = mongoose.model("User", userSchema)
export default userModel