import React, { useEffect } from 'react'
import { useUser } from '../context/UserContext'

const SugarBabyLayout = () => {
    const { user } = useUser();
    useEffect(() => {
        if (!user.isApproved) {
            alert("User is not yet approved");
        }
    }, [])
    return (
        <div>ss</div>
    )
}

export default SugarBabyLayout