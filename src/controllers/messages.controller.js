import { Router } from "express";
import { Clients } from "../lib/sequelize.js";
import { emailSender, newMessage } from "../services/messages.service.js";
const router = Router();


router.get('/', async (req, res) => {
    try{
        const messages = await Clients.findAll()

        if(!messages || messages == undefined || messages == null){
            res.status(404).json({error:"An error ocurred in the operation"})
        }

        return res.status(200).json(messages)
    }catch(error){ res.status(404).json(error)}
    
})

router.post('/', async (req, res) => {
    try{
        
      
        const {name, phone, email, niche, meet, sendEmail} = req.body;

        const message = await newMessage(name, phone, email, niche, meet, sendEmail)
        await emailSender(name, phone, email, niche, meet, sendEmail)
        return res.status(200).json(message)

    }catch(error){ res.status(404).json({error})}
} )

export default router