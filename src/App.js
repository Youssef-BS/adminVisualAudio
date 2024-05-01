import SideBar from "./components/sideBar/SideBar"
import Login from "./pages/auth/auth";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";


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
        </Routes>
    </Router>
  );
}

export default App;
