var express=require('express');
var router=express.Router();
var schema=require('../schema/sch')
router.get('/api',async (req,res)=>{
    var data=await schema.find({});
    res.json(data);
});
router.post('/api',async(req,res)=>{
    var data= new schema({
        ...req.body
    });
    try{
        await data.save();
        res.send(data);
    }
    catch(err){
        console.log(err);
    }
});
router.put('/api/:id',async(req,res)=>{
    var task=await schema.findById(req.params.id);
    for(let key in req.body){
        if(task[key]!=req.body[key]){
            task[key]=req.body[key];
        }
    }
    try{
        await task.save();
        res.send(task);
    }
    catch(err){
        console.log(err);
    }
});
router.delete('/api/:id',async (req,res)=>{
    try{
        var del=await schema.findByIdAndDelete(req.params.id);
        res.send(del);
    }
    catch(err){
        throw err;
    }
});
router.patch('/api',async (req,res)=>{
    try{
        let d=await schema.updateMany(req.body,{'$set':{isCompleted:true}},{'multi':true});
        res.send(d);
    }
    catch(err){
        throw err;
    }

    
});
router.delete('/api',async(req,res)=>{
    try{
        let d=await schema.deleteMany(req.body);
        res.send(d);
    }
    catch(err){
        console.log(err);
    }
});
module.exports=router;