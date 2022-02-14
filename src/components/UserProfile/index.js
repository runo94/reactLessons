import { useEffect, useState } from "react";

const UserProfile = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem('user')
        setData(JSON.parse(userData));
    }, [])

    console.log(data);


    return 'YES'
}

export default UserProfile;