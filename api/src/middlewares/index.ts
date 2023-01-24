import { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator"

export function hasValidationErrors(req: Request, res: Response, next: NextFunction) {
    const validations = validationResult(req).array()
    if (validations.length > 0) {
        res.status(400).json({ error: validations[0].msg })
        return
    }

    next()
}