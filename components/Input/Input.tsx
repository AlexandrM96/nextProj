import cn from 'classnames';
import {InputProps} from "./Input.props";
import styles from './Input.module.scss';

export const Input = ({className, ...props}: InputProps): JSX.Element => {

    return (
        <div className={styles.input}>
            <input className={cn(className, styles.inputInput)} {...props}/>
        </div>
    )
}