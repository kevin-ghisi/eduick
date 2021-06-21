import styles from '../../styles/components/Landing/LoginModal.module.css'
import { useAppContext } from '../../context/state'
import { useState } from 'react';

export function LoginModal() {

    const { closeLogin } = useAppContext();

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>

                <header>Get Started <br /><em>JUST LOGIN</em></header>

                <form action="" className={styles.form}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" />

                    <div className={styles.passwordContainer}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" className={styles.passwordInput} />
                        <img src="icons/eye.svg" alt="" />
                    </div>

                    <button type="submit" className={styles.submitButton}>Login</button>


                </form>

                <button type="button" onClick={closeLogin} className={styles.closeModal}>
                    <img src="icons/close.svg" alt="Fechar modal" width={14} height={14} />
                </button>
            </div>
        </div>
    )
}