import { useAppContext } from '../../context/state';
import styles from '../../styles/components/Nav/NavBar.module.css';
import { Close } from './Close';
import { Hamburger } from './Hamburger';
import { Logo } from './Logo';
import { MenuItem } from './MenuItem';



export function NavBar() {

    const { isOpen, toggle, openLogin } = useAppContext();

    return (
        <>
            <div className={`${styles.container} ${isOpen ? styles.fixed : ''}`}>
                <Hamburger isOpen={isOpen} toggle={toggle} />
                <Logo isOpen={isOpen} />
                <Close isOpen={isOpen} toggle={toggle} />

                {isOpen ?
                    <div className={styles.links}>
                        <MenuItem to="#" toggle={toggle}>How it Works</MenuItem>
                        <MenuItem to="#" toggle={toggle}>About Us</MenuItem>
                        <MenuItem to="#" toggle={toggle}>
                            <button type="button" onClick={openLogin}>Get Started</button>
                        </MenuItem>
                    </div>
                    :
                    ''
                }

            </div >
        </>
    )
}