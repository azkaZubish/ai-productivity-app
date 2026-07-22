// import mongoose from "mongoose";
// import connectDB from "../config/db";
require('dotenv').config()
const connectDB = require('../config/db')
const Goal = require('../models/Goal')

connectDB()

async function testDB() {
  try {
    const testGoal = new Goal({
      title: "Learn React",
      duration: "15 days",
      hoursPerDay: 6,
      skill: 'Intermediate'
    });

    const savedGoal = await testGoal.save();
    console.log(savedGoal);
  } catch (err) {
    console.log(err);
  }
}

testDB();