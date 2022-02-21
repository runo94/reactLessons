import { Link } from 'react-router-dom';
// import './UserCard.css';
import { Avatar, Card, Typography } from '@mui/material';


const UserCard = ({ photo, name, secondname, gender, id, user }) => {

  const genderSymbol = gender === 'female' ? '♀' : '♂';

  const handleClick = (e) => {

    localStorage.setItem('user', JSON.stringify(user));

  }

  return (

    <Link to={`/user/${id}`}>
      <Card className='user-cards' onClick={handleClick}>
        <Avatar
          alt="img"
          src={photo}
          variant="rounded"
          sx={{ width: 156, height: 156 }} />
        <Typography>Имя:{name}</Typography>
        <Typography>Фамилия:{secondname}</Typography>
        <Typography>Пол:
          <span>{genderSymbol}</span>
        </Typography>

      </Card>
    </Link>
  )
}

export default UserCard;