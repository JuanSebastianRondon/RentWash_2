import { useState } from 'react' 
import '../styles/App.css'




function Create() {
  const handleKeyDown = (event) => {
    if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
    }
    };

    return (
    <div className="Create">
        <h1>Crear Producto</h1>
        <form>
            <label>Nombre:
                <input type="text" name="name" />
                </label>

            <label>Precio x hora: 
                <input type="number"
                    name="price"
                    placeholder='ej: 20.000'
                    min="0"
                    onKeyDown={handleKeyDown} />    
            </label>
            <label>Descripción:
                <textarea name="description" />
            </label>
            <label>Imagen:
                <input type="file" name="image" accept="image/*" />
            </label>
             <label>Disponibilidad:
                <input type="checkbox" name="disponibility" />
            </label>
            <button type="submit">Guardar Producto</button>
        </form> 
    </div>   
    )
    
}
export default Create;