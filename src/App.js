import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
