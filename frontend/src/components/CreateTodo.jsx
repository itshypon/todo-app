import { useState } from 'react';

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <>
        <input type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)}></input><br />
        <input type="description" placeholder="description" onChange={(e)=> setDescription(e.target.value)}></input><br />

        <button onClick={()=> {
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify ({
                    title: title,
                    description: description
                }),
                headers : {
                    "Content": "application/json",
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo Added")
                })
        }}>Add a Todo</button>

    </>
}