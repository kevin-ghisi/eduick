import styles from '../../styles/components/Landing/LoginModal.module.css'
import { useAppContext } from '../../context/state'
import { useWindowSize } from '../../utils/getWindowDimensions'
import { useState } from 'react';

export function LoginModal() {

    // Get window size
    const [width] = useWindowSize();

    // Get closeLogin function from app context
    const { closeLogin } = useAppContext();

    // create password field states
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // toggle password visibility function
    const togglePasswordVisiblity = () => {
        setIsPasswordVisible(!isPasswordVisible);
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
                        <input type={isPasswordVisible ? 'text' : 'password'} name="password" className={styles.passwordInput} />
                        {/* Change icon if password is visible */}
                        {!isPasswordVisible ?
                            <img src="icons/eye.svg" alt="" onClick={togglePasswordVisiblity} />
                            :
                            <img src="icons/eye_close.svg" alt="" onClick={togglePasswordVisiblity} />
                        }


                    </div>

                    <button type="submit" className={styles.submitButton}>Login</button>


                </form>
                {/* Show content based on window width */}
                {width > 900 ?
                    <button type="button" onClick={closeLogin} className={styles.closeModal}>
                        <img src="icons/close.svg" alt="Fechar modal" width={14} height={14} />
                    </button>
                    :
                    <img src="icons/close.svg" alt="Fechar modal" onClick={closeLogin} className={styles.closeModal} />
                }

            </div>
        </div>
    )
}