
import ShowUser from '../ShowUser/ShowUser';
import HomePage from '../HomePage/HomePage';
import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  Outlet
} from "react-router-dom";
import { CardsPagination } from '../CardsPagination/CardsPagination'

import './App.css';
import { Typography, Container, Box } from '@mui/material';

function App() {


  return (
    <BrowserRouter>

      <Container>
        <Box>
          <Typography variant="h1">About users</Typography>
          <Routes>
            <Route path="/" element={<><Outlet /><CardsPagination /></>} >
              <Route index element={<HomePage />} />
              <Route path=':page' element={<HomePage />} />
            </Route>
            <Route path="user/:id" element={<ShowUser />} />
          </Routes>
        </Box>
      </Container>

    </BrowserRouter>

  );
}

export default App;
