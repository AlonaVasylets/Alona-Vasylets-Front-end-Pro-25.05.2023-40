import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Albums = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => {
                setAlbums(data);
            })
            .catch((error) => {
                console.error('Error fetching albums:', error);
            });
    }, [userId]);

    const handleAlbumClick = (albumId) => {
        navigate(`/photos/${albumId}`);
    };

    return (
        <div className='container'>
            <h1 className='title'>Альбоми користувача</h1>
            <ul className='list'>
                {albums.map((album) => (
                    <li key={album.id}>
                        <button className='btn albums-btn' onClick={() => handleAlbumClick(album.id)}>
                            {album.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Albums;
