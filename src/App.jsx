import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilesPage from './pages/ProfilePage'
import MessagesPage from './pages/MessagesPage'
import ProtectedRoute from './guards/ProtectedRoute'
import VerifyOtpPage from './pages/VerifyOtpPage'
import CompleteProfilePage from './pages/CompleteProfilePage'
import HomePage from './pages/Homepage'
import NotApprovedPage from './pages/NotApprovedPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/' element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

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

        <Route path="/not-approved" element={<NotApprovedPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App