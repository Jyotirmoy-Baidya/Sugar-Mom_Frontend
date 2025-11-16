import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldIcon, LockIcon, HeartIcon } from 'lucide-react'
const Footer = () => {
    return (
        <footer className="bg-dark-light text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-primary font-serif text-xl font-bold mb-4">
                            My Sugar Mom
                        </h3>
                        <p className="text-gray-300 text-sm">
                            A premium, privacy-focused platform connecting women and men for
                            mutually beneficial arrangements.
                        </p>
                        <div className="flex mt-4 space-x-4">
                            <div className="flex items-center">
                                <ShieldIcon size={16} className="text-primary mr-2" />
                                <span className="text-xs">Secure</span>
                            </div>
                            <div className="flex items-center">
                                <LockIcon size={16} className="text-primary mr-2" />
                                <span className="text-xs">Private</span>
                            </div>
                            <div className="flex items-center">
                                <HeartIcon size={16} className="text-primary mr-2" />
                                <span className="text-xs">Trusted</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-primary text-lg font-medium mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-300 hover:text-primary text-sm"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-300 hover:text-primary text-sm"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/careers"
                                    className="text-gray-300 hover:text-primary text-sm"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/press"
                                    className="text-gray-300 hover:text-primary text-sm"
                                >
                                    Press
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-primary text-lg font-medium mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/membership-plans"
                                    className="text-gray-300 hover:text-primary text-sm"
                                >
                                    Membership Plans
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/faq"
                                    className="text-gray-300 hover:text-primary text-sm"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/safety-tips"
                                    className="text-gray-300 hover:text-primary text-sm"
                                >
                                    Safety Tips
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className="text-gray-300 hover:text-primary text-sm"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-primary text-lg font-medium mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/privacy"
                                    className="text-gray-300 hover:text-primary text-sm"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/terms"
                                    className="text-gray-300 hover:text-primary text-sm"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/cookie-policy"
                                    className="text-gray-300 hover:text-primary text-sm"
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/gdpr"
                                    className="text-gray-300 hover:text-primary text-sm"
                                >
                                    GDPR Compliance
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} My Sugar Mom. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        My Sugar Mom is a platform for adults 18+. We do not condone illegal
                        activities.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
