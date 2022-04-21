import React from 'react'

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a class="navbar-brand" href="#"> Shreya's pizza </a>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#"> Register </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"> Login </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"> Cart </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"> Logout </a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

