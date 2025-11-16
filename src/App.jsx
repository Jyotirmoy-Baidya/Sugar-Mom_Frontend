import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilesPage from './pages/ProfilePage'
import MessagesPage from './pages/MessagesPage'
import ProtectedRoute from './guards/ProtectedRoute'
import RegisterFlow from './auth/RegisterFlow'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterFlow />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <ProfilesPage />
            </ProtectedRoute>
          }
        />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/messages" element={<MessagesPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App