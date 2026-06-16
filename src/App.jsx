import { Routes, Route, Navigate } from 'react-router-dom'
import LandingScreen from './pages/LandingScreen'
import CreateAccount from './pages/CreateAccount'
import LoginScreen   from './pages/LoginScreen'
import ProfileScreen from './pages/ProfileScreen'

export default function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center font-sans">
      <div className="overflow-hidden sm:rounded-sm max-sm:w-full max-sm:h-screen">
        <Routes>
          <Route path="/"               element={<LandingScreen />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login"          element={<LoginScreen />} />
          <Route path="/profile"        element={<ProfileScreen />} />
          <Route path="*"               element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  )
}