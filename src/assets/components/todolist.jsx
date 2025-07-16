import TodoItem from "./todoitem";

function TodoList(props) {
  const {todos} = props;
    return (
        <ul className="list-group">
          {todos.map((todo) => {
            const { text, id, isCompleted } = todo;
            return <TodoItem key={id} text={text} isCompleted={isCompleted} />;
          })}
        </ul>
    );
}

export default TodoList;