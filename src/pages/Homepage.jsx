import { useUser } from "../context/UserContext";

export default function HomePage() {
    const { user } = useUser();

    if (!user) return <p>Loading...</p>;

    if (user.type === "sugar_mom") {
        return <SugarMomHome />;
    }

    if (user.type === "sugar_baby") {
        return <SugarBabyHome />;
    }

    return <p>Invalid user type</p>;
}
