import styles from '../../styles/components/Dashboard/Footer.module.css'
import { useWindowDimensions } from '../../utils/getWindowDimensions'

export default function Footer() {

    const { height, width } = useWindowDimensions();


    return (
        <footer className={styles.footer}>
            <p>Copyright © 2020 <b>Eduick</b>. {width > 900 ? 'Todos os direitos reservados.' : ''} </p>
        </footer>
    )
}
