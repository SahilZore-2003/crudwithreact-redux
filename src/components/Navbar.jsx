import React from 'react'
import "./Navbar.css"
import { IoMdPersonAdd } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <h1 onClick={() => navigate("/")}>CRUD APP</h1>
            <Link to="/create">Create <IoMdPersonAdd /></Link>
        </nav>
    )
}

export default Navbar
