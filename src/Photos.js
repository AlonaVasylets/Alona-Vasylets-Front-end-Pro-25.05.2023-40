import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Photos = () => {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then((response) => response.json())
            .then((data) => {
                setPhotos(data);
            })
            .catch((error) => {
                console.error('Error fetching photos:', error);
            });
    }, [albumId]);

    return (
        <div className='photos-container'>
            <h1 className='title'>Фотографії з альбому</h1>
            <ul className='list photos-list'>
                {photos.map((photo) => (
                    <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Photos;
