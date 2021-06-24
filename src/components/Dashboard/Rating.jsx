import { useState } from 'react';
import styles from '../../styles/components/Dashboard/Rating.module.css'

export default function Rating(props) {

    const [rating] = useState(props.rating);

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <svg key={index} className={styles.star} width="23" height="23" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={index <= rating ? styles.filled : null} opacity="0.4" d="M8.54894 0.927051C8.8483 0.00574017 10.1517 0.00573993 10.4511 0.927051L11.8574 5.25532C11.9913 5.66734 12.3752 5.9463 12.8085 5.9463H17.3595C18.3282 5.9463 18.731 7.18592 17.9473 7.75532L14.2654 10.4303C13.9149 10.685 13.7683 11.1364 13.9021 11.5484L15.3085 15.8766C15.6078 16.798 14.5533 17.5641 13.7696 16.9947L10.0878 14.3197C9.7373 14.065 9.2627 14.065 8.91221 14.3197L5.23037 16.9947C4.44665 17.5641 3.39217 16.798 3.69153 15.8766L5.09787 11.5484C5.23174 11.1364 5.08508 10.685 4.7346 10.4303L1.05275 7.75532C0.269035 7.18592 0.67181 5.9463 1.64053 5.9463H6.19155C6.62477 5.9463 7.00873 5.66734 7.1426 5.25532L8.54894 0.927051Z" fill="#C4C4C4" />
                    </svg>

                );
            })}


        </div>
    )
}
