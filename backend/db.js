/* 
    Todo {
        title: string,
        description: string,
        completed: boolean
    }
*/
const mongodbURI = process.env.MONGODB_URI;
const mongoose = require("mongoose");
mongoose.connect(mongodbURI);
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}