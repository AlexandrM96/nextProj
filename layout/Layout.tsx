import cn from 'classnames';
import {LayoutProps} from "./Layout.props";
import {SideBar} from './SideBar/SideBar';
import {Header} from './Header/Header';
import {Footer} from './Footer/Footer';
import {Component, FunctionComponent} from "react";
import styles from './Layout.module.scss';

export const Layout = ({children}: LayoutProps): JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Header/>
            </header>
            <div className={styles.sideBar}>
                <SideBar className={styles.sideBar}/>
            </div>
            <div className={styles.body}>
                {children}
            </div>
            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </div>
    )
}

//вынести withLayout в отдельный компонент
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }
}