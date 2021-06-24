import styles from '../../styles/components/Nav/Overlay.module.css';

export function Overlay({ isOpen }) {

    return (
        <>
            {isOpen ? <div className={styles.overlay}></div>
                :
                ''
            }
        </>
    )
}