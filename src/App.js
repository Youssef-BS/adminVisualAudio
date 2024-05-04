import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './features/auth/authSlice';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/sideBar/SideBar';
import Login from './pages/auth/auth';
import Home from './pages/home/Home';

const Layout = ({ children }) => {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
};

function App() {
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser) ;
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            currentUser === null ? (
              <Login />
            ) : (
              <Layout>
                <Home />
              </Layout>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
