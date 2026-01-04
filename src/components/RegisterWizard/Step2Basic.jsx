import { basicSchema } from "./schemas";

export default function Step2Basic({ data, setData, next, back }) {
    const handleNext = () => {
        const result = basicSchema.safeParse(data);
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
                <h3 className="text-xl font-semibold text-white">
                    Personal Details
                </h3>
                <p className="text-sm text-gray-400">
                    Tell us a bit more about yourself
                </p>
            </div>

            {/* Age */}
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-300">
                    Age
                </label>
                <input
                    type="number"
                    placeholder="Enter your age"
                    min={18}
                    onChange={e =>
                        setData({ ...data, age: Number(e.target.value) })
                    }
                    value={data.age}
                    className="bg-[#181818] text-white placeholder-gray-500 border border-neutral-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-500/10"
                />
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-300">
                    Gender
                </label>
                <select
                    onChange={e => setData({ ...data, gender: e.target.value })}
                    value={data.gender}
                    className="bg-[#181818] text-white border border-neutral-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-500/10"
                >
                    <option value="" className="text-gray-500">
                        Select gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
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
