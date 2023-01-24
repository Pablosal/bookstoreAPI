import dotenv from 'dotenv'
import jwt, { JwtPayload } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
dotenv.config()

export const createJsonWT = async (user: string, password: string) => {
    const token = await jwt.sign({ user, password }, process.env.SECRET as string, { expiresIn: "12h" })
    return token
}

export const verifyJWTToken = (token: string): {
    token: JwtPayload | string | null,
    error: {
        name?: string,
        message?: string
    } | null | unknown
} => {
    try {
        const decodedToken = jwt.verify(token, "CACA")
        return { token: decodedToken, error: null }
    } catch (error) {
        return { token: null, error }
    }
}

export const generatePassword = async (password: string) => {
    const salt = await bcrypt.genSalt()
    const securedPassword = await bcrypt.hash(password, salt)
    return securedPassword
}

export async function verifyPassword(password: string, hashPassword: string) {
    const isCorrectPassword = await bcrypt.compare(password, hashPassword)
    return isCorrectPassword

}