import Rating from './Rating'

import styles from '../../styles/components/Dashboard/Card.module.css'

export default function Card() {
    return (
        <div className={styles.container}>
            <img
                src="/images/base.png"
                alt="Picture of the author"
                width={332}
                height={182}
            />
            <div >
                <div className={styles.info}>
                    <Rating />

                    <button type="button" className={styles.infoButton}>10 lessons</button>
                </div>

                <h4 className={styles.title}>Master English: Improve Your Speaking</h4>
            </div>
        </div>
    )
}
