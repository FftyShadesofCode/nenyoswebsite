import React, {useEffect, useState} from 'react'
import { useAuth, upload } from '../firebase'

export default function UserProfile() {
    const currentUser = useAuth();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState('');

    function handleChange(e) {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
    }

    function handleClick() {
        upload(photo, currentUser, setLoading);
    }

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhotoURL(currentUser.photoURL);
        }
    }, [currentUser])

    return (
        <div className="fields">
            <input type="file" onChange={handleChange} />
            <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
            <img src={photoURL} alt="Avatar" className="avatar" />
        </div>
    );
}