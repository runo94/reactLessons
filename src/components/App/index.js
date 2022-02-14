import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import HomePage from '../HomePage';
import UserProfile from '../UserProfile';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <h1>НЕМЕНЯЕТСЯ ТАЙТЛ</h1>
      <Routes>
        <Route path='/' element={<HomePage />} /> // /
        <Route path='/user/:id' element={<UserProfile />} /> // /user/1176ea74-8355-4c2d-9424-bdfe6b47d632
      </Routes>
    </BrowserRouter>
  );
}

export default App;