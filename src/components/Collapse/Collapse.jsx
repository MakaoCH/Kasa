import React, { useState } from 'react';
import arrow from '../../assets/arrow.png';
import styles from './Collapse.module.css';

const Collapse = ({title, content}) => {

  const [toggle, setToggle] = useState(false);

  return(

    <div className={styles.collapse}>

        <h3 className={styles.collapseTitle} onClick={() => setToggle(!toggle)}>
        {title}
          <img className={toggle ? `${styles.collapseArrow} ${styles.rotateArrow}` : `${styles.arrow}`} 
          src={arrow} 
          alt="Ouvrir la liste"/>
        </h3>

        {toggle && <div className={styles.collapseContent}>{content}

      </div>}

    </div>
  );
};

export default Collapse;

