import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../Redux/UserSlice';




const Update = () => {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user)
    const { id } = useParams()
    const navigate = useNavigate()
    const { profile, name, roll, join } = userData.find((e) => e.id === Number(id))
    const [createUser, setCreateUser] = useState({
        profile: profile,
        name: name,
        roll: roll,
        join: join
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setCreateUser((prev) => {
            return { ...prev, [name]: value, id: Number(id) }
        })
    }


    return (
        <div className='container'>
            <h1 className='center'>Update User</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                setCreateUser({
                    profile: "",
                    name: "",
                    roll: "",
                    join: ""
                });
                alert("Update user uccessfully!")
                navigate("/")

            }
            }>

                <div>
                    <div className="input">
                        <FaRegUserCircle />
                        <input placeholder='Profile Link' type="url" name="profile" onChange={e => handleChange(e)} value={createUser.profile} onFocus={(e)=>e.target.select()} />
                    </div>
                </div>
                <div>
                    <div className="input">
                        <FaUser />
                        <input placeholder='User Name' type="name" name="name" onChange={e => handleChange(e)} value={createUser.name} id="" />
                    </div>
                </div>
                <div>
                    <div className="input">
                        <FaBagShopping />
                        <input placeholder='Roll' type="text" name="roll" onChange={e => handleChange(e)} value={createUser.roll} id="" />
                    </div>
                </div>
                <div>
                    <div className="input">
                        <MdDateRange />
                        <input placeholder='Join Date' type="date" name="join" onChange={e => handleChange(e)} value={createUser.join} id="" />
                    </div>
                </div>
                <button type="submit" onClick={() => dispatch(updateUser(createUser))}>Update User</button>
            </form>
        </div>
    )
}

export default Update
