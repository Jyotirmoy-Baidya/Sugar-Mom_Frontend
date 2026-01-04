import { useState } from "react"
import RegisterBasic from "./RegisterBasic"
import VerifyEmailOtp from "./VerifyEmailOtp"
import SetProfileDetails from "./SetProfileDetails"
import UploadDocuments from "./UploadDocuments"
import RegisterComplete from "./RegisterComplete"
import { Link } from "react-router-dom"

export default function RegisterFlow() {
    const [step, setStep] = useState(1)

    return (
        <div className="min-h-screen bg-dark flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-xl bg-dark-light border border-gray-800 shadow-xl rounded-2xl p-8">

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif font-bold text-white">
                        Create Your Account
                    </h2>
                    <p className="mt-2 text-gray-400 text-sm">Join My Sugar Mom today</p>

                    {/* Step Indicator */}
                    <div className="flex items-center justify-center mt-6 space-x-2">
                        {[1, 2, 3].map((n) => (
                            <div
                                key={n}
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${step >= n ? "bg-primary" : "bg-gray-700"
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Form Content */}
                <div className="animate-fadeIn">
                    <>
                        {step === 1 && <RegisterBasic next={() => setStep(2)} />}
                        {step === 2 && <VerifyEmailOtp next={() => setStep(3)} />}
                        {/* {step === 3 && <SetProfileDetails next={() => setStep(4)} />}
                        {step === 4 && <UploadDocuments next={() => setStep(5)} />}
                        {step === 5 && <RegisterComplete />} */}
                    </>
                </div>

                {/* Optional Footer (Only on Step 1)
                {step === 1 && (
                    <div className="mt-6 text-center text-sm text-gray-400">
                        <span>Already have an account? </span>
                        <Link to="/login" className="text-primary hover:text-primary-light font-medium">
                            Sign in
                        </Link>
                    </div>
                )} */}
            </div>
        </div>

    )
}
