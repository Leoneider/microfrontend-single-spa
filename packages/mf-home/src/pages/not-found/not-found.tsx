import { Link } from 'react-router-dom'
import { PrivateRoutes } from '../../constants'

export default function NotFound() {
  return (
    <div>
    <h2>Url no encontrada</h2>
    <p>
      <Link to={`${PrivateRoutes.ROUTES.HOME}`}>Volver al inicio</Link>
    </p>
  </div>
  )
}
