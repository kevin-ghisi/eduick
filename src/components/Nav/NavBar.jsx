import { useAppContext } from '../../context/state';
import styles from '../../styles/components/Nav/NavBar.module.css';
import { Close } from './Close';
import { Hamburger } from './Hamburger';
import { Logo } from './Logo';
import { MenuItem } from './MenuItem';
import { useWindowSize } from '../../utils/getWindowDimensions';



export function NavBar(props) {

    //Get window width
    const [width] = useWindowSize();

    //Get states and functions from app context
    const { isOpen, mobileToggle, openLogin } = useAppContext();

    return (
        <>
            {/* Show content based on window width */}
            {width > 900 ?
                <div className={styles.container}>
                    <Logo />


                    <div className={styles.links}>
                        <MenuItem to="#" >How it Works</MenuItem>
                        <MenuItem to="#" >About Us</MenuItem>

                    </div>
                    <MenuItem to="#" >
                        <button type="button" onClick={openLogin}>Get Started</button>
                    </MenuItem>

                </div >
                :
                <div className={styles.container}>
                    <div className={`${styles.nav} ${isOpen ? styles.fixed : ''}`}>
                        <Hamburger isOpen={isOpen} toggle={mobileToggle} />
                        <Logo isOpen={isOpen} />
                        <Close isOpen={isOpen} toggle={mobileToggle} />



                    </div >
                    {/* Show content based if the menu is open or not */}
                    {isOpen ?
                        <div className={styles.links}>
                            <MenuItem to="#" toggle={mobileToggle}>How it Works</MenuItem>
                            <MenuItem to="#" toggle={mobileToggle}>About Us</MenuItem>
                            <MenuItem to="#" toggle={mobileToggle}>
                                <button type="button" onClick={openLogin}>Get Started</button>
                            </MenuItem>
                        </div>
                        :
                        ''
                    }
                </div>
            }
        </>
    )
}