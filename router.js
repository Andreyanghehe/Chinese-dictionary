var express = require('express')
var router = express.Router()
var fs = require('fs')
router.get('/', function (req, res, next) {
    res.render('index.html')
})

router.get('/character', function (req, res, next) {
  const id = req.query.id
  const temp = req.query.temp
  const page = req.query.page
  const pageSize = req.query.pageSize
  console.log(req.query)
  fs.readFile('./data/word.json', 'utf-8', function (err, data) {
    if(err) {
      return next
    }
    const dataObj = JSON.parse(data)
    const dataArr = []
    switch (id) {
      case '1':
        for (let i = 0; i < dataObj.length; i++) {
          if(dataObj[i].word === temp) {
            dataArr.push(dataObj[i])
          }
        }
        res.json({
          status: 0,
          data: dataArr.slice(pageSize*page-pageSize, pageSize*page),
          total: dataArr.length
        });break
      case '2':
        for (let i = 0; i < dataObj.length; i++) {
          if(dataObj[i].oldword === temp) {
            dataArr.push(dataObj[i])
          }
        }
        res.json({
          status: 0,
          data: dataArr.slice(pageSize*page-pageSize, pageSize*page),
          total: dataArr.length
        });break
      case '3':
        for (let i = 0; i < dataObj.length; i++) {
          if(dataObj[i].strokes === temp) {
            dataArr.push(dataObj[i])
          }
        }
        res.json({
          status: 0,
          data: dataArr.slice(pageSize*page-pageSize, pageSize*page),
          total: dataArr.length
        });break
      case '4':
        const arr = [
          {'a': ['ā', 'á', 'ǎ', 'à']},
          {'e': ['ē', 'é', 'ě', 'è']},
          {'i': ['ī', 'í', 'ǐ', 'ì']},
          {'o': ['ō', 'ó', 'ǒ', 'ò']},
          {'u': ['ū', 'ú', 'ǔ', 'ù', 'ǘ', 'ǚ', 'ü', 'ǜ']}
        ]
        for (let i = 0; i < dataObj.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            for(let k = 0; k < Object.values(arr[j])[0].length; k++) {
              // console.log(dataObj[i].pinyin === "hánɡ", 'g' === 'ɡ')
              if(dataObj[i].pinyin.includes(Object.values(arr[j])[0][k])) {
                if(dataObj[i].pinyin.replace(Object.values(arr[j])[0][k], Object.keys(arr[j])[0]) === temp) {
                  dataArr.push(dataObj[i])
                }
              }
            }
          }
        }
        res.json({
          status: 0,
          data: dataArr.slice(pageSize*page-pageSize, pageSize*page),
          total: dataArr.length,
        });break
    }
  })
})

router.get('/words', function (req, res, next) {
  const temp = req.query.temp
  const page = req.query.page
  const pageSize = req.query.pageSize
  console.log(req.query)
  fs.readFile('./data/ci.json', 'utf-8', function (err, data) {
    if(err) {
      return next
    }
    const dataObj = JSON.parse(data)
    const dataArr = []
    for (let i = 0; i < dataObj.length; i++) {
      if(dataObj[i].ci.includes(temp)) {
        dataArr.push(dataObj[i])
      }
    }
    res.json({
      status: 0,
      data: dataArr.slice(pageSize*page-pageSize, pageSize*page),
      total: dataArr.length,
    })
  })
})

router.get('/allegorical', function (req, res, next) {
  const temp = req.query.temp
  const page = req.query.page
  const pageSize = req.query.pageSize
  console.log(req.query)
  fs.readFile('./data/xiehouyu.json', 'utf-8', function (err, data) {
    if(err) {
      return next
    }
    const dataObj = JSON.parse(data)
    const dataArr = []
    for (let i = 0; i < dataObj.length; i++) {
      if(dataObj[i].riddle.includes(temp)) {
        dataArr.push(dataObj[i])
      }
    }
    res.json({
      status: 0,
      data: dataArr.slice(pageSize*page-pageSize, pageSize*page),
      total: dataArr.length,
    })
  })
})

router.get('/idiom', function (req, res, next) {
  const id = req.query.id
  const temp = req.query.temp
  const page = req.query.page
  const pageSize = req.query.pageSize
  console.log(req.query)
  fs.readFile('./data/idiom.json', 'utf-8', function (err, data) {
    if(err) {
      return next
    }
    const dataObj = JSON.parse(data)
    const dataArr = []
    switch (id) {
      case '1':
        for (let i = 0; i < dataObj.length; i++) {
          if(dataObj[i].word.includes(temp)) {
            dataArr.push(dataObj[i])
          }
        }
        res.json({
          status: 0,
          data: dataArr.slice(pageSize*page-pageSize, pageSize*page),
          total: dataArr.length
        });break
      case '4':
        const arr = [
          {'a': ['ā', 'á', 'ǎ', 'à']},
          {'e': ['ē', 'é', 'ě', 'è']},
          {'i': ['ī', 'í', 'ǐ', 'ì']},
          {'o': ['ō', 'ó', 'ǒ', 'ò']},
          {'u': ['ū', 'ú', 'ǔ', 'ù', 'ǘ', 'ǚ', 'ü', 'ǜ']}
        ]
        let str = ''
        for (let i = 0; i < dataObj.length; i++) {
          const py = dataObj[i].pinyin.replace(/ /g, '')
          for (let j of py ) {
            for (let k = 0; k < arr.length; k++) {
              for (let x = 0; x < Object.values(arr[k])[0].length; x++) {
                if (j === Object.values(arr[k])[0][x]) {
                  j = Object.keys(arr[k])[0]
                }
              }
            }
            str += j
          }
          if (str.includes(temp)) {
            dataArr.push(dataObj[i])
          }
          str = ''
          if (dataObj[i].abbreviation.includes(temp)) {
            dataArr.push(dataObj[i])
          }
        }
        res.json({
          status: 0,
          data: dataArr.slice(pageSize*page-pageSize, pageSize*page),
          total: dataArr.length,
        });break
    }
  })
})

module.exports = router
