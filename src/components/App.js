
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [taskList,setTaskList]=useState("");
  const [showData,setShowData]=useState(true);
  
  function todoFun(e){
    e.preventDefault();
    if(taskList.trim()){
      setTodo([...todo,taskList]);
    }
  }
  const deleteTodo = (index) => {
    const newTodos = todo.filter((_, i) => i !== index);
    setTodo(newTodos);
  };
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="">
          <form action="" onSubmit={todoFun}>
            <input type="text" value={taskList} onChange={(e)=>setTaskList(e.target.value)}/>
            <button type="submit">Add Todo</button>
          </form>
        </div>
        <ul>
        {todo.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

