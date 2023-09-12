import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleUserClick = (userId) => {
        navigate(`/albums/${userId}`);
    };

    return (
        <div className='container'>
            <h1 className='title'>Список користувачів</h1>
            <ul className='list'>
                {users.map((user) => (
                    <li className='user-item' key={user.id}>
                        <button className='btn' onClick={() => handleUserClick(user.id)}>
                            {user.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
