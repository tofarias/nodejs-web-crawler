const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.render('crawler/index', {
		title: 'WEB Crawler',
		msg: 'Welcome to Web Crawler'
	})
})

module.exports =  router