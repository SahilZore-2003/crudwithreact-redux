import React, { useState } from 'react'
import "./Create.css"
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../Redux/UserSlice';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [createUser, setCreateUser] = useState({
        profile: "",
        name: "",
        roll: "",
        join: ""
    })

    const data = useSelector(state => state.user)



    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setCreateUser((prev) => {
            return { ...prev, [name]: value, id: data[data.length - 1].id + 1 }
        })
    }





    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser(createUser))

        setCreateUser({
            profile: "",
            name: "",
            roll: "",
            join: ""
        })

        alert("Data Created")
        navigate("/")
    }


    return (
        <div className='container'>
            <h1 className='center'>Create User</h1>
            <form onSubmit={(e) => handleSubmit(e)}>

                <div>
                    <div className="input">
                        <FaRegUserCircle />
                        <input onChange={(e) => handleChange(e)} value={createUser.profile} placeholder='Profile Link' type="url" name="profile" />
                    </div>
                </div>
                <div>
                    <div className="input">
                        <FaUser />
                        <input onChange={(e) => handleChange(e)} value={createUser.name} placeholder='User Name' type="name" name="name" id="" />
                    </div>
                </div>
                <div>
                    <div className="input">
                        <FaBagShopping />
                        <input onChange={(e) => handleChange(e)} value={createUser.roll} placeholder='Roll' type="text" name="roll" id="" />
                    </div>
                </div>
                <div>
                    <div className="input">
                        <MdDateRange />
                        <input onChange={(e) => handleChange(e)} value={createUser.join} placeholder='Join Date' type="date" name="join" />
                    </div>
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}

export default Create
