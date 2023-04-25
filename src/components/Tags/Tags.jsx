import React from 'react';
import styles from './Tags.module.css'

const Tags = ({ tags }) => {
    return (
        <div className={styles.tags}>
            {tags.map(tag => (
                <div key={tag} className={styles.tagText}>
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default Tags;
