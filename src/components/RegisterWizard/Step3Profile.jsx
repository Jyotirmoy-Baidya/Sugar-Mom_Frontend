import { profileSchema } from "./schemas";

export default function Step3Profile({ profile, setProfile, next, back }) {
    const handleNext = () => {
        const result = profileSchema.safeParse(profile);
        if (!result.success) {
            alert(result.error.issues[0].message);
            return;
        }
        next();
    };

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="space-y-1">
                <h3 className="text-xl font-semibold text-white">
                    Profile Setup
                </h3>
                <p className="text-sm text-gray-400">
                    Add details to personalize your profile
                </p>
            </div>

            {/* Profile Name */}
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-300">
                    Profile Name
                </label>
                <input
                    type="text"
                    placeholder="Your display name"
                    onChange={e =>
                        setProfile({ ...profile, profileName: e.target.value })
                    }
                    value={profile.profileName}
                    className="bg-[#181818] text-white placeholder-gray-500 border border-neutral-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-500/10"
                />
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-300">
                    Bio
                </label>
                <textarea
                    rows={4}
                    placeholder="Tell something about yourself..."
                    onChange={e =>
                        setProfile({ ...profile, bio: e.target.value })
                    }
                    value={profile.bio}
                    className="bg-[#181818] text-white placeholder-gray-500 border border-neutral-600/30 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring focus:ring-yellow-500/10"
                />
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-300">
                        City
                    </label>
                    <input
                        type="text"
                        placeholder="City"
                        value={profile.city}
                        onChange={e =>
                            setProfile({
                                ...profile,
                                location: { ...profile.location, city: e.target.value },
                            })
                        }
                        className="bg-[#181818] text-white placeholder-gray-500 border border-neutral-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-500/10"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-300">
                        State
                    </label>
                    <input
                        type="text"
                        placeholder="State"
                        value={profile.state}
                        onChange={e =>
                            setProfile({
                                ...profile,
                                location: { ...profile.location, state: e.target.value },
                            })
                        }
                        className="bg-[#181818] text-white placeholder-gray-500 border border-neutral-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-500/10"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-300">
                        Country
                    </label>
                    <input
                        type="text"
                        placeholder="Country"
                        value={profile.country}
                        onChange={e =>
                            setProfile({
                                ...profile,
                                location: { ...profile.location, country: e.target.value },
                            })
                        }
                        className="bg-[#181818] text-white placeholder-gray-500 border border-neutral-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-500/10"
                    />
                </div>

            </div>

            {/* Profile Picture Upload */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">
                    Profile Picture
                </label>

                <label className="cursor-pointer border border-dashed border-neutral-600/40 rounded-lg p-4 flex items-center gap-4 hover:border-amber-400/60 transition">
                    <div className="h-12 w-12 rounded-full bg-neutral-700 flex items-center justify-center text-gray-400">
                        📷
                    </div>

                    <div className="text-sm">
                        <p className="text-gray-300">Upload profile image</p>
                        <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                    </div>

                    {/* ✅ IMPORTANT: NO value prop */}
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;

                            setProfile((prev) => ({
                                ...prev,
                                profilePicFile: file,
                            }));
                        }}
                    />
                </label>

                {/* Image Preview */}
                {profile.profilePicFile && (
                    <div className="flex items-center gap-3 mt-2">
                        <img
                            src={URL.createObjectURL(profile.profilePicFile)}
                            alt="Profile preview"
                            className="h-12 w-12 rounded-full object-cover border border-neutral-600"
                        />

                        <div className="text-xs text-gray-400">
                            <p className="text-gray-300 font-medium">
                                {profile.profilePicFile.name}
                            </p>
                            <p>
                                {(profile.profilePicFile.size / 1024).toFixed(1)} KB
                            </p>
                        </div>
                    </div>
                )}

            </div>


            {/* Actions */}
            <div className="flex gap-4 pt-4">
                <button
                    onClick={back}
                    className="flex-1 border border-neutral-700 text-gray-300 hover:text-white hover:border-neutral-500 transition py-3 rounded-lg"
                >
                    Back
                </button>

                <button
                    onClick={handleNext}
                    className="flex-1 bg-amber-400 hover:bg-amber-500 transition text-black font-medium py-3 rounded-lg shadow-md"
                >
                    Continue
                </button>
            </div>

        </div>

    );
}
