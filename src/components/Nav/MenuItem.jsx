import styles from '../../styles/components/Nav/MenuItem.module.css';

export function MenuItem({ isOpen, toggle, to, children }) {

    return (
        <>
            <a href={to} onClick={toggle} className={styles.link}>
                {children}
            </a>
        </>
    )
}