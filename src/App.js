import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './features/auth/authSlice';
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom';
import SideBar from './components/sideBar/SideBar';
import Login from './pages/auth/auth';
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import UserDetails from './pages/userDetails/userDetails';


function App() {

const currentUser = useSelector(selectCurrentUser);

const Layout = ({ children }) => {
  
  return (
    <>
      <SideBar />
      {children}
    </>
  );
};

const ProtectRoute = ({children}) => {
  if(!currentUser) return <Navigate to="/login" />
  return children ;
}

  return (
    <Router>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route path="/" element={<ProtectRoute><Layout><Home /></Layout></ProtectRoute>} />
      <Route path="/users" element={<ProtectRoute><Layout><Users /></Layout></ProtectRoute>} />
      <Route path="/userDetails/:id" element={<ProtectRoute><Layout><UserDetails /></Layout></ProtectRoute>} />
    </Routes>
  </Router>
  );
}

export default App;
