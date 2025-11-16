import { useState } from "react"
import axiosInstance from "../utils/axiosInstance"
import { ShieldCheck, Loader2 } from "lucide-react"

export default function VerifyEmailOtp({ next }) {
    const [otp, setOtp] = useState("")
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)

    async function sendOtp() {
        setLoading(true)
        await axiosInstance.post("/auth/send-verify-otp")
        setLoading(false)
        setSent(true)
    }

    async function verifyOtp() {
        setLoading(true)

        await axiosInstance.post("/auth/verify-account", { otp })
        const res = await axiosInstance.get("/user/is-profile-verified")

        setLoading(false)

        if (res.data.isVerified) {
            next()
        }
    }

    return (
        <div className="min-h-screen bg-dark flex items-center justify-center px-4">
            <div className="bg-dark-light w-full max-w-md p-8 rounded-xl shadow-lg">

                <div className="text-center mb-6">
                    <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldCheck size={30} className="text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Verify Your Email</h2>
                    <p className="text-gray-400 mt-1">Enter the OTP sent to your inbox</p>
                </div>

                <div className="space-y-5">

                    {/* OTP REQUEST BUTTON */}
                    {!sent && (
                        <button
                            onClick={sendOtp}
                            disabled={loading}
                            className="w-full bg-primary hover:bg-primary-dark text-dark font-semibold py-2.5 rounded-md transition-all"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <Loader2 className="animate-spin" size={18} />
                                    Sending...
                                </span>
                            ) : (
                                "Send OTP"
                            )}
                        </button>
                    )}

                    {/* OTP INPUT */}
                    {sent && (
                        <>
                            <div>
                                <label className="text-sm text-gray-300 block mb-1">Enter OTP</label>
                                <input
                                    type="text"
                                    maxLength="6"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="bg-dark border border-gray-700 text-white text-center tracking-widest text-lg rounded-md focus:ring-primary focus:border-primary w-full py-3 outline-none"
                                    placeholder="••••••"
                                />
                            </div>

                            {/* VERIFY BUTTON */}
                            <button
                                onClick={verifyOtp}
                                disabled={loading || otp.length !== 6}
                                className={`w-full font-semibold py-2.5 rounded-md transition-all ${otp.length === 6
                                    ? "bg-primary hover:bg-primary-dark text-dark"
                                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <Loader2 className="animate-spin" size={18} />
                                        Verifying...
                                    </span>
                                ) : (
                                    "Verify & Continue"
                                )}
                            </button>

                            <button
                                className="w-full text-sm mt-3 text-primary hover:text-primary-light"
                                onClick={sendOtp}
                                disabled={loading}
                            >
                                Resend OTP
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
