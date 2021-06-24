import Image from 'next/dist/client/image';
import React, { useState } from 'react';
import styles from '../../styles/components/Landing/Landing.module.css';
import { useWindowSize } from '../../utils/getWindowDimensions';
import { RadioButton } from './RadioButton';



export function Landing() {

    const [width, height] = useWindowSize();

    return (
        <>
            <div className={styles.container}>
                {width > 900 ? (
                    <div className={styles.container__column}>

                        <div className={styles.container__content}>
                            <Image
                                src="/images/banner.svg"
                                alt="Main Banner"
                                width={677}
                                height={923}
                            />

                        </div>
                    </div>) : (
                    ''
                )}
                <div className={styles.container__column}>
                    <div className={styles.container__content} style={{ maxWidth: '600px' }}>
                        {width > 900 ? (
                            <img src="images/detalhe.svg" alt="" className={styles.imgDetail} />
                        ) : (
                            ''
                        )}


                        <div>
                            <h4 className={styles.title}>Find your <br /><em className={styles.detail}>best teacher</em></h4>
                            {width > 900 ? (
                                <p className={styles.description}>Whether you are a student trying to fnd your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!</p>
                            ) : (
                                ''
                            )}

                            <form className={styles.form}>
                                <input className={styles.search} type="text" placeholder="Type here what are you looking for"></input>

                                <div className={styles.inputs}>

                                    <RadioButton label="I'M A TEACHER" />
                                    <RadioButton label="I'M A STUDENT" />

                                    {width > 900 ? (
                                        <button type="submit" className={styles.submit}>search</button>
                                    ) : (
                                        ''
                                    )}

                                </div>
                                {width < 900 ? (
                                    <button type="submit" className={styles.submit}>search</button>
                                ) : (
                                    ''
                                )}
                            </form>
                        </div>
                        {width > 900 ? (
                            ''
                        ) : (
                            <img src="images/detalhe_smart.svg" alt="" className={styles.imgDetail} />
                        )}

                    </div>
                </div>

            </div >
            <div className={styles.footer}></div>
        </>
    )
}