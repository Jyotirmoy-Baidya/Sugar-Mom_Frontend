import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import SwipeLayout from "./SwipeLayout";

export default function SugarMomHome() {
    const [users, setUsers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [swipeDirection, setSwipeDirection] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axiosInstance.get("/user?type=sugar_baby");
                setUsers(res.data.users || []);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const swipe = async (direction) => {
        try {
            await axiosInstance.post(`/swipe/${direction}`, {
                targetUserId: users[currentIndex]._id,
            });
        } catch (err) {
            console.error(err);
        }
        nextCard();
    };

    const nextCard = () => {
        setSwipeDirection(null);
        if (currentIndex < users.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (!users[currentIndex]) return <h3>No more profiles</h3>;

    const currentUser = users[currentIndex];

    return (
        <SwipeLayout
            title="Discover Sugar Babies ❤️"
            user={currentUser}
            onLeft={() => swipe("left")}
            onRight={() => swipe("right")}
            swipeDirection={swipeDirection}
            setSwipeDirection={setSwipeDirection}
        />
    );
}
