import mongoose, { Schema } from 'mongoose'

export const BookSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    number_of_pages: Number,
    language: String,
    ISBN: String,
    author: String,
    date_of_publish: Date,
    image: String

}, { timestamps: true })


export const bookModel = mongoose.model("BookModel", BookSchema)