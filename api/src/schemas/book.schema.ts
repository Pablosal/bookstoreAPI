import mongoose, { Model, Schema } from 'mongoose'

export const BookSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    number_of_pages: Number,
    language: String,
    ISBN: String,
    author: String,
    date_of_publish: Date,
    created_date: { type: Date, inmutable: false, default: () => new Date().toISOString() }


}, { timestamps: true })


export const bookModel = mongoose.model("BookModel", BookSchema)