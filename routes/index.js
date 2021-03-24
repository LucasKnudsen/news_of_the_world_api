const express = require('express')
const router = express.Router()
const resourceController = require('../controllers/resourceController')
const articlesController = require('../controllers/articlesController')

/* Create routes for each controller in your application. */
router
  .get('/resource', resourceController.index)
  .get('/articles', articlesController.index)

module.exports = router
