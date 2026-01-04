import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate, Link } from "react-router-dom";
import { MailIcon, LockIcon, Loader2 } from "lucide-react";

export default function LoginPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await axiosInstance.post("/auth/login", data);
            console.log(res)
            if (res.data) {
                const token = res.data.token;
                localStorage.setItem("token", token);

                alert("Login successful!");


                navigate("/dashboard");
            }
        } catch (err) {
            alert(err?.response?.data?.error || "Login failed! Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-dark flex items-center justify-center px-4">
            <div className="bg-dark-light w-full max-w-md p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-white text-center mb-4">
                    Welcome Back
                </h2>
                <p className="text-gray-400 text-center mb-8">
                    Login to continue
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* EMAIL */}
                    <div className="relative">
                        <MailIcon size={18} className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className="w-full pl-10 p-3 bg-dark border border-gray-700 text-white rounded-md"
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="relative">
                        <LockIcon size={18} className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full pl-10 p-3 bg-dark border border-gray-700 text-white rounded-md"
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                        />
                    </div>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex justify-center items-center gap-2 py-3 rounded-md text-dark font-semibold transition ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-primary hover:bg-primary-dark"
                            }`}
                    >
                        {loading ? (
                            <>
                                <Loader2 size={18} className="animate-spin" /> Logging in...
                            </>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-400">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-primary hover:text-primary-light">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}
