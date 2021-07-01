import styles from '../../styles/components/Nav/Hamburger.module.css';

export function Hamburger({ isOpen, toggle }) {

    //Hamburger nav component
    return (
        <>
            {!isOpen ?
                <img src="icons/hamburger.svg" alt="logo" onClick={toggle} className={styles.hamburger} />
                :
                ''
            }
        </>

    )
}