import { Link } from 'react-router-dom';
import male from './1019172.png'
import female from './1019173.png'
import './UserCard.css'

const UserCard = ({ photo, name, gender, className, uId, user }) => {
    const gen = gender === 'male' ? male : female;

    const hendleClick = (e) => {
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    return (
        <Link to={`/user/${uId}`}>
            <div className={className} onClick={hendleClick}>
                <img src={photo} />
                <p>{name}</p>
                <img className='gender' src={gen} />
            </div>
        </Link>
    )
}

export default UserCard;