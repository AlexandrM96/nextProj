import cn from 'classnames';
import {ParagraphProps} from "./Paragraph.props";
import styles from './Paragraph.module.scss';

export const Paragraph = ({size, children, ...props}: ParagraphProps): JSX.Element => {

    return (
        <p className={cn(styles.paragraph, {
            [styles.ps]: size === 'paragraph-small',
            [styles.pm]: size === 'paragraph-medium',
            [styles.pl]: size === 'paragraph-large',
        })}
        >
            {children}
        </p>
    )
}