import { Link } from 'react-router-dom';
import { Avatar, Card, Typography, Grid, Button, CardActions } from '@mui/material';


const UserCard = ({ photo, name, secondname, gender, id, user }) => {

  const genderSymbol = gender === 'female' ? '♀' : '♂';

  const avatarStyle = {
    width: 156,
    height: 156,
    margin: '0 auto'
  };

  const handleClick = (e) => {

    localStorage.setItem('user', JSON.stringify(user));

  }

  return (
    <Grid item xs={2}>
      <Card className='user-cards' onClick={handleClick} >
        <Avatar
          alt="img"
          src={photo}
          variant="rounded"
          sx={avatarStyle} />
        <Typography sx={{ textAlign: 'center' }}>Имя:{name}</Typography>
        <Typography sx={{ textAlign: 'center' }}>Фамилия:{secondname}</Typography>
        <Typography sx={{ textAlign: 'center' }}>Пол:
          <span>{genderSymbol}</span>
        </Typography>
        <CardActions disableSpacing edge='end'>
          <Button variant="contained" sx={{ margin: '0 auto' }} >
            <Link to={`/user/${id}`} style={{ textDecoration: 'none', color: '#fff' }}>
              See More..
            </Link>
          </Button>
        </CardActions>

      </Card>
    </Grid>
  )
}

export default UserCard;