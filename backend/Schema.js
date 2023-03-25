const mongoose=require("mongoose")

const NoteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:false,
        
    }
    ,
    content:{
        type:String,
        required:false,
        // trim:true
    },
    create:{
        type:Date,
        default:Date.now,
     
    },
    update:{
        type:Date,
        default:Date.now,
      
    },
    createby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        // required:true
        
    }

})
const Note=mongoose.model("Note",NoteSchema)
module.exports=Note