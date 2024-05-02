import SideBar from "./components/sideBar/SideBar"
import Login from "./pages/auth/auth";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";


const Layout = ({ children }) => {
  return (
      <>
          <SideBar />
          {children}
      </>
  );
};


function App() {
  return (
    <Router>
    <Routes>
        <Route
            path="/"
            element={<Login />}
        />
        <Route
            path="/home"
            element={<Layout><Home /></Layout>}
        />
        <Route
            path="/users"
            element={<Layout><Users /></Layout>}
        />
        </Routes>
    </Router>
  );
}

export default App;
