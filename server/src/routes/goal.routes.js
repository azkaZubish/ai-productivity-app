const express = require('express')
const router = express.Router()
const Goal = require('../models/Goal')

router.post('/goal', async (req, res) => {
    const goal = req.body
    try {
        const savedGoal = await Goal.create(goal)
        console.log(savedGoal)
        res.status(201).json(savedGoal)
    }
    catch (err) {
        console.log('Failed to save the goal', err)
        res.status(500).json(json({
            message: 'Failed to save goal',
            error: err,
        }))
    }
})