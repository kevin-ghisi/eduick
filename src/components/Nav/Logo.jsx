import styles from '../../styles/components/Nav/Logo.module.css';

export function Logo({ isOpen }) {

    return (
        <img src="images/logo.svg" alt="logo" className={`${styles.logo} ${isOpen ? styles.margin0 : ''}`} />
    )
}