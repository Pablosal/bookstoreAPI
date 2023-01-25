import { body } from "express-validator";

export const booksValidations = [
    body("title").isString().withMessage("Please only send strings for this field")
        .exists().withMessage("This field mus exist in order for the request to continue"),
    body("description").exists().withMessage("every book should have a description")
        .isString().withMessage("This field should be a string"),
    body('price').isInt().withMessage("This field has to be a number").exists().withMessage("This field must be sent"),
    body('number_of_pages').exists().withMessage("The amount of pages must be sent").isInt().withMessage("This field should be a number"),
    body("language").exists().withMessage("This field should exists").isString().withMessage("This field should be a string"),
    body("ISBN").exists().withMessage("This field should exists").isString().withMessage("This field should be a string"),
    body("author").exists().withMessage("This field should exists").isString().withMessage("This field should be a string"),
    body("date_of_publish").exists().withMessage("This field should exists").isString().withMessage("This field should be a string").isISO8601().toDate().withMessage("The field should be sent in yyyy-mm-dd"),
]