import React from 'react';
import './sideBar.css'; 
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logoutSuccess} from "../../features/auth/authSlice"
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const navigate = useNavigate() ;
  const dispatch = useDispatch() ;

  const handleLogout = ()=> {
    navigate("/") ;
    dispatch(logoutSuccess()) ;
  }
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="images/logo.jpg" alt="logo" />
        <h2>CodingNepal</h2>
      </div>
      <ul className="links">
        <li>
          <span className="material-icons">dashboard</span>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <span className="material-icons">show_chart</span>
          <a href="#">Revenue</a>
        </li>
        <li>
          <span className="material-icons">flag</span>
          <a href="#">Reports</a>
        </li>
        <li>
          <span className="material-icons">person</span>
          <a href="#">Designer</a>
        </li>
        <li>
          <span className="material-icons">group</span>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <span className="material-icons">screen_search_desktop</span>
          <a href="#">Magic Build</a>
        </li>
    
        <li>
          <span className="material-icons">bar_chart</span>
          <a href="#">Overview</a>
        </li>
        <li>
          <span className="material-icons">mail</span>
          <a href="#">Message</a>
        </li>
        <li>
          <span className="material-icons">settings</span>
          <a href="#">Settings</a>
        </li>
        <li className="logout-link">
          <span className="material-icons">logout</span>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
