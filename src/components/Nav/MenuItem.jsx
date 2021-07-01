import styles from '../../styles/components/Nav/MenuItem.module.css';

export function MenuItem({ toggle, to, children }) {

    // Nav Item component
    return (
        <>
            <a href={to} onClick={toggle} className={styles.link}>
                {children}
            </a>
        </>
    )
}