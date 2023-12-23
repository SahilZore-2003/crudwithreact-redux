import React, { useState } from 'react'
import "./Users.css"
import { LuInspect } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { GoMoveToTop } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../Redux/UserSlice';

const User = () => {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user)
    const [showTop, setShowTop] = useState(false)
    window.onscroll = () => {
        window.scrollY > 200 ? setShowTop(true) : setShowTop(false)
    }

    return (
        <div className='users-container'>
            <div className="user">
                <span>Profile</span>
                <span>Name</span>
                <span>Roll</span>
                <span>Join Date</span>
                <span>Edit</span>
            </div>
            {
                userData.map((user, i) => {
                    return (
                        <div className="user" key={i}>
                            <div>
                                <img src={user.profile} alt="" />
                            </div>
                            <h3>{user.name}</h3>
                            <p>{user.roll}</p>
                            <p>{user.join}</p>
                            <div className='icons'>
                                <Link to={"/user/" + user.id}><LuInspect /></Link>
                                <FaRegTrashAlt onClick={() => dispatch(deleteUser(user.id))} className='deleteicon' />
                            </div>

                        </div>
                    )
                })
            }

            <GoMoveToTop onClick={() => window.scrollTo(0, 0)} className={`topicon ${showTop ? "show" : ""}`} />

        </div>
    )
}

export default User
