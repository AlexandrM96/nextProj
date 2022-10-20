import cn from 'classnames';
import {ReviewProps} from "./Review.props";
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';
import styles from './Review.module.scss';
import {Rating} from "../Rating/Rating";

export const Review = ({review, className, ...props}: ReviewProps): JSX.Element => {

    const {name, title, description, createdAt, rating} = review;

    return (
        <div className={cn(styles.review, className, {})}
             {...props}
        >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15 0C6.72902 0 0 6.72902 0 15C0 23.271 6.72902 30 15 30C23.271 30 30 23.271 30 15C30 6.72902 23.271 0 15 0ZM15 27.6253C8.03824 27.6253 2.37469 21.9613 2.37469 15C2.37469 8.03865 8.03824 2.37469 15 2.37469C21.9613 2.37469 27.6253 8.03906 27.6253 15.0004C27.6253 21.9618 21.9613 27.6253 15 27.6253Z"
                    fill="#7653FC"/>
            </svg>
            <div>
                <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
                <span>{title}</span>
            </div>
            <div className={styles.date}>
                {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
            </div>
            <div className={styles.rating}>
                <Rating rating={rating}/>
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}