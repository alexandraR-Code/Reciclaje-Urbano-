import { API_BASE_URL } from '../config/apiConfig'

// GET: trae todos los puntos
export const listarPuntos = async () => {
    const respuesta = await fetch(API_BASE_URL)
    if (!respuesta.ok) throw new Error('Error al consultar los puntos')
    return await respuesta.json()
}

// POST: guarda un punto nuevo
export const guardarPunto = async (punto) => {
    const respuesta = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(punto)
    })
    if (!respuesta.ok) throw new Error('Error al guardar el punto')
    return await respuesta.json()
}