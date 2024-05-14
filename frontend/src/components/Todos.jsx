/*
    todos = [
        {
            title: "goto",
            description: "hi",
        }
    ]

*/

export function Todos({todos}) {
    return (
        <>
            {todos.map((todo, index) => {
                return (
                    <div key={index}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                    </div>
                );
            })}
        </>
    );
}
