import TodoItem from "./todoitem";

function TodoList() {
    return (
        <ul className="list-group">
          <TodoItem name="Task 1" isCompleted={true} />
          <TodoItem name="Task 2" isCompleted={false} />
          <TodoItem name="Task 3" isCompleted={false} />
        </ul>
    );
}

export default TodoList;