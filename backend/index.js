const express = require('express')
const types = require('./types')
const app = express()
const port = 3000

app.use(express.json())

app.get("/todo", function(req, res){
    const createPayload = req.body;
    const parsedPayload = types.createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    //put in mongodb

})

app.post("/todos", function(req, res){
    
})

app.put("/completed", function(req, res){
    
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})