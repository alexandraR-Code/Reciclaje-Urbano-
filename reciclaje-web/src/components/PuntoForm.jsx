import { useState } from 'react'

function PuntoForm({ onGuardar }) {
    // estado del FORMULARIO: un objeto con los 4 campos
    const [formulario, setFormulario] = useState({
        nombre: '', sector: '', material: '', capacidad: ''
    })

    // actualiza solo el campo que cambio (usa el atributo name)
    const manejarCambios = (e) => {
        const { name, value } = e.target
        setFormulario({ ...formulario, [name]: value })
    }

    const manejarEnvio = async (e) => {
        e.preventDefault() // evita recargar la pagina
        const guardado = await onGuardar({
            ...formulario,
            capacidad: Number(formulario.capacidad) // el backend espera un numero
        })
        // limpia solo si se guardo bien
        if (guardado) {
            setFormulario({ nombre: '', sector: '', material: '', capacidad: '' })
        }
    }

    return (
        <form onSubmit={manejarEnvio} className="punto-form">
            <input name="nombre" value={formulario.nombre} onChange={manejarCambios} placeholder="Nombre del punto" required />
            <input name="sector" value={formulario.sector} onChange={manejarCambios} placeholder="Sector" required />
            <input name="material" value={formulario.material} onChange={manejarCambios} placeholder="Material" required />
            <input name="capacidad" type="number" min="1" value={formulario.capacidad} onChange={manejarCambios} placeholder="Capacidad" required />
            <button type="submit">Registrar punto</button>
        </form>
    )
}

export default PuntoForm