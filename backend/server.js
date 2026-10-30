import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/test",(req,res)=>{
    res.json({
        message:"Palm Guru backend connected!"
    })
})

app.listen(4000 , () =>{
    console.log("Palm Guru server running!");
    
})