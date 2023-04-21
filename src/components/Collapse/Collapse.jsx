import React, { useState } from 'react';
import arrow from '../../assets/arrow.png';
import styles from './Collapse.module.css';

const Collapse = ({title, content}) => {
  const [toggle, setToggle] = useState(false);

  return(
    <div className={styles.collapse}  id={`Collapse-${title}`}>
      <div className={styles.collapseHeader}>
        <div className={styles.collapseTitle}>{title}</div>
            <span className={styles.collapseArrow}  onClick={() => setToggle(!toggle)}>
            <img className={toggle ? styles.rotateArrow : ''} src={arrow} alt="Ouvrir cette liste"/>
            </span>
      </div>

      {toggle && <div className={styles.collapseContent}>{content}</div>}

    </div>
  );
};

export default Collapse;

