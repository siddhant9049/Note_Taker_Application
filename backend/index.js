const express=require("express")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
// const router=express.Router()
const app=express()
app.use(bodyparser.json())

const port=5000;
// const app=express()
const Note=require("./Schema")
// const { Router } = require("express")
 mongoose.connect("mongodb://localhost:27017/Sidd",{
    useNewUrlParser:true,
    useUnifiedTopology:true
 }).then(()=>{
    console.log("connected to mongoDb")
 }).catch((e)=>{
    console.log(e)
 })

app.post('/v1/notes',(req,res)=>{
    try{
        const nt= Note.create({
            title:req.params,
            content:req.params,
            create:new Date()
        })
        res.json({
            status:"success",
            nt
        })
    }catch(e){
        res.status(400).json({
            message:e.message,
            
        })

    }
})

app.get("/",async(req,res)=>{
    try{
        const nt=await Note.find(Note)
        res.json(nt)
    }catch(e){
        res.status(400).json({
            message:e.message,
            
        })

    }
})

app.listen(port,()=>{
console.log(`server started on port ${port}`)
})