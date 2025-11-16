import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    EyeIcon,
    EyeOffIcon,
    UserIcon,
    MailIcon,
    LockIcon,
    CakeIcon,
} from 'lucide-react'
const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        gender: '',
        role: '',
        agreeTerms: false,
    })
    const [showPassword, setShowPassword] = useState(false)
    const [currentStep, setCurrentStep] = useState(1)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: checked,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1)
        } else {
            // This would connect to a backend registration service
            console.log('Registration data:', formData)
        }
    }
    const handlePrevious = () => {
        setCurrentStep(currentStep - 1)
    }
    return (
        <div className="min-h-screen bg-dark flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-dark-light p-8 rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif font-bold text-white">
                        Create Your Account
                    </h2>
                    <p className="mt-2 text-gray-400">Join My Sugar Mom today</p>
                    <div className="flex items-center justify-center mt-6">
                        <div
                            className={`w-3 h-3 rounded-full ${currentStep >= 1 ? 'bg-primary' : 'bg-gray-700'}`}
                        ></div>
                        <div
                            className={`w-12 h-1 ${currentStep >= 2 ? 'bg-primary' : 'bg-gray-700'}`}
                        ></div>
                        <div
                            className={`w-3 h-3 rounded-full ${currentStep >= 2 ? 'bg-primary' : 'bg-gray-700'}`}
                        ></div>
                        <div
                            className={`w-12 h-1 ${currentStep >= 3 ? 'bg-primary' : 'bg-gray-700'}`}
                        ></div>
                        <div
                            className={`w-3 h-3 rounded-full ${currentStep >= 3 ? 'bg-primary' : 'bg-gray-700'}`}
                        ></div>
                    </div>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {currentStep === 1 && (
                        <>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium text-gray-300 mb-1"
                                    >
                                        First Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <UserIcon size={18} className="text-gray-500" />
                                        </div>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="bg-dark border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md focus:ring-primary focus:border-primary block w-full pl-10 p-2.5"
                                            placeholder="John"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-medium text-gray-300 mb-1"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="bg-dark border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md focus:ring-primary focus:border-primary block w-full p-2.5"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <MailIcon size={18} className="text-gray-500" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-dark border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md focus:ring-primary focus:border-primary block w-full pl-10 p-2.5"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <LockIcon size={18} className="text-gray-500" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="bg-dark border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md focus:ring-primary focus:border-primary block w-full pl-10 pr-10 p-2.5"
                                        placeholder="••••••••"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="text-gray-500 hover:text-gray-300 focus:outline-none"
                                        >
                                            {showPassword ? (
                                                <EyeOffIcon size={18} />
                                            ) : (
                                                <EyeIcon size={18} />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <p className="mt-1 text-xs text-gray-500">
                                    Password must be at least 8 characters with a number and
                                    special character
                                </p>
                            </div>
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="bg-dark border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="••••••••"
                                />
                            </div>
                        </>
                    )}
                    {currentStep === 2 && (
                        <>
                            <div>
                                <label
                                    htmlFor="dateOfBirth"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Date of Birth
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <CakeIcon size={18} className="text-gray-500" />
                                    </div>
                                    <input
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        type="date"
                                        required
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        className="bg-dark border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md focus:ring-primary focus:border-primary block w-full pl-10 p-2.5"
                                    />
                                </div>
                                <p className="mt-1 text-xs text-gray-500">
                                    You must be at least 18 years old to register
                                </p>
                            </div>
                            <div>
                                <label
                                    htmlFor="gender"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    Gender
                                </label>
                                <select
                                    id="gender"
                                    name="gender"
                                    required
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="bg-dark border border-gray-700 text-white text-sm rounded-md focus:ring-primary focus:border-primary block w-full p-2.5"
                                >
                                    <option value="" disabled>
                                        Select your gender
                                    </option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="role"
                                    className="block text-sm font-medium text-gray-300 mb-1"
                                >
                                    I am joining as a
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    required
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="bg-dark border border-gray-700 text-white text-sm rounded-md focus:ring-primary focus:border-primary block w-full p-2.5"
                                >
                                    <option value="" disabled>
                                        Select your role
                                    </option>
                                    <option value="client">
                                        Female Client (I pay for companionship)
                                    </option>
                                    <option value="provider">
                                        Male Service Provider (I offer companionship)
                                    </option>
                                </select>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="agreeTerms"
                                    name="agreeTerms"
                                    type="checkbox"
                                    required
                                    checked={formData.agreeTerms}
                                    onChange={handleCheckboxChange}
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-700 rounded bg-dark"
                                />
                                <label
                                    htmlFor="agreeTerms"
                                    className="ml-2 block text-sm text-gray-300"
                                >
                                    I agree to the{' '}
                                    <Link
                                        to="/terms"
                                        className="text-primary hover:text-primary-light"
                                    >
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link
                                        to="/privacy"
                                        className="text-primary hover:text-primary-light"
                                    >
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>
                        </>
                    )}
                    {currentStep === 3 && (
                        <>
                            <div className="text-center">
                                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <UserIcon size={32} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">
                                    Identity Verification
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    To ensure safety and security for all members, we require
                                    identity verification.
                                </p>
                            </div>
                            <div className="border border-dashed border-gray-600 rounded-md p-6 text-center">
                                <p className="text-gray-400 mb-4">
                                    Upload a photo of your government-issued ID
                                </p>
                                <button
                                    type="button"
                                    className="bg-dark hover:bg-dark-light text-gray-300 border border-gray-600 font-medium py-2 px-4 rounded-md transition-colors"
                                >
                                    Choose File
                                </button>
                                <p className="mt-2 text-xs text-gray-500">
                                    Supported formats: JPG, PNG, PDF (max 5MB)
                                </p>
                            </div>
                            <div className="border border-dashed border-gray-600 rounded-md p-6 text-center mt-4">
                                <p className="text-gray-400 mb-4">
                                    Take a selfie for face verification
                                </p>
                                <button
                                    type="button"
                                    className="bg-dark hover:bg-dark-light text-gray-300 border border-gray-600 font-medium py-2 px-4 rounded-md transition-colors"
                                >
                                    Open Camera
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-4">
                                Your ID will be encrypted and securely processed. We comply with
                                GDPR regulations and will never share your personal information
                                with third parties.
                            </p>
                        </>
                    )}
                    <div className="flex justify-between">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={handlePrevious}
                                className="py-2.5 px-4 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-dark hover:bg-dark-light focus:outline-none"
                            >
                                Previous
                            </button>
                        )}
                        <button
                            type="submit"
                            className={`py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-dark bg-primary hover:bg-primary-dark focus:outline-none ${currentStep === 1 && 'w-full'}`}
                        >
                            {currentStep < 3 ? 'Next' : 'Complete Registration'}
                        </button>
                    </div>
                </form>
                {currentStep === 1 && (
                    <div className="mt-6 text-center text-sm text-gray-400">
                        <span>Already have an account? </span>
                        <Link
                            to="/login"
                            className="text-primary hover:text-primary-light font-medium"
                        >
                            Sign in
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
export default RegisterPage
