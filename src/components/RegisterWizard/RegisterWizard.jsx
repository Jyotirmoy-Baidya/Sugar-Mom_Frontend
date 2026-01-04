import { useState } from "react";
import { registerSchema } from "./schemas";

import Step1Account from "./Step1Account";
import Step2Basic from "./Step2Basic";
import Step3Profile from "./Step3Profile";
import Step4Verification from "./Step4Verification";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function RegisterWizard() {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        // firstName: "",
        // lastName: "",
        // email: "",
        // phone: "",
        // password: "",
        // type: "",
        // age: 0,
        // gender: "",
        firstName: "Aarav",
        lastName: "Sharma",
        email: "aarav.sharma@example.com",
        phone: "9876543210",
        password: "Test@123",
        type: "sugar_baby", // or "sugar_mom"
        age: 24,
        gender: "male", // "female" | "other"
    });

    const [profile, setProfile] = useState({
        // profileName: "",
        // bio: "",
        // location: {
        //     city: "",
        //     state: "",
        //     country: "",
        // },
        // profilePicFile: null,
        profileName: "Aarav S",
        bio: "Love traveling, fitness enthusiast, and enjoy meaningful conversations.",
        location: {
            city: "Bengaluru",
            state: "Karnataka",
            country: "India",
        },
        profilePicFile: null,
    });

    const [verification, setVerification] = useState({
        selfieFile: null,
        documentFiles: [],
    });

    const uploadToCloudinary = async (file) => {
        const fd = new FormData();
        fd.append("file", file);
        fd.append("upload_preset", "sugar-mom");

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/duffnxol2/upload",
            { method: "POST", body: fd }
        );

        const json = await res.json();
        return json.secure_url;
    };



    const submit = async () => {
        if (loading) return; // prevent double submit

        try {
            setLoading(true);

            /* 1️⃣ Upload PROFILE picture */
            const profilePicUrl = await uploadToCloudinary(
                profile.profilePicFile
            );

            /* 2️⃣ Upload SELFIE */
            const selfieUrl = await uploadToCloudinary(
                verification.selfieFile
            );

            /* 3️⃣ Upload DOCUMENTS */
            const documentUrls = [];
            for (const file of verification.documentFiles) {
                const url = await uploadToCloudinary(file);
                documentUrls.push(url);
            }

            /* 4️⃣ Build final payload */
            const payload = {
                ...data,
                profile: {
                    profileName: profile.profileName,
                    bio: profile.bio,
                    location: profile.location,
                    profilePic: profilePicUrl,
                },
                selfie: selfieUrl,
                documents: documentUrls,
            };

            /* 5️⃣ Final Zod validation */
            const result = registerSchema.safeParse(payload);
            if (!result.success) {
                alert(result.error.issues[0].message);
                return;
            }

            /* 6️⃣ API call */
            await axiosInstance.post("/auth/register", payload);

            alert("Registration completed successfully!");

            /* 7️⃣ RESET EVERYTHING */
            setStep(1);

            setData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                password: "",
                type: "",
                age: 0,
                gender: "",
            });

            setProfile({
                profileName: "",
                bio: "",
                location: {
                    city: "",
                    state: "",
                    country: "",
                },
                profilePicFile: null,
            });

            setVerification({
                selfieFile: null,
                documentFiles: [],
            });
            navigate('/verify-otp');

        } catch (err) {
            console.error(err);
            alert(err?.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-[#181818] px-4 py-10">
            <div className="bg-[#1f1f1f] border border-neutral-500/10 p-6 max-w-lg w-full rounded-xl">
                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                        <span className={step >= 1 ? "text-amber-400" : ""}>Account</span>
                        <span className={step >= 2 ? "text-amber-400" : ""}>Basic</span>
                        <span className={step >= 3 ? "text-amber-400" : ""}>Profile</span>
                        <span className={step >= 4 ? "text-amber-400" : ""}>Verify</span>
                    </div>

                    <div className="h-1.5 w-full bg-neutral-700/40 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] transition-all duration-300"
                            style={{ width: `${(step - 1) * 33.33}%` }}
                        />
                    </div>
                </div>

                {step === 1 && <Step1Account data={data} setData={setData} next={() => setStep(2)} />}
                {step === 2 && <Step2Basic data={data} setData={setData} next={() => setStep(3)} back={() => setStep(1)} />}
                {step === 3 && <Step3Profile profile={profile} setProfile={setProfile} next={() => setStep(4)} back={() => setStep(2)} />}
                {step === 4 && (
                    <Step4Verification
                        verification={verification}
                        setVerification={setVerification}
                        submit={submit}
                        loading={loading}
                        back={() => setStep(3)}
                    />
                )}

            </div>
        </div>
    );
}
