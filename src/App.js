import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './features/auth/authSlice';
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom';
import SideBar from './components/sideBar/SideBar';
import Login from './pages/auth/auth';
import Home from './pages/home/Home';


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
    </Routes>
  </Router>
  );
}

export default App;
