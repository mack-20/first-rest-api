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

// Update User(U)
router.patch('/', (req, res) => {

})



// Delete User(D)
router.delete('/:id', (req, res) => {

})




module.exports = router