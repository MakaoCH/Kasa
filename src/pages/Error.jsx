import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css'

const Error = () => {
    return (
        <div className={styles.Error}>
			<h1 className={styles.ErrorTitle}>404</h1>
				<p className={styles.ErrorInfo}>Oups! La page que vous demandez n'existe pas.</p>
			
				<Link className={styles.ErrorRetour} to='/'>Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default Error;