const express = require('express');
const router = express.Router();
const { getjobs } = require('../controllers/jobs.controllers')

router.get('/', getjobs)

module.exports = router;