import { Link } from 'react-router-dom';
import './UserCard.css'

const UserCard = ({ photo, name, secondname, gender, id, user }) => {

  const genderSymbol = gender === 'female' ? '♀' : '♂';

  const handleClick = (e) => {

    localStorage.setItem('user', JSON.stringify(user));

  }

  return (

    <Link to={`/user/${id}`}>
      <div className='user-cards' onClick={handleClick}>
        <p>Имя:{name}</p>
        <p>Фамилия:{secondname}</p>
        <p className='gender-text'>Пол:
          <span>{genderSymbol}</span>
        </p>
        <img className='user_photo' alt="img" src={photo} />
      </div>
    </Link>
  )
}

export default UserCard;