import { connect, set } from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()
set('strictQuery', false)
class BDConnection {
    constructor() {

    }
    connectToDB() {
        connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@booksdb.tnakprp.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => console.log("Operation Succesfull"))
        .catch((err) => { console.error("there was an error", err) })
    }
}


export default BDConnection