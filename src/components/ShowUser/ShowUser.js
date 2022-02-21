import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ShowUser.css'


const ShowUser = (props) => {

  const [data, setData] = useState(null);
  const params = useParams();
  useEffect(() => {
    
    const user = JSON.parse(localStorage.getItem('user'))

    setData(user)
  }, []);

  console.log(params);
  console.log(window.location.username);

  return (
    data &&
    <div className='user-card'>
      <div className='back_arrow'>
        <Link to={'/'}>🔙</Link>
      </div>

      <p>Имя:{data.name.first}</p>
      <p>Фамилия:{data.name.last}</p>
      <p>Пол:
        <span>{data.gender}</span>
      </p>
      <img className='user_photo' alt="img" src={data.picture.large} />
    </div>
  )
}







export default ShowUser