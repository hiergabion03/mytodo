import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState({
        id: 0,
        task: "",
        completed: false
    });

    const handleInputChange =(e)=>{
        setTodo({...todo, task: e.target.value});
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: uuidv4()})
            setTodo({...todo, task: ""})
        }
        
    }

    console.log(todo.task);
    console.log(todo);

    return ( 
        <div className="TodoForm">
       <form onSubmit={handleSubmit} >
           <input className="task" type="text"
           value={todo.task} onChange={handleInputChange}/>
           <button>Add</button>
       </form>
       </div>
     );
}
 
export default TodoForm;