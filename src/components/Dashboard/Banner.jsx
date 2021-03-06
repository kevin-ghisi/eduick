import Image from 'next/dist/client/image';
import styles from '../../styles/components/Dashboard/Banner.module.css'
import { useWindowSize } from '../../utils/getWindowDimensions'

export default function Banner() {
    //Get infos about the window size;
    const { width } = useWindowSize();

    return (
        <div className={styles.container}>
            <img src="/images/banner_detail.svg" className={styles.detail} />
            <div className={styles.row}>
                <div className={`${styles.column} ${styles.intro}`}>
                    <h4 className={styles.title}>Hello <b>Student<em>.</em></b> </h4>

                    <p className={styles.description}>Whether you are a student trying to find your ideal private language teachers/tutors</p>
                </div>

                {/* Show or Hide context depending if window width is bigger than 900px */}
                {width > 900 ?
                    <div className={styles.column}>
                        <Image
                            src="/images/banner_dash.svg"
                            alt="Picture of the author"
                            width={332}
                            height={182}
                        />
                    </div> : ''}

            </div>
        </div>
    )
}
