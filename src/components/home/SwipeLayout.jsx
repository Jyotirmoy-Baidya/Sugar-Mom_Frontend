// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function SwipeLayout({
    title,
    user,
    onLeft,
    onRight,
    swipeDirection,
    setSwipeDirection,
}) {
    const cardVariants = {
        enter: { x: 0, opacity: 1, scale: 1 },
        swipeLeft: { x: -300, rotate: -15, opacity: 0 },
        swipeRight: { x: 300, rotate: 15, opacity: 0 },
    };

    return (
        <div style={{ padding: 30, textAlign: "center" }}>
            <h2>{title}</h2>

            <div style={{ width: 360, height: 500, margin: "auto" }}>
                <AnimatePresence>
                    <motion.div
                        key={user._id}
                        variants={cardVariants}
                        initial="enter"
                        animate={
                            swipeDirection === "left"
                                ? "swipeLeft"
                                : swipeDirection === "right"
                                    ? "swipeRight"
                                    : "enter"
                        }
                        drag="x"
                        onDragEnd={(e, info) => {
                            if (info.offset.x < -120) {
                                setSwipeDirection("left");
                                onLeft();
                            } else if (info.offset.x > 120) {
                                setSwipeDirection("right");
                                onRight();
                            }
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "#fff",
                            borderRadius: 20,
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={user.profile?.profilePic}
                            alt=""
                            style={{ width: "100%", height: "65%", objectFit: "cover" }}
                        />
                        <div style={{ padding: 15 }}>
                            <h3>{user.profile?.profileName}</h3>
                            <p>Age: {user.age || "N/A"}</p>
                            <p>{user.profile?.location?.city || "Unknown"}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div style={{ marginTop: 20, display: "flex", gap: 40, justifyContent: "center" }}>
                <button onClick={onLeft}>❌</button>
                <button onClick={onRight}>❤️</button>
            </div>
        </div>
    );
}
