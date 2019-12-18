var mongoose=require('mongoose');
var schema=new mongoose.Schema({
    task:{
        type:String
    },
    Date:{
        type:Date,
        default:Date.now()
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model('table',schema);