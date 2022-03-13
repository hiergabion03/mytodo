const Todo = ({todo, toggleComplete, removeTodo}) => {

 

    const handleToggle=()=>{
        toggleComplete(todo.id);
    
    }

    const handleDelete=()=>{
        removeTodo(todo.id);
    }

    return ( 
    <div className="Todo">
        <input type="checkbox" onClick={handleToggle}/>
        <li style={{color: "black", textDecoration: todo.completed ? "line-through" : null}}>
            {todo.task}
        </li>
        <button onClick={handleDelete}>x</button>
    </div>);
}
 
export default Todo;