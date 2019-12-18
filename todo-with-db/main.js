var express=require('express');
var app=express();
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var router=require('./routes/file')
var url='mongodb://localhost:27017/learn';
mongoose.connect(url,{useNewUrlParser:true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');
app.use('/',router);
app.get('/',(req,res)=>{
    res.render('index');
})
app.listen(3000,(err)=>{
    if(err) throw err;
    console.log('listening to port 3000...');
});