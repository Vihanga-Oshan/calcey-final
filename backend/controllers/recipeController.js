const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Recipe = require('../models/recipeModel')
const User = require('../models/userModel')

// @desc    Get goals
// @access  Private
const getrecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.find({ user: req.user.id })

  res.status(200).json(recipe)
  
})

// @desc    Set goal
// @access  Private
const setrecipe = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const recipe = await Recipe.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(recipe)
})

// @desc    Update goal
// @access  Private
const updaterecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)

  if (!recipe) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (recipe.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedrecipes = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedrecipes)
})

// @desc    Delete goal
// @access  Private
const deleterecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)

  if (!recipe) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (recipe.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  res.status(200).json({ id: req.params.id })
  await recipe.remove()
  res.status(200).json({ id: req.params.id })
 
  
})

module.exports = {
  getrecipe,
  setrecipe,
  updaterecipe,
  deleterecipe,
}