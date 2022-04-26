import { useState } from "react"

const FormularioControlado = () =>{

    const [todo,setTodo] = useState({
        todoName: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
        todoCheck: false,
    })
    const handleSubmit  = (e) => {
        e.preventDefault()

    }

    const handleChange = e => {
        const {name,value,checked,type} = e.target
        setTodo({...todo,
            [name]: type === "checkbox" ? checked : value,

        })

    }
    return(
        <>
        <h2>Formulario controlado</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                   placeholder = "Ingrese Todo"
                   name = "todoName"
                   className="form-control mb-2"
                   onChange={handleChange}
                   value={todo.todoName}
            />

            <textarea name="todoDescripcion" 
                      className="form-control mb-2"
                      placeholder="Ingrese descripcion del Todo"
                      onChange={handleChange}
                      value={todo.todoDescripcion}
            />

            <select
                    className="form-control mb-2"
                    name="todoEstado"
                    value={todo.todoEstado}
                    onChange={handleChange}
                    
                  >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>

             <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        checked={todo.todoCheck}
                        onChange={handleChange}
                        name="todoCheck"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Dar prioridad
                    </label>
                </div>
                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
            </form>
        </>
    );
};

export default FormularioControlado