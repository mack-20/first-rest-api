const express = require('express')

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

// Read All Users(R)
router.get('/', async (req, res) => {
    try{
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    }catch(error){
        res.status(500).json({Error: error.message})
    }
})

// Read Single User(R)
router.get('/:id', (req, res) => {
    try{
        const subscriber = Subscriber.findById(req.params.id)
        res.json(subscriber)
    }catch(error){
        res.status(500).json({Message: error.message})
    }
})

// Update User(U)
router.patch('/:id', (req, res) => {

})



// Delete User(D)
router.delete('/:id', (req, res) => {

})




module.exports = router