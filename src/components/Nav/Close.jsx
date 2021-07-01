import styles from '../../styles/components/Nav/Close.module.css';

export function Close({ isOpen, toggle }) {

    //Close nav component
    return (
        <>
            {isOpen ?
                <img src="icons/close.svg" alt="closeIcon" onClick={toggle} className={styles.close} />
                :
                ''
            }
        </>
    )
}