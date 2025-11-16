import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    MenuIcon,
    XIcon,
    UserIcon,
    MessageSquareIcon,
    CreditCardIcon,
} from 'lucide-react'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [isLoggedIn, setIsLoggedIn] = useState(false) // This would be replaced with actual auth state
    return (
        <header className="sticky top-0 bg-dark-light shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center">
                        <h1 className="text-primary font-serif text-2xl font-bold">
                            My Sugar Mom
                        </h1>
                    </Link>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {isLoggedIn ? (
                            <>
                                <Link
                                    to="/profiles"
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    Browse Profiles
                                </Link>
                                <Link
                                    to="/messages"
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    Messages
                                </Link>
                                <Link
                                    to="/membership-plans"
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    Membership
                                </Link>
                                <Link
                                    to="/profile/me"
                                    className="flex items-center text-white hover:text-primary transition-colors"
                                >
                                    <UserIcon size={18} className="mr-1" />
                                    <span>My Profile</span>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/about"
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/membership-plans"
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    Membership
                                </Link>
                                <Link
                                    to="/login"
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="bg-primary hover:bg-primary-dark text-dark font-medium px-4 py-2 rounded transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </nav>
                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                    </button>
                </div>
                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
                        {isLoggedIn ? (
                            <>
                                <Link
                                    to="/profiles"
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    Browse Profiles
                                </Link>
                                <Link
                                    to="/messages"
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    Messages
                                </Link>
                                <Link
                                    to="/membership-plans"
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    Membership
                                </Link>
                                <Link
                                    to="/profile/me"
                                    className="flex items-center text-white hover:text-primary transition-colors"
                                >
                                    <UserIcon size={18} className="mr-1" />
                                    <span>My Profile</span>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/about"
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/membership-plans"
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    Membership
                                </Link>
                                <Link
                                    to="/login"
                                    className="text-white hover:text-primary transition-colors"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="bg-primary hover:bg-primary-dark text-dark font-medium px-4 py-2 rounded transition-colors inline-block text-center"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </nav>
                )}
            </div>
        </header>
    )
}
export default Header
