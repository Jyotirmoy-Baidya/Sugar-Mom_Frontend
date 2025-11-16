import { LockIcon, MailIcon, UserIcon } from "lucide-react"
import axiosInstance from "../utils/axiosInstance"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function RegisterBasic({ next }) {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    })

    async function submitRegister(e) {
        e.preventDefault()
        const res = await axiosInstance.post("/auth/register", input)

        // save token
        localStorage.setItem("token", res.data.token)

        next()
    }

    return (
        <form
            onSubmit={submitRegister}
            className="bg-dark-light p-6 rounded-xl shadow-lg space-y-5 w-full max-w-md mx-auto border border-gray-800"
        >
            {/* <h2 className="text-center text-2xl font-bold text-white mb-2">
                Create Your Account
            </h2>
            <p className="text-center text-gray-400 text-sm mb-6">
                Enter your basic details to continue
            </p> */}

            {/* Name */}
            <div>
                <label className="block text-sm text-gray-300 mb-1">Name</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserIcon size={18} className="text-gray-500" />
                    </div>
                    <input
                        name="name"
                        required
                        onChange={(e) =>
                            setInput({ ...input, name: e.target.value })
                        }
                        placeholder="Enter your name"
                        className="bg-dark border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md block w-full pl-10 p-2.5 focus:ring-primary focus:border-primary"
                    />
                </div>
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MailIcon size={18} className="text-gray-500" />
                    </div>
                    <input
                        name="email"
                        type="email"
                        required
                        onChange={(e) =>
                            setInput({ ...input, email: e.target.value })
                        }
                        placeholder="name@example.com"
                        className="bg-dark border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md block w-full pl-10 p-2.5 focus:ring-primary focus:border-primary"
                    />
                </div>
            </div>

            {/* Password */}
            <div>
                <label className="block text-sm text-gray-300 mb-1">Password</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LockIcon size={18} className="text-gray-500" />
                    </div>
                    <input
                        name="password"
                        type="password"
                        required
                        onChange={(e) =>
                            setInput({ ...input, password: e.target.value })
                        }
                        placeholder="••••••••"
                        className="bg-dark border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md block w-full pl-10 p-2.5 focus:ring-primary focus:border-primary"
                    />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                    Must be at least 8 characters
                </p>
            </div>

            <button
                type="submit"
                className="w-full py-2.5 px-4 bg-primary text-dark font-semibold rounded-md hover:bg-primary-dark transition-all"
            >
                Continue
            </button>

            <p className="text-center text-sm text-gray-400 mt-3">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:text-primary-light">
                    Sign in
                </Link>
            </p>
        </form>

    )
}
