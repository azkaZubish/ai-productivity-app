// import mongoose from "mongoose";
// import connectDB from "../config/db";
require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('../config/db')

connectDB()

const goalSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const Goal = mongoose.model('Goal', goalSchema)
async function testDB() {
  try {
    const testGoal = new Goal({
      title: "Learn React",
      description: "In 15 days",
    });

    const savedGoal = await testGoal.save();
    console.log(savedGoal);
  } catch (err) {
    console.log(err);
  }
}

testDB();