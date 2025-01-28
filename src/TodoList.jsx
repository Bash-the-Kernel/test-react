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
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function MonthList() {
  return (
    <ul>
      {months.map((month, index) => (<li key={index}>{month}</li>))}
    </ul>
  );
}

export default TodoList;