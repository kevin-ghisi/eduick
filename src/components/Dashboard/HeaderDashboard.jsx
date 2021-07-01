import styles from '../../styles/components/Dashboard/HeaderDashboard.module.css';
import Image from 'next/dist/client/image';
import { useWindowSize } from '../../utils/getWindowDimensions';
import { useAppContext } from '../../context/state';

export default function HeaderDashboard() {

    //Get infos about the window size;
    const [width] = useWindowSize();

    //Get states from the app context;
    const { isOpen, mobileToggle } = useAppContext();

    return (
        <>
            <div className={styles.header}>
                {/* Show pc or mobile header depending on window width size */}
                {width > 900 ?
                    <>
                        <div className={styles.nav_item}>
                            <a href="/">
                                <Image
                                    src="/images/logo.svg"
                                    alt="Picture of the author"
                                    width={139}
                                    height={23}
                                />
                            </a>

                            <div eventkey="link-1" className={styles.link}>My Classes</div>


                        </div>

                        <div className={styles.nav_item}>
                            <div>
                                <button type="button" className={styles.button}>Change to Teacher Mode</button>
                            </div>
                            <a href="/profile" className={styles.avatar}>
                                <img src="images/avatar.png" alt="Avatar" />
                                <div className={styles.status}></div>
                            </a>
                        </div>

                    </>
                    :
                    <>
                        {/* Mobile Header */}
                        <div className={styles.nav_item}>
                            <a href="/">
                                <Image
                                    src="/images/logo.svg"
                                    alt="Picture of the author"
                                    width={88}
                                    height={14}
                                />
                            </a>
                        </div>

                        <div className={styles.nav_item}>
                            <img src="icons/arrow_down.svg" alt="arrowDown" className={styles.downArrow} onClick={toggle} />
                            <a href="#" className={styles.avatar}>

                                <img src="images/avatar.png" alt="Avatar" />
                                <div className={styles.status}></div>
                            </a>
                        </div>

                        {/* Mobile Header Context when open */}
                        {isOpen ?
                            <div className={styles.content} >
                                <a href="#" onClick={mobileToggle}>
                                    <span>Change to teacher mode</span>
                                    <img src="icons/short_right.svg" alt="Right Arrow" />
                                </a>
                            </div>
                            :
                            ''
                        }
                    </>
                }
            </div>
        </>
    )
}