import React from 'react'

const Todo = ({ todo, eliminarTodo, editarTodo }) => {
  const { id, name, descripcion, prioridad, estado } = todo
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{name} {estado ? "completa" : "pendiente"}</div>
        <p>{descripcion}</p>
        <div>
          <button className='btn btn-danger me-2' onClick={() => { eliminarTodo(id) }}>Eliminar</button>
          <button className='btn btn-warning ' onClick={() => editarTodo(id)}>Editar</button>
        </div>
      </div>
      <span className="badge bg-primary rounded-pill">{prioridad && "prioritario"}</span>
    </li>
  )
}

export default Todo
