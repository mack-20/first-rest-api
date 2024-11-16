const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Subscriber = require('../models/subscriber')


// Create User(C)
router.post('/', async (req, res) => {

    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel,
        date: req.body.date || Date.now()
    })

    try{
        const savedSubscriber = await subscriber.save()
        res.status(201).json({
            Message: 'Subscriber saved Successfully',
            Subscriber: savedSubscriber
        })
    }catch(error){
        res.status(400).json({Error: error.message})
    }
})


// Read User(s) (R)
router.get('/', async (req, res) => {
    const subscriberId = req.query.id
    if (subscriberId != null && subscriberId !== ''){
        if (!mongoose.Types.ObjectId.isValid(subscriberId)){
            return res.status(400).json({Error: 'Invalid Subscriber ID format'})
        }

        try{
            const subscriber = await Subscriber.findById(subscriberId)

            if (!subscriber){
                return res.status(404).json({Error: 'Subscriber not found'})
            }

            res.json(subscriber)
        }catch(error){
            res.status(404).json({Error: error.message})
        }
    }
    else{
        try{
            const subscribers = await Subscriber.find()
            res.json(subscribers)
        }catch(error){
            res.status(500).json({Error: error.message})
        }
    }
})


// Have a lot of patching to do here....................
// Update User(U)
router.patch('/:id', async (req, res) => {
    const subscriberId = req.params.id
    
    const subscriberNewName = req.body.name
    const subscriberNewChannel = req.body.subscribedToChannel

    //Debug
    console.log(`id: ${subscriberId}, new-name: ${subscriberNewName}, new-channel: ${subscriberNewChannel}`)

    if(subscriberId != null && subscriberId != ''){
        if(!mongoose.Types.ObjectId.isValid(subscriberId)){
            return res.status(400).json({Error: 'Invalid Subscriber ID format'})
        }

        try{
            const subscriber = await Subscriber.findById(subscriberId)

            if(!subscriber){
                return res.status(404).json({Error: 'Subscriber not found'})
            }

            // Update User Info
            if (subscriberNewChannel != '' || subscriberNewChannel != null){
                subscriber.subscribedToChannel = subscriberNewChannel
            }

            if (subscriberNewName != '' || subscriberNewName != null){
                subscriber.name = subscriberNewName
            }

            try{
                const updatedSubscriber = await subscriber.save()
                res.json(updatedSubscriber)
                console.log('Updated Subscriber Data Successfully')
            }catch(error){
                res.status(400).json({Error: error.message})
            }
        }catch(error){
            res.status(500).json({Error: error.message})
        }
    }
})



// Delete User(D)
router.delete('/:id', async (req, res) => {
    const subscriberId = req.params.id

    if(subscriberId != null || subscriberId != ''){
        if(!mongoose.Types.ObjectId.isValid(subscriberId)){
            return res.status(400).json({Message: 'Invlaid Subscriber Id'})
        }

        try{
            const subscriber = await Subscriber.findById(subscriberId)
            
            if(!subscriber){
                return res.status(404).json({Error: 'Subscriber Not Found'})
            }

            const result = await subscriber.deleteOne()

            res.json({Message: 'Subscriber Deleted Successfully'})
        }catch(error){
            res.json({Message: error.message})
        }
        
    }

})






module.exports = router