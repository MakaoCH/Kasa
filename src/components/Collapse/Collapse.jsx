import React, { useState } from 'react';
import arrow from '../../assets/arrow.png';
import styles from './Collapse.module.css';

const Collapse = ({title, content, titleClassName, contentClassName}) => {

  const [toggle, setToggle] = useState(false);

  return(

    <div className={styles.collapse}>
      <div className={styles.collapseBlock}>
        <h3 className={`${styles.collapseTitle} ${titleClassName}`} onClick={() => setToggle(!toggle)}>
        {title}
          <img className={toggle ? `${styles.collapseArrow} ${styles.rotateArrow}` : `${styles.arrow}`} 
          src={arrow} 
          alt="Ouvrir la liste"/>
        </h3>
      </div>
        {toggle && <div className={`${styles.collapseContent} ${contentClassName}`}>{content}</div>}
      
    </div>
  );
};


export default Collapse;

