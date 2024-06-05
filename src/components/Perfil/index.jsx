import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch(`https://api.github.com/users/${nomeUsuario}`);
            const data = await response.json();
            setUserData(data);
        };

        fetchUserData();
    }, [nomeUsuario]);

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
            <h1 className={styles.name}>{userData.name || userData.login}</h1>
            {userData.bio && <p className={styles.bio}>{userData.bio}</p>}
            <ul className={styles.details}>
                <li>Repos: {userData.public_repos}</li>
                <li>Followers: {userData.followers}</li>
                <li>Following: {userData.following}</li>
            </ul>
        </header>
    );
};

Perfil.propTypes = {
    nomeUsuario: PropTypes.string.isRequired,
};

export default Perfil;
