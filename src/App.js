import { useState, useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const App = () => {

  const [todos, setTodos] = useState([]);
  const todo_key = "react-todo-key";

  const addTodo=(todo)=>{
    setTodos([todo, ...todos])
  }

  useEffect(()=>{
    const storage = JSON.parse(localStorage.getItem(todo_key));
    if(storage){
      setTodos(storage);
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem(todo_key, JSON.stringify(todos))
  }, [todos])



  const toggleComplete =(id)=>{
 
    setTodos(todos.map(todo=>{
      if(todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo;
    }));



  }

  const removeTodo =(id)=>{
    setTodos(todos.filter(todo=> todo.id !== id));
  }




 return (
      <div className="App">
      <h1>TODO you remember</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      </div>
  )
}
export default App;