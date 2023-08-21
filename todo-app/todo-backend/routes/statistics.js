const express = require('express')
const { getAsync } = require('../redis')
const router = express.Router()

router.get('/', (req, res) => {
  getAsync('added_todos').then(count => res.json({ 
    added_todos: count === null ? 0 : parseInt(count)
  }))
})

module.exports = router;