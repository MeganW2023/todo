import { useRef } from "react";

function TodoForm(props) {
  const { addTodo } = props;
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>

      <div class="input-group">
        <div class="input-group-text">Add a new task</div>

        <input
          type="text"
          className='form-control'
          ref={inputRef}
          placeholder="What needs to be done?"
        />

        <button className='btn btn-primary' type="submit">Add</button>
      </div>
    </form>
  );
}

export default TodoForm;
