import Image from 'next/dist/client/image';
import React from 'react';
import styles from '../../styles/components/Landing/Landing.module.css'
import { RadioButton } from './RadioButton';

export function Landing() {

    return (
        <div className={styles.container}>
            <div className={styles.container__column}>

                <div className={styles.container__content}>
                    <div className={styles.banner}>
                        <Image
                            src="/images/banner.svg"
                            alt="Main Banner"
                            width={677}
                            height={923}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.container__column}>
                <div className={styles.container__content} style={{ maxWidth: '600px' }}>
                    {/* <div className={styles.imgDetail}></div> */}
                    <img src="images/detalhe.svg" alt="" className={styles.imgDetail} />
                    <div>
                        <h4 className={styles.title}>Find your <br /><em className={styles.detail}>best teacher</em></h4>
                        <p className={styles.description}>Whether you are a student trying to fnd your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!</p>
                        <form className={styles.form}>
                            <input className={styles.search} type="text" placeholder="Type here what are you looking for"></input>

                            <div className={styles.inputs}>

                                <RadioButton label="I'M A TEACHER" />
                                <RadioButton label="I'M A STUDENT" />

                                <button type="submit" className={styles.submit}>search</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <div className={styles.footer}></div>
        </div >
    )
}