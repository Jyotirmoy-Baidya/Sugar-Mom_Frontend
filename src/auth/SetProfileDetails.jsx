import { CalendarIcon, UserIcon } from "lucide-react"
import axiosInstance from "../utils/axiosInstance"
import { uploadToCloudinary } from "../utils/cloudinaryUpload"
import { useState } from "react"

export default function SetProfileDetails({ next }) {
    const [profile, setProfile] = useState({
        profile_name: "",
        DOB: "",
        gender: "",
        user_type: "",
        profile_pic_image: "",
    })

    async function handleFile(e) {
        const url = await uploadToCloudinary(e.target.files[0])
        setProfile({ ...profile, profile_pic_image: url })
    }

    async function saveProfile() {
        await axiosInstance.post("/user/set-profile", profile)
        next()
    }

    return (
        <div className="space-y-6">

            {/* Profile Name */}
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                    Profile Name
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserIcon size={18} className="text-gray-500" />
                    </div>
                    <input
                        name="profile_name"
                        required
                        onChange={(e) =>
                            setProfile({ ...profile, profile_name: e.target.value })
                        }
                        placeholder="Your public display name"
                        className="bg-dark border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md block w-full pl-10 p-2.5 focus:ring-primary focus:border-primary"
                    />
                </div>
            </div>

            {/* Date of Birth */}
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                    Date of Birth
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CalendarIcon size={18} className="text-gray-500" />
                    </div>
                    <input
                        name="DOB"
                        type="date"
                        required
                        onChange={(e) =>
                            setProfile({ ...profile, DOB: e.target.value })
                        }
                        className="bg-dark border border-gray-700 text-white placeholder-gray-500 text-sm rounded-md block w-full pl-10 p-2.5 focus:ring-primary focus:border-primary"
                    />
                </div>
            </div>

            {/* Gender */}
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                    Gender
                </label>
                <select
                    name="gender"
                    required
                    onChange={(e) =>
                        setProfile({ ...profile, gender: e.target.value })
                    }
                    className="bg-dark border border-gray-700 text-white text-sm rounded-md block w-full p-2.5 focus:ring-primary focus:border-primary"
                >
                    <option value="" disabled selected>
                        Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            {/* File Upload */}
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    Upload Profile Photo
                </label>

                <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-600 rounded-md hover:border-primary transition cursor-pointer p-6 bg-dark-light">
                    <UploadIcon size={28} className="text-gray-400 mb-2" />
                    <span className="text-gray-300 text-sm">Click to upload</span>
                    <span className="text-xs text-gray-500 mt-1">
                        JPG, PNG (max 5MB)
                    </span>

                    <input
                        type="file"
                        className="hidden"
                        onChange={handleFile}
                    />
                </label>
            </div>

            {/* Continue */}
            <button
                onClick={saveProfile}
                className="w-full py-2.5 px-4 rounded-md bg-primary text-dark font-semibold hover:bg-primary-dark transition-all"
            >
                Continue
            </button>
        </div>

    )
}
