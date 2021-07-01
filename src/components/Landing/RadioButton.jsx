import React from 'react';
import styles from '../../styles/components/Landing/RadioCheck.module.css'

export function RadioButton(props) {

    // Create radio button state
    const [checked, setChecked] = React.useState(false);

    return (
        // Change class if is checked or not
        <label className={`${styles.radio} ${checked ? styles.active : styles.unchecked}`} >
            <span className={styles.radioInput}>
                {/* Change state when the input changes */}
                <input type="radio" name="radio" onChange={() => setChecked(!checked)} />
                <span className={styles.radioControl}></span>
            </span>
            <span className={styles.radioLabel}>{props.label}</span>
        </label>
    )
}