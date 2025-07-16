import { useState } from "react";
import TodoList from "./assets/components/todolist";
import AddTodoForm from "./assets/components/addtodoform";

function App() {
  const [ todos, setTodos ] = useState([
    {
      id: 1,
      text: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Task 3",
      isCompleted: false,
    },
  ]);

  return (
    <div className="card rounded shadow-sm" style={{maxWidth: "500px",margin: "60px auto"}}>
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <TodoList todos={todos} />
        <div className="mt-4">
          <AddTodoForm 
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
