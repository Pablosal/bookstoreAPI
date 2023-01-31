import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { authorRoutes } from '../routes/author.routes'
import dotenv from 'dotenv'
import '../db/db'
import BDConnection from '../db/db'
import { authorValidations } from '../validations/author.validations'
import { createJsonWT, verifyJWTToken } from '../auth'
import { userRouter as userRoutes } from '../routes/users.routes'
import { userValidations } from '../validations/user.validations'
import { bookRouter as bookRoutes } from '../routes/book.routes'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from '../config/swagger/swagger_dev.json'
dotenv.config()
const app = express()
const connect = new BDConnection()
connect.connectToDB()

// security
app.use(cors())
app.use(helmet())

//parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// routing
app.all("/api", async (req, res, next) => {

    const token = await createJsonWT("dominico@gmail.com", "sopademarcianos")
    const isVerifiedToken = await verifyJWTToken(token)
    console.log(isVerifiedToken)
    if (!isVerifiedToken.token) {
        res.status(401).json({ error: isVerifiedToken.error })
    }
    res.json({ msg: "esta funcionando", token })
})


app.use('/api/books', bookRoutes)
app.use('/api/authors', authorRoutes)
app.use('/api/users', userValidations, userRoutes)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

export default app