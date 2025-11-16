import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login attempt:", { email, password, rememberMe });
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#0b0b0d] via-[#0f1113] to-[#0a0a0c] flex items-center justify-center px-6 py-16 text-white font-sans overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596510914841-40074a91f90d?q=80&w=2070')] bg-cover bg-center opacity-10 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
            </div>

            {/* Login Card */}
            <motion.div
                initial="hidden"
                animate="show"
                variants={fadeInUp}
                className="relative w-full max-w-md bg-white/5 border border-gray-800 rounded-3xl backdrop-blur-md shadow-2xl p-8"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.6)" }}
            >
                {/* Header */}
                <motion.div variants={fadeInUp} className="text-center mb-8">
                    <h2 className="text-4xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFE9B3] via-[#FFD27A] to-[#E6BA3D]">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-gray-400 text-sm">
                        Sign in to continue your exclusive experience
                    </p>
                </motion.div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Email */}
                    <motion.div variants={fadeInUp}>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            Email Address
                        </label>
                        <div className="relative">
                            <MailIcon
                                size={18}
                                className="absolute left-3 top-2.5 text-gray-500"
                            />
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-black/40 border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] block w-full pl-10 p-2.5"
                                placeholder="name@example.com"
                            />
                        </div>
                    </motion.div>

                    {/* Password */}
                    <motion.div variants={fadeInUp}>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <LockIcon
                                size={18}
                                className="absolute left-3 top-2.5 text-gray-500"
                            />
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-black/40 border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] block w-full pl-10 pr-10 p-2.5"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-300"
                            >
                                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                            </button>
                        </div>
                    </motion.div>

                    {/* Remember + Forgot */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex items-center justify-between text-sm"
                    >
                        <label className="flex items-center text-gray-300">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-4 w-4 text-[#D4AF37] border-gray-700 rounded bg-black/30 focus:ring-[#D4AF37]"
                            />
                            <span className="ml-2">Remember me</span>
                        </label>
                        <Link
                            to="/forgot-password"
                            className="text-[#D4AF37] hover:text-[#FFD27A]"
                        >
                            Forgot password?
                        </Link>
                    </motion.div>

                    {/* Button */}
                    <motion.button
                        variants={fadeInUp}
                        type="submit"
                        className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B78B2E] text-black font-semibold shadow-lg transform hover:scale-[1.02] transition"
                    >
                        Sign In
                    </motion.button>

                    {/* Signup Link */}
                    <motion.div
                        variants={fadeInUp}
                        className="text-center text-sm text-gray-400"
                    >
                        Don’t have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-[#D4AF37] hover:text-[#FFD27A] font-medium"
                        >
                            Join Now
                        </Link>
                    </motion.div>
                </form>

                {/* Divider */}
                <motion.div variants={fadeInUp} className="mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-transparent text-gray-400">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    {/* Social Buttons */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                        {["Google", "Apple"].map((provider) => (
                            <button
                                key={provider}
                                type="button"
                                className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-700 rounded-lg bg-black/40 text-sm font-medium text-gray-300 hover:bg-white/5 transition"
                            >
                                {provider}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
