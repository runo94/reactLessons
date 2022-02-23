import { useState, useEffect } from 'react';
import './HomePage.css'
import UserCard from '../UserCard/UserCard'
import { useParams, Outlet } from "react-router-dom";
import { Grid, Select, FormControl, InputLabel, MenuItem } from '@mui/material';

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
  }, [params]);

  const handleSelectChange = (e) => {
    setCount(e.target.value)
    getUsers(e.target.value, page)
  }

  return (
    <Grid container spacing={2}>
      {/* <Selection onChange={handleSelectChange}>
        {
          USER_COUNTS.map(i => {
            return (<Options value={i}>
              {i}
            </Options>)
          })
        }
      </Selection> */}

      <FormControl fullWidth>
        <InputLabel id="users-count-label">Users count</InputLabel>
        <Select
          labelId="users-count-label"
          id="demo-simple-select"
          value={count}
          label="Users count"
          onChange={handleSelectChange}
        >
          {
            USER_COUNTS.map(i => {
              return (
                <MenuItem value={i}>
                  {i}
                </MenuItem>
              )
            })
          }
        </Select>
      </FormControl>

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
    </Grid>
  )

}

export default HomePage;