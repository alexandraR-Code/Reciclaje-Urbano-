import { useEffect, useState } from 'react'
import PuntoForm from './components/PuntoForm'
import PuntoCard from './components/PuntoCard'
import { listarPuntos, guardarPunto } from './services/PuntoServices'

function App() {
  // estado del LISTADO: empieza vacio
  const [puntos, setPuntos] = useState([])
  const [error, setError] = useState('')

  const cargarPuntos = async () => {
    try {
      setPuntos(await listarPuntos())
      setError('')
    } catch {
      setError('No se pudo conectar con el servidor')
    }
  }

  // [] = se ejecuta una sola vez, al abrir la pagina
  useEffect(() => { cargarPuntos() }, [])

  const manejarGuardar = async (punto) => {
    try {
      await guardarPunto(punto)
      await cargarPuntos() // vuelve a pedir la lista: asi aparece sin recargar
      return true
    } catch {
      setError('No se pudo guardar el punto')
      return false
    }
  }

  return (
    <div className="contenedor">
      <h1>Puntos de reciclaje</h1>
      <PuntoForm onGuardar={manejarGuardar} />
      {error && <p className="error">{error}</p>}
      <div className="lista-puntos">
        {puntos.map((p) => <PuntoCard key={p.id} punto={p} />)}
      </div>
    </div>
  )
}

export default App