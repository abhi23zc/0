import express from 'express'
const app = express();

app.get("/", (req, res) => {
    
})

app.listen(80, ()=>{
    console.log("Server is running on port", 80)
})