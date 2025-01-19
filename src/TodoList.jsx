const todos = [
    { task: "mow the yard", id: crypto.randomUUID()},
    { task: "collect fuselage components", id: crypto.randomUUID()},
    { task: "rotate skull inside head 180 degrees", id: crypto.randomUUID()},
]
function TodoList() {
    return(
        <ul>
            {todos.map((todo) =>(
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    );
}
export default TodoList;