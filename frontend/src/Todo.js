import './Todo.css';

function translateCompleted(complete) {
  if (complete)
    return "Yes";

  return "No";
}

function Todo(props) {
  const { todo } = props;
  const { deleteTodo, setTodoCompleted } = props;

  return (
    <tr>
      <td>{todo.id}</td>
      <td><span style={{ fontWeight: 'bold' }}>{todo.title}</span></td>
      <td><a href="#todo" onClick={(e) => { setTodoCompleted(todo) }}>{translateCompleted(todo.completed)}</a></td>
      <td><button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>Delete</button></td>
    </tr>
  );
}

export default Todo;