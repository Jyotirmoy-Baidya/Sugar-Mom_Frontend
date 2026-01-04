import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const { fetchUser, user, logout } = useUser();
    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        if (user && !user.isApproved && user.type === "sugar_baby") {
            alert("User not yet approved");

            navigate('/not-approved');
            setTimeout(() => {
                logout();
            }, 2000); // 2 seconds delay
        }
        if (user && !user.isSubscribed && user.type === "sugar_mom") {
            alert("User not subscribed");

            navigate('/subcribe-first');
            setTimeout(() => {
                logout();
            }, 2000); // 2 seconds delay
        }
    }, [user]);

    if (!user) {
        return <p className="text-black">Loading...</p>;
    }

    if (!user.isApproved && user.type == "sugar_baby") {
        return <p className="text-black">User not approved</p>
    }

    if (!user.isSubcribed && user.type == "sugar_mom") {
        return <p className="text-black">User not subcribed</p>
    }

    return children;
}
