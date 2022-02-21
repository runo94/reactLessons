import { useState, useEffect } from 'react';
import './HomePage.css'
import UserCard from '../UserCard/UserCard'
import { useParams, Outlet } from "react-router-dom";

const USER_COUNTS = [3, 6, 9, 12, 15]

const HomePage = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(3);
  const [page, setPage] = useState(1);

  const params = useParams();

  const getUsers = (count, page = 1) => fetch(`https://randomuser.me/api/?page=${page}&results=${count}&seed=abc`)
    .then(res => res.json())
    .then(res => {
      setData(res.results)
    })

  useEffect(() => {
    getUsers(count, params.page)
  }, [page]);

  const handleChangePage = (e) => {
    setPage(params.page)
  }

  const handleSelectChange = (e) => {
    setCount(e.target.value)
    getUsers(e.target.value, page)
  }

  return (
    <>
      <select onChange={handleSelectChange}>
        {
          USER_COUNTS.map(i => {
            return (<option value={i}>
              {i}
            </option>)
          })
        }
      </select>

      {
        data && data.map(user => (
          <UserCard
            photo={user.picture.large}
            key={user.login.md5}
            name={user.name.first}
            secondname={user.name.last}
            gender={user.gender}
            id={user.login.uuid}
            user={user}
          />
        ))
      }
      <Outlet />
    </>
  )

}

export default HomePage;