function TodoItem(props) {
    const { id, text, isCompleted, todos, setTodos, onDelete } = props;

    const handleRemove = () => {
        const confirmRemove = confirm(
            "Are you sure you want to remove this student?"
        );
        if ( confirmRemove ) {
            onDelete(id);
        }
    };

    const handleEdit = () => {
        const updatedList = todos.map((item) => {
            if (item.id === id) {
                item.isCompleted = !isCompleted
            }
            return item;
        })
        setTodos(updatedList);
    };

    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {isCompleted ? (
                <div>
                    <button className="btn btn-sm btn-success" onClick={handleEdit}>
                        <i className="bi bi-check-square"></i>
                    </button>
                    <span className="ms-2 text-decoration-line-through">{text}</span>
                </div>
            ) : (
                <div>
                    <button className="btn btn-sm btn-light" onClick={handleEdit}>
                        <i className="bi bi-square"></i>
                    </button>
                    <span className="ms-2">{text}</span>
                </div>
            )}
            <div>
              <button className="btn btn-sm btn-danger" onClick={handleRemove}>
                <i className="bi bi-trash"></i>
              </button>
            </div>
        </li>
    );
}

export default TodoItem;