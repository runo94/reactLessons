
import ShowUser from '../ShowUser/ShowUser';
import HomePage from '../HomePage/HomePage';
import React from "react";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import { Content } from '../CardsPagination/CardsPagination'

import './App.css';

function App() {


  return (
    <BrowserRouter>

      <div className="App">
        <h1 className='title'>About users</h1>
        <Routes>


          <Route path="/" element={<HomePage />} >
            <Route path=':page' element={<HomePage />} />
            <Route index element={<Content />} />
          </Route>
            <Route path="user/:id" element={<ShowUser />} />
        </Routes>


      </div>

    </BrowserRouter>

  );
}

export default App;
