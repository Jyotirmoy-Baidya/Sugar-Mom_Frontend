import axiosInstance from "../utils/axiosInstance"
import { uploadToCloudinary } from "../utils/cloudinaryUpload"
import { useState } from "react"

export default function UploadDocuments({ next }) {
    const [documentURL, setDocumentURL] = useState("")
    const [document_type, setDocumentType] = useState("")

    async function handleDocFile(e) {
        const url = await uploadToCloudinary(e.target.files[0])
        setDocumentURL(url)
    }

    async function uploadDoc() {
        await axiosInstance.post("/user/set-profile", {
            documentURL,
            document_type
        })

        next()
    }

    return (
        <>
            <select onChange={e => setDocumentType(e.target.value)}>
                <option>Aadhar Card</option>
                <option>Passport</option>
            </select>

            <input type="file" onChange={handleDocFile} />

            <button onClick={uploadDoc}>Finish</button>
        </>
    )
}
