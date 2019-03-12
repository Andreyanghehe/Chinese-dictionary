var express = require('express')
var app = express()
var router = require('./router') // 导入路由
var path = require('path')
// npm install body-parser  获取post请求参数需安装插件body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('html', require('express-art-template'))

// 公开指定目录 直接通过 /a/xx 的方式访问 public 目录中的所有资源
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))

app.all("*",function(req, res, next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() === 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
});

app.use(router) // 挂载路由 要在listen之前, 所有配置之后

//中间件
app.use(function(req, res){ // 任何地址都可接受, 所以要放在路由之后, 当所有地址都不匹配渲染404.html
    res.render('404.html')
})
app.use(function(err, req, res, next){  // 全局错误处理中间件 next(err)会调用此路由
    res.status(500).json({
        err_code: 500,
        message: err.message
    })
})


app.listen(3000, function () { // 监听端口
    console.log('app is running at port 3000.')
})
