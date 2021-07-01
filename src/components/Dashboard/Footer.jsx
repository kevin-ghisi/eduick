import styles from '../../styles/components/Dashboard/Footer.module.css'
import { useWindowSize } from '../../utils/getWindowDimensions'

export default function Footer() {

    //Get infos about the window size;
    const { width } = useWindowSize();


    return (
        <footer className={styles.footer}>
            {/* Show the complement of the footer if window width is bigger than 900px */}
            <p>Copyright © 2020 <b>Eduick</b>. {width > 900 ? 'Todos os direitos reservados.' : ''} </p>
        </footer>
    )
}
