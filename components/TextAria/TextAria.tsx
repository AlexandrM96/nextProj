import cn from 'classnames';
import {TextAriaProps} from "./TextAria.props";
import styles from './TextAria.module.scss';

export const TextAria = ({className, ...props}: TextAriaProps): JSX.Element => {

    return (
        <div className={styles.textAria}>
            <textarea className={cn(className, styles.textAriaInput)} {...props}/>
        </div>
    )
}