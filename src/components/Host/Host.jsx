import React from 'react';
import styles from './Host.module.css';

const Host = ({ name, picture }) => {
  let firstName = '';
  let lastName = '';
  
  if (name && typeof name === 'string') {
    [firstName, lastName] = name.split(' ');
  }

  return (
    <div className={styles.hostContainer}>
      <div className={styles.hostName}>
        <p>
          {firstName}
          <br />
          {lastName}
        </p>
      </div>
      {picture && <img className={styles.hostImg} src={picture} alt={name} />}
    </div>
  );
};

export default Host;



