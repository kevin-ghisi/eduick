import { Nav } from 'react-bootstrap';

import styles from '../../styles/components/Dashboard/HeaderDashboard.module.css';
import Image from 'next/dist/client/image';

export default function HeaderDashboard() {
    return (
        <>
            <Nav className={styles.header} activeKey="/home">

                <Nav.Item>
                    <div className={styles.nav_item}>
                        <Nav.Link href="/">
                            <Image
                                src="/images/logo.svg"
                                alt="Picture of the author"
                                width={139}
                                height={23}
                            />
                        </Nav.Link>
                        <Nav.Link eventKey="link-1" className={styles.link}>My Classes</Nav.Link>
                    </div>
                </Nav.Item>



                <Nav.Item>
                    <div className={styles.nav_item}>
                        <Nav.Link>
                            <button type="button" className={styles.button}>Change to Teacher Mode</button>
                        </Nav.Link>
                        <a href="/profile" className={styles.avatar}>
                            <img src="images/avatar.png" alt="Avatar" />
                            <div className={styles.status}></div>
                        </a>
                    </div>
                </Nav.Item>

            </Nav>
        </>
    )
}