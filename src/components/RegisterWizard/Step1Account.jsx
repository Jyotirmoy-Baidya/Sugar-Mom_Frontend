import { accountSchema } from "./schemas";

export default function Step1Account({ data, setData, next }) {
    const handleNext = () => {
        const result = accountSchema.safeParse(data);
        if (!result.success) {
            alert(result.error.issues[0].message);
            return;
        }

        next();
    };


    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="space-y-1 text-center">
                <h2 className="text-xl font-semibold text-white">
                    Create Account
                </h2>
                <p className="text-sm text-gray-400">
                    Enter your personal details to continue
                </p>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* First Name */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-300">
                        First Name
                    </label>
                    <input
                        type="text"
                        placeholder="John"
                        onChange={e => setData({ ...data, firstName: e.target.value })}
                        value={data.firstName}
                        className="bg-[#181818] text-white placeholder-gray-500 border border-neutral-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-500/10"
                    />
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-300">
                        Last Name
                    </label>
                    <input
                        type="text"
                        placeholder="Doe"
                        onChange={e => setData({ ...data, lastName: e.target.value })}
                        value={data.lastName}
                        className="bg-[#181818] text-white placeholder-gray-500 border border-neutral-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-500/10"
                    />
                </div>

                {/* Email (full width) */}
                <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="text-sm font-medium text-gray-300">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={data.email}
                        onChange={e => setData({ ...data, email: e.target.value })}
                        className="bg-[#181818] text-white placeholder-gray-500 border border-neutral-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-500/10"
                    />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-300">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={data.phone}
                        onChange={e => setData({ ...data, phone: e.target.value })}
                        className="bg-[#181818] text-white placeholder-gray-500 border border-neutral-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-500/10"
                    />
                </div>



                {/* Password (full width) */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-300">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        value={data.password}
                        onChange={e => setData({ ...data, password: e.target.value })}
                        className="bg-[#181818] text-white placeholder-gray-500 border border-neutral-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-500/10"
                    />
                </div>

                {/* Account Type */}
                <div className="flex flex-col gap-1  md:col-span-2">
                    <label className="text-sm font-medium text-gray-300">
                        Account Type
                    </label>
                    <select
                        onChange={e => setData({ ...data, type: e.target.value })}
                        value={data.type}
                        className="bg-[#181818] text-white border border-neutral-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-500/10"
                    >
                        <option value="" className="text-gray-500">
                            Select account type
                        </option>
                        <option value="sugar_baby">Sugar Baby</option>
                        <option value="sugar_mom">Sugar Mom</option>
                    </select>
                </div>

                {/* Action Button (full width) */}
                <button
                    onClick={handleNext}
                    className="md:col-span-2 mt-4 bg-amber-400 hover:bg-amber-500 transition text-black font-medium py-3 rounded-lg shadow-md"
                >
                    Continue
                </button>

            </div>

        </div>
    );
}
