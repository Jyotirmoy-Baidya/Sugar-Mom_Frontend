import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotApprovedPage() {
    return (
        <div className="min-h-screen bg-dark flex items-center justify-center px-4">
            <div className="bg-dark-light w-full max-w-md p-8 rounded-xl shadow-lg text-center">

                <div className="flex justify-center mb-4">
                    <div className="bg-red-500/20 p-4 rounded-full">
                        <AlertTriangle size={40} className="text-red-400" />
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-3">
                    Access Restricted
                </h2>

                <p className="text-gray-400 mb-top-4">
                    Your account is <span className="text-red-400 font-semibold">not yet approved</span>.
                </p>

                <p className="text-gray-400 mb-8">
                    Please contact the admin team for verification and approval.
                </p>

                <Link
                    to="/login"
                    className="inline-block w-full bg-primary hover:bg-primary-dark text-dark font-semibold py-3 rounded-md transition"
                >
                    Go Back to Login
                </Link>
            </div>
        </div>
    );
}
