import React from 'react';
import styles from '../../app/page.module.css';

const page = () => {
 
    return (
        <div>
            <h1 className="global-text">This is Home page</h1>
            <h1 className={styles.myText}>This is Home page</h1>
            <img src="/images/laptop.jpg" alt="" />
        </div>
    );
};

export default page;