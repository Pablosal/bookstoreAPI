import { body } from "express-validator";

export const userValidations = [
    body("user_name").isString().withMessage("Please only send strings for this field")
        .exists().withMessage("This field mus exist in order for the request to continue"),
    body("user_password").exists().withMessage("A password must be sent in order to continue with the request")
        .isString().withMessage("Please only send strings for this field")
        .isLength({ min: 6, max: 20 }).withMessage("Please create a longer password"),
    body('user_email').normalizeEmail().isEmail().withMessage("Email invalid"),
    body('user_birthdate').exists().withMessage("Birthdate must be sent in order to create user")
        .isISO8601().toDate().withMessage("Birthdate must be sent in this order dd-mm-yyyy"),


]