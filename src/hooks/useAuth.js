import axiosInstance from "../utils/axiosInstance"

export async function checkProfileVerified() {
    const res = await axiosInstance.get("/user/is-profile-verified")
    return res.data.isVerified
}
