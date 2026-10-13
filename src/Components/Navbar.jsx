import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useAuth} from "../AuthContext"
import './Navbar.css'

export default function Navbar() {
   const{user,logout} = useAuth();
   const [showProfile,setShowProfile] = useState(false);
   const navigate = useNavigate();

   const handleLogout = () => {
    logout();
    setShowProfile(false);
    navigate('/');
   }
  return (
    <nav>
    <h2 className='glowcart'>GlowCart</h2>
    <div className='components'>
    <Link to="/">HOME</Link>
    <Link to="/Shop">SHOP</Link>
    <Link to="/About">ABOUT</Link>
    <Link to="/Cart">CART</Link>
    <Link to="/Contact">CONTACT</Link>
    
     <div className='profile-container'>
      <button className='profile-button' onClick={() => setShowProfile(!showProfile)} aria-label='User profile'>
      <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
            </svg>
      </button>

        {showProfile && (
            <div className="profile-menu">
              {user ? (
                <>
                 <p>{user.email}</p>
                  <button onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setShowProfile(false);
                    navigate('/login');
                  }}
                >
                  Login
                </button>
              )}
            </div>
          )}
       
     </div>
    </div>
    </nav>
  );
}