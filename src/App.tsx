import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import AppShell from './components/AppShell'

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <AppShell currentPath={location.pathname} onNavigate={navigate}>
      <Outlet />
    </AppShell>
  )
}
