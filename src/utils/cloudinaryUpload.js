export async function uploadToCloudinary(file) {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "sugar-mom") // change to your preset

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/duffnxol2/image/upload`,
        {
            method: "POST",
            body: formData,
        }
    )

    const data = await res.json()
    return data.secure_url
}
