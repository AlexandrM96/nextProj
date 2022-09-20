import cn from 'classnames';
import {SideBarProps} from "./SideBar.props";
import {Menu} from "../Menu/Menu";
import styles from './SideBar.module.scss';

export const SideBar = ({...props}: SideBarProps): JSX.Element => {

    return (
        <div>
            <Menu/>
        </div>
    )
}