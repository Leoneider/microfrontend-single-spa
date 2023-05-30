import { Link } from 'react-router-dom'
import { PublicRoutes } from '../../constants'

export default function NotFound() {
  return (
    <div>
    <h2>Url no encontrada</h2>
    <p>
      <Link to={`${PublicRoutes.LINK.LOGIN}`}>Volver al inicio</Link>
    </p>
  </div>
  )
}
