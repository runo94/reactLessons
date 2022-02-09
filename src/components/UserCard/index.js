import male from './1019172.png'
import female from './1019173.png'

const UserCard = ({ photo, name, gender }) => {
    const gen = gender === 'male' ? male : female;
    return (
        <div>
            <img src={photo} />
            
            <p>{name}</p>
            <img src={gen} />
        </div>
    )
}

export default UserCard;