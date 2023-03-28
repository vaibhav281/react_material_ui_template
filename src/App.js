import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';
import './Style/css/appStyle.css'
import NavBar from './components/Navbar/Navbar.js';
import Loader from './components/Loader';
import Router from './Routes';
import { BrowserRouter } from 'react-router-dom';
// import Login from './Pages/Login';
// import Register from './Pages/Register';
// import Home from './Pages/Home';


function App() {
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleStartNavigation = () => {
      setIsNavigating(true);
    };

    const handleFinishNavigation = () => {
      setIsNavigating(false);
    };

    window.addEventListener('beforeunload', handleStartNavigation);
    window.addEventListener('unload', handleFinishNavigation);

    return () => {
      window.removeEventListener('beforeunload', handleStartNavigation);
      window.removeEventListener('unload', handleFinishNavigation);
    };
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      {isNavigating && <Loader />}
      <Router/>
    {/* <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin_login" element={<Login />} />
        <Route path="/admin_register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router> */}
    </BrowserRouter>
  );
}

export default App;
