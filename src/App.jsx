import { Routes, Route, Navigate } from 'react-router-dom'
import LandingScreen  from './pages/LandingScreen'
import CreateAccount  from './pages/CreateAccount'
import LoginScreen    from './pages/LoginScreen'
import ProfileScreen  from './pages/ProfileScreen'

export default function App() {
  return (
    <div className="phone-shell">
      <Routes>
        <Route path="/"               element={<LandingScreen />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login"          element={<LoginScreen />} />
        <Route path="/profile"        element={<ProfileScreen />} />
        {/* Catch-all */}
        <Route path="*"               element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
