
import Todo from "./Todo";

const TodoList = ({todos, toggleComplete, removeTodo}) => {
    return (
          <div className="TodoList">
          <ul>
            {todos.map(todo=>(
              <Todo todo={todo} key={todo.id} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
            ))}
          </ul>
          </div> 
     );
}
 
export default TodoList;
