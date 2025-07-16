function AddTodoForm(props) {
    const { todos, setTodos} = props;
    return (
        <form className="d-flex justify-content-between align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Add new item..."
              id="text"
              required
            />
            <button className="btn btn-primary btn-sm rounded ms-2"
                onClick={(event) => {
                // disable the default behaviour 
                event.preventDefault();
                // check if the input field is empty or not
                if (text.value === "") {
                alert("Please fill in the task");
                } else {
                setTodos([ 
                    ...todos, 
                    {
                    id: Math.random(),
                    text: text.value,
                    isCompleted: false,
                    },
                ]);
                // clear the input
                text.value = "";
                }
            }}
            >
                Add</button>
        </form>
    );
}

export default AddTodoForm;