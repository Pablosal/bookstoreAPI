import { body } from "express-validator";

export const authorValidations = [
    body('author_age')
        .exists().withMessage("Pleas dont leave this field empty")
        .not().isString().withMessage("this field only accepts numeric values")
        .isInt({ gt: 10 }).withMessage("only over 10  years old are acepted in this place"),
    body('author_name')
        .exists().withMessage("This field cannot be empty")
        .isString().withMessage("This field must be of type string"),
    body('author_description')
        .exists().withMessage("This field cannot be empty")
        .isString().withMessage("This field must be of type string"),
    body('author_books_written')
        .exists().withMessage("Pleas dont leave this field empty")
        .not().isString().withMessage("this field only accepts numeric values")
        .isInt({ gt: 0 }).withMessage("if the author dont have books is not a book author"),
    body("author_is_death")
        .exists().withMessage("This value must exist")
        .isBoolean().withMessage("The value mus be a boolean")





]