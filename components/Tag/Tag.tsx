import cn from 'classnames';
import {TagProps} from "./Tag.props";
import styles from './Tag.module.scss';

export const Tag = ({size, color, children, href, ...props}: TagProps): JSX.Element => {

    return (
        <div className={cn(styles.tag, {
            [styles.ds]: size === 'div-small',
            [styles.dm]: size === 'div-medium',
            [styles.ghost]: color === 'ghost',
            [styles.red]: color === 'red',
            [styles.grey]: color === 'grey',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary'
        })}
             {...props}
        >{
            href ? <a href={href}/> : <></>

        }
            {children}
        </div>
    )
}