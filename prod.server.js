var express = require('express')
var app = express()

var router = express.Router()

router.get('/',function(req,res,next){
	req.url = './index.html'
});

app.use(express.static('./dist'))

app.listen(8000,function(){
	console.log("listen on 8000")
})