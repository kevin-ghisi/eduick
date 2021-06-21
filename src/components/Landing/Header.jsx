import { Nav } from 'react-bootstrap';
import { useAppContext } from '../../context/state'

import styles from '../../styles/components/Landing/Header.module.css';
import Image from 'next/dist/client/image';

export function Header() {
    const { openLogin } = useAppContext();

    function toggleMenuOpen() {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <>
            <Nav className={styles.header} activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">
                        <Image
                            src="/images/logo.svg"
                            alt="Eduick Logo"
                            width={139}
                            height={23}
                        />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className={styles.linksContainer}>
                    <div className={styles.links}>
                        <Nav.Link eventKey="link-1">How it Works</Nav.Link>
                        <Nav.Link eventKey="link-2">About Us</Nav.Link>
                    </div>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <button type="button" onClick={openLogin}>Get started</button>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}