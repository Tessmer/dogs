import React from "react";

import styles from './Input.module.css'

const Input = ({ label, type, name, value, onChange, onBlur, error }) => {
    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <input 
                id={name}
                className={styles.input}
                type={type}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default Input