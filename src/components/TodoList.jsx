import { useState } from 'react'
import Formulario from './Formulario';
import Todo from './Todo';
const App = () => {
  const [todos, setTodos] = useState([]);
  const agregarTodo = todo => {
    console.log(todo)
    setTodos((old) => [...old, todo])

  }
  const eliminarTodo = (id) => {
    setTodos((old) => old.filter(item => item.id !== id))
  }
  const editarTodo = (id) => {
    const editarTodos = todos.map(item => (
      item.id === id ? { ...item, estado: !item.estado } : item
    ))
    setTodos(editarTodos)

  }

  return (
    <div>
      <h1>Tood App</h1>
      <Formulario agregarTodo={agregarTodo} />
      <ul className='list-group list-group-numbered'>
        {
          todos.map((item) => (
            <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo} />
          ))
        }
      </ul>

    </div>
  )
}

export default App