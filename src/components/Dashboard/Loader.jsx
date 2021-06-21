import styles from '../../styles/components/Dashboard/Loader.module.css'

export default function Loader() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </div>
    )
}
