import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { Loader2, ShieldCheck } from "lucide-react";

export default function VerifyOtpPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [email, setEmail] = useState("");

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [timer, setTimer] = useState(30);

    // ⏳ Countdown Timer for Resend OTP
    useEffect(() => {
        if (timer <= 0) return;
        const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const handleVerify = async (e) => {
        e.preventDefault();

        if (!otp) return alert("Please enter the OTP");

        try {
            setLoading(true);

            const res = await axiosInstance.post("/auth/verify-otp", { email, otp });

            if (res.data) {
                alert("Your email has been verified successfully!");

                // If next step is profile completion
                navigate("/login");
            }
        } catch (err) {
            alert(err?.response?.data?.error || "Invalid OTP. Try again.");
        } finally {
            setLoading(false);
        }
    };

    // 🔁 RESEND OTP
    const handleResendOtp = async () => {
        try {
            setResendLoading(true);
            const res = await axiosInstance.post("/auth/resend-otp", { email });

            if (res.data.success) {
                alert("OTP sent again to your email.");
                setTimer(30); // restart timer
            }
        } catch (err) {
            alert(err?.response?.data?.error || "Failed to resend OTP.");
        } finally {
            setResendLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-dark flex items-center justify-center px-4">
            <div className="bg-dark-light w-full max-w-md p-8 rounded-xl shadow-lg">
                <div className="flex justify-center mb-4">
                    <ShieldCheck size={54} className="text-primary" />
                </div>

                <h2 className="text-3xl font-bold text-white text-center mb-2">
                    Verify Your Email
                </h2>

                <p className="text-gray-400 text-center mb-6">
                    Enter the 6-digit OTP sent to <span className="text-primary">{email}</span>
                </p>

                <form onSubmit={handleVerify} className="space-y-5">

                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        placeholder="Write your email"
                        className="w-full text-center text-xl tracking-widest p-3 bg-dark border border-gray-700 text-white rounded-md"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* OTP INPUT */}
                    <input
                        type="text"
                        maxLength={6}
                        placeholder="Enter OTP"
                        className="w-full text-center text-xl tracking-widest p-3 bg-dark border border-gray-700 text-white rounded-md"
                        onChange={(e) => setOtp(e.target.value)}
                    />

                    {/* VERIFY BUTTON */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex justify-center items-center gap-2 py-3 rounded-md text-dark font-semibold transition ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-primary hover:bg-primary-dark"
                            }`}
                    >
                        {loading ? (
                            <>
                                <Loader2 size={18} className="animate-spin" /> Verifying...
                            </>
                        ) : (
                            "Verify OTP"
                        )}
                    </button>
                </form>

                {/* RESEND OTP */}
                <div className="mt-6 text-center text-gray-400 text-sm">
                    {timer > 0 ? (
                        <span>Resend OTP in {timer}s</span>
                    ) : (
                        <button
                            onClick={handleResendOtp}
                            disabled={resendLoading}
                            className="text-primary hover:text-primary-light"
                        >
                            {resendLoading ? "Sending..." : "Resend OTP"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
