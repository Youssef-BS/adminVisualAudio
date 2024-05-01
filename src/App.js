import SideBar from "./components/sideBar/SideBar"
import Login from "./pages/auth/auth";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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
        </Routes>
    </Router>
  );
}

export default App;
