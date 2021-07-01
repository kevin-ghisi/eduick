import { useAppContext } from '../../context/state';
import styles from '../../styles/components/Nav/Overlay.module.css';

export function Overlay({ isOpen, color }) {

    //Get mobileToggle function from app context;
    const { mobileToggle } = useAppContext();

    return (
        <>
            {isOpen ? <div className={styles.overlay} style={{ backgroundColor: color }} onClick={mobileToggle}></div>
                :
                ''
            }
        </>
    )
}