const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema({
    title: String,
    duration: String,
    hoursPerDay: Number,
    skill: String
})

const Goal = mongoose.model('Goal', GoalSchema)

module.exports = Goal