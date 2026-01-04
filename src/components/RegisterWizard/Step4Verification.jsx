import { verificationSchema } from "./schemas";

export default function Step4Verification({
    verification,
    setVerification,
    submit,
    loading,
    back,
}) {
    const handleSubmit = () => {
        const result = verificationSchema.safeParse(verification);

        if (!result.success) {
            alert(result.error.issues[0].message);
            return;
        }

        submit();
    };



    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="space-y-1">
                <h3 className="text-xl font-semibold text-white">
                    Identity Verification
                </h3>
                <p className="text-sm text-gray-400">
                    Upload a clear selfie and valid documents
                </p>
            </div>

            {/* Selfie Upload */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                    Upload Selfie
                </label>

                <label className="cursor-pointer border border-dashed border-neutral-600/40 rounded-lg p-4 flex items-center gap-4 hover:border-amber-400/60 transition">
                    <div className="h-14 w-14 rounded-full bg-neutral-700 flex items-center justify-center text-gray-400 overflow-hidden">
                        {verification?.selfieFile ? (
                            <img
                                src={URL.createObjectURL(verification.selfieFile)}
                                alt="Selfie Preview"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            'Click'
                        )}
                    </div>

                    <div className="text-sm">
                        <p className="text-gray-300">Upload a clear selfie</p>
                        <p className="text-xs text-gray-500">JPG or PNG, max 5MB</p>
                    </div>

                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                            setVerification({
                                ...verification,
                                selfieFile: e.target.files[0],
                            })
                        }
                    />
                </label>
            </div>

            {/* Documents Upload */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                    Upload Documents
                </label>

                <label className="cursor-pointer border border-dashed border-neutral-600/40 rounded-lg p-4 hover:border-amber-400/60 transition block">
                    <p className="text-sm text-gray-300">
                        Upload ID / Supporting documents
                    </p>
                    <p className="text-xs text-gray-500">
                        You can upload multiple files
                    </p>

                    <input
                        type="file"
                        multiple
                        className="hidden"
                        onChange={(e) =>
                            setVerification({
                                ...verification,
                                documentFiles: Array.from(e.target.files),
                            })
                        }
                    />
                </label>

                {/* Document Preview */}
                {verification?.documentFiles?.length > 0 && (
                    <div className="grid grid-cols-3 gap-3 pt-2">
                        {verification.documentFiles.map((file, index) => (
                            <div
                                key={index}
                                className="h-20 rounded-lg bg-neutral-700 overflow-hidden border border-neutral-600/40"
                            >
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={`Document ${index + 1}`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}
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
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`flex-1 py-3 rounded-lg font-medium shadow-md transition
    ${loading
                            ? "bg-gray-500 cursor-not-allowed text-gray-200"
                            : "bg-amber-400 hover:bg-amber-500 text-black"
                        }`}
                >
                    {loading ? "Submitting..." : "Finish"}
                </button>

            </div>

        </div>

    );
}
