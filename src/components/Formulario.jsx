import { useState } from 'react'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';
const Formulario = ({ agregarTodo }) => {
  const initialState = {
    name: '',
    descripcion: '',
    estado: 'pendiente',
    prioridad: false,
    id: uuidv4()
  }

  const [todo, setTodo] = useState(initialState);

  const handleChange = e => {
    const { name, value, checked, type } = e.target;
    setTodo((old) => ({
      ...old,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: 'Error!',
        text: 'El campo nombre no puede estar en blanco',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    } if (!descripcion.trim()) {
      e.target[1].focus();
      Swal.fire({
        title: 'Error!',
        text: 'El campo descripcion no puede estar en blanco',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
    Swal.fire({
      title: 'Exitoso',
      text: 'Tarea guardada',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    agregarTodo({
      name: name,
      descripcion: descripcion,
      estado: estado === 'pendiente' ? false : true,
      prioridad: prioridad,
      id: uuidv4()
    })

    setTodo(initialState)
  }

  // Destructuring
  const { name, descripcion, estado, prioridad } = todo

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' className='form-control mb-2' placeholder='Agrega un nombre' value={name} onChange={handleChange} />
        <textarea type="text" name="descripcion" className='form-control mb-2' placeholder='agrega una descripcion' value={descripcion} onChange={handleChange} />
        <select name="estado" id="" className='form-control mb-2' value={estado} onChange={handleChange}>
          <option value="completa">Completa</option>
          <option value="pendiente">Pendiente</option>
        </select>
        <div className="form-check">
          <input
            type="checkbox"
            name="prioridad"
            id="idCheckbox"
            checked={prioridad}
            onChange={handleChange}
            className="form-check-input mb-2"
          />
          <label htmlFor="idCheckbox" className="form-check-label">
            Dar prioridad
          </label>
        </div>
        <button type='submit' className='form-control mb-2 btn-primary'>Guardar</button>
      </form>
    </div>
  )
}

export default Formulario
