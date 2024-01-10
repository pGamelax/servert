import express from 'express'
import 'dotenv/config'
const app = express()
import bodyParser from 'body-parser'
import cors from 'cors'
import Message from './controllers/messages.controller.js'
import { sequelize } from './lib/sequelize.js'

try { 
    await sequelize.authenticate()
    console.log("Database connected")
}catch(error){
    console.error('Unable to connect to the database', error)
}

app.use(cors())
app.use(bodyParser.json())
app.use('/', Message)



app.listen( process.env.PORT || 3000, () => console.log("Application running!"))