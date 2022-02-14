import { useState, useEffect } from 'react';
import UserCard from '../UserCard';
import './HomePage.css';

const HomePage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=9')
            .then(res => res.json())
            .then(res => {
                setData(res.results)
            });
    }, []);

    return (
        <div className="home-page">
            { data ? data.map(user => (
                <UserCard
                    photo={user.picture.large}
                    name={`${user.name.title} ${user.name.first} ${user.name.last}`}
                    gender={user.gender}
                    key={user.login.md5}
                    className='user-card'
                    uId={user.login.uuid}
                    user={user}
                />
            )) :
            'Loading...' }
        </div>
    )
}

export default HomePage;