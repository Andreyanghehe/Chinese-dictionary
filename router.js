var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
    res.render('index.html')
})

router.post('/postrequest', function (req, res, next) {
  res.json({
    hello: "你好!"
  })
})


module.exports = router
