import { Link } from "react-router-dom"

export default function RegisterComplete() {
    return (
        <div>
            <h2>🎉 Registration Complete!</h2>
            <Link to="/dashboard">Go to Dashboard</Link>
        </div>
    )
}
