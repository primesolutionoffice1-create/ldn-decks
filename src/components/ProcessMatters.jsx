import React from 'react';
import styles from './ProcessMatters.module.css';

export default function ProcessMatters() {
    return (
        <section className={styles.mattersSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Why a Clear Process Matters</h2>
                    <p>A structured process helps homeowners feel confident before starting an outdoor living project. By understanding each step ahead of time, it becomes easier to make informed decisions and move forward comfortably.</p>
                    <p>Our goal is to make the experience clear, organized, and easy to follow.</p>
                </div>
            </div>
        </section>
    );
}
