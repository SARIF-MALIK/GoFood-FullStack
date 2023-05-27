import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate(); 
  const handleLogout = ()=>{
    localStorage.removeItem('authToken'); 
    navigate('/')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {
                (localStorage.getItem("authToken")) ?
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">My Orders</Link>
                  </li>
                  : ""
              }
            </ul>
            {
              (!localStorage.getItem("authToken")) ?
                <div className="d-flex">

                  <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                  <Link className="btn bg-white text-success mx-1" to="/newuser">Signup</Link>

                </div> : <div className="d-flex">
 
                  <button className="btn bg-white text-success mx-1" to="/newuser">My Cart</button>
                  <button className="btn bg-danger text-white mx-1" to="/login" onClick={handleLogout}>LogOut</button>

                </div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar