import express from 'express'
import noteRoute from './router/noteRouter.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'


dotenv.config()


const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT
const MONGO_URI= process.env.MONGO_URI

app.use('/api/notes',noteRoute)

mongoose.connect(MONGO_URI)
.then(() => {
    console.log('databazaya baglanildi');
    app.listen(PORT, () => {
        console.log('BACKEND olundu');
    })
}).catch(err => {
    console.log(err.message);
})