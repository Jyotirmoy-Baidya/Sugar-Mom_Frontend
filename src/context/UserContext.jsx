import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    // -----------------------------
    // FETCH USER PROFILE
    // -----------------------------
    const fetchUser = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");

            if (!token) {
                setUser(null);
                return;
            }

            const res = await axiosInstance.get("/user/me", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setUser(res.data.user);
            setError(null);
        } catch (err) {
            setUser(null);
            setError(err?.response?.data?.error || err.message);
        } finally {
            setLoading(false);
        }
    };


    // -----------------------------
    // LOGOUT FUNCTIONALITY
    // -----------------------------
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    // Auto fetch user on load
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                loading,
                error,
                setUser,
                logout,
                fetchUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);
