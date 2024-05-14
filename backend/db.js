/* 
    Todo {
        title: string,
        description: string,
        completed: boolean
    }
*/
require('dotenv').config();
const pass = process.env.PASS;
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://hypon:'+pass+'@cluster0.xlzxfct.mongodb.net/todos');
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}