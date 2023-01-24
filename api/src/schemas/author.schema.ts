import mongoose, { Schema } from "mongoose";
import { BookSchema } from "./book.schema";

export const AuthorSchema = new Schema({
    author_name: {
        type: String,
        required: true
    },
    author_age: {
        type: Number,
        min: 1,
        max: 99
    },
    author_is_death: Boolean,
    author_description: String,
    author_books_written: Number,
    author_books: [BookSchema],

}, { timestamps: true })



export const Author = mongoose.model('Author', AuthorSchema)

