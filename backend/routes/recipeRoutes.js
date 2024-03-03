const express = require('express')
const router = express.Router()
const {
  getrecipe,
  setrecipe,
  updaterecipe,
  deleterecipe,
} = require('../controllers/recipeController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getrecipe).post(protect, setrecipe)
router.route('/:id').delete(protect, deleterecipe).put(protect, updaterecipe)

module.exports = router