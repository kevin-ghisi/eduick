import Rating from './Rating'

import styles from '../../styles/components/Dashboard/Card.module.css'

export default function Card(props) {
    return (
        <div className={styles.container}>
            <img
                src={props.image}
                alt={props.title}
                width={332}
                height={182}
            />
            <div >
                <div className={styles.info}>
                    <Rating rating={props.rating} />

                    <button type="button" className={styles.infoButton}>{props.lessons} lessons</button>
                </div>

                <h4 className={styles.title}>{props.title}</h4>
            </div>
        </div>
    )
}
