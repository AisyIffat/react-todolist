import TodoItem from "./todoitem";

function TodoList(props) {
  const {todos, setTodos, onDelete} = props;
    return (
        <ul className="list-group">
          {todos.map((todo) => {
            const { text, id, isCompleted } = todo;
            return (
              <TodoItem 
              key={id} 
              id={id}
              text={text} 
              isCompleted={isCompleted}
              todos={todos}
              setTodos={setTodos}
              onDelete={(id) => {
                onDelete(id);
              }} />
            );
          })}
        </ul>
    );
}

export default TodoList;