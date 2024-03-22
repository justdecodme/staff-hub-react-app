import { useEffect, useState } from "react";
import axios from 'axios';
import AtIcon from './icons/AtIcon';
import './EmployeeGrid.css';
import Phone from "./icons/Phone";
import Globe from "./icons/Globe";
import User from "./icons/User";
import Delete from "./icons/Delete";

function EmployeeGrid() {
    const [users, setUsers] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(data => setUsers(data.data))
        console.log(users);
    }, [])

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <div className="cards-container">
        {users?.map((user, id) => <div key={id} className="user-card-wrapper">
            <div className="user-details-container">
                <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} alt="userPic" className="user-profile-pic" />
                <h3 className="user-name">{user.name}</h3>
            </div>
            <div className="user-info">
                <div className="email-container">
                    <div className="at-icon">
                        <AtIcon />
                    </div>
                    <a className="contact-details" target="_blank" href={`mailto:${user.email}`}>{user.email}</a>
                </div>
                <div className="phone-container">
                    <div className="phone-icon">
                        <Phone />
                    </div>
                    <a className="contact-details" href={`tel:${user.email}`}>{user.phone}</a>
                </div>
                <div className="website-container">
                    <div className="globe-icon">
                        <Globe />
                    </div>
                    <a className="contact-details" target="_blank" href={`https://${user.website}`}>{user.website}</a>
                </div>
            </div>
            <div className="btn-container">
                <button className="add-btn">
                    <div className="add-user-icon">
                        <User />
                    </div>
                    <p className="follow-text">Follow</p>
                </button>
                <button onClick={() => handleDelete(user.id)} className="delete-btn">
                    <div className="delete-user-icon">
                        <Delete />
                    </div>
                    <p className="delete-text">Delete</p>
                </button>
            </div>
        </div>)}
        </div>
    )
}

export default EmployeeGrid;