import { z } from "zod";

const MAX_FILE_SIZE = 1 * 1024 * 1024;
export const accountSchema = z.object({
    firstName: z
        .string({ required_error: "First name is required" })
        .min(2, "First name must be at least 2 characters"),

    lastName: z
        .string({ required_error: "Last name is required" })
        .min(2, "Last name must be at least 2 characters"),

    email: z
        .string({ required_error: "Email is required" })
        .email("Invalid email"),

    phone: z
        .string()
        .optional()
        .refine(
            (val) => !val || val.length >= 10,
            "Phone number must be at least 10 digits"
        ),

    password: z
        .string({ required_error: "Password is required" })
        .min(6, "Password must be at least 6 characters"),

    type: z.enum(["sugar_mom", "sugar_baby"], {
        required_error: "Please select account type",
    }),
});

/* STEP 2 – BASIC DETAILS */
export const basicSchema = z.object({
    age: z.number().min(18, "You must be 18+"),
    gender: z.enum(["male", "female", "other"]),
});

/* STEP 3 – PROFILE */
/* STEP 3 – PROFILE (FILE BASED) */
export const profileSchema = z.object({
    profileName: z.string().min(2, "Profile name required"),
    bio: z.string().max(500).optional(),
    location: z.object({
        city: z.string().min(1),
        state: z.string().min(1),
        country: z.string().min(1),
    }),
    profilePicFile: z
        .instanceof(File, { message: "Profile picture is required" })
        .refine(
            (file) => file.size <= MAX_FILE_SIZE,
            "Profile picture must be smaller than 1MB"
        ),
});


/* STEP 4 – VERIFICATION (FILES) */
export const verificationSchema = z.object({
    selfieFile: z
        .instanceof(File, { message: "Selfie is required" })
        .refine(
            (file) => file.size <= MAX_FILE_SIZE,
            "Selfie must be smaller than 1MB"
        ),

    documentFiles: z
        .array(
            z
                .instanceof(File)
                .refine(
                    (file) => file.size <= MAX_FILE_SIZE,
                    "Each document must be smaller than 1MB"
                )
        )
        .min(1, "At least one document is required"),
});

/* FINAL – AFTER UPLOAD */
export const registerSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
    type: z.enum(["sugar_mom", "sugar_baby"]),
    age: z.number(),
    gender: z.enum(["male", "female", "other"]),

    profile: z.object({
        profileName: z.string(),
        bio: z.string().optional(),
        location: z.object({
            city: z.string(),
            state: z.string(),
            country: z.string(),
        }),
        profilePic: z.string().url(), // ✅ URL AFTER UPLOAD
    }),

    selfie: z.string().url(),
    documents: z.array(z.string().url()).min(1),
});
