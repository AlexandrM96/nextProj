import React, {useContext} from "react";
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import {TopLevelCategory} from "../../interfaces/page.interface";
import cn from "classnames";
import styles from './Menu.module.scss';

const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: 'courses',
        name: 'Курсы',
        id: TopLevelCategory.Courses,
        icon: <svg width="24" height="22" viewBox="0 0 24 22" fill="#7653FC" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24 15.4055C24 14.4901 23.4104 13.7169 22.5938 13.4257V6.14159L24 5.56179L12 0.74707L0 5.56179L12 10.3766L21.1875 6.70624V13.4257C20.3708 13.7169 19.7812 14.4901 19.7812 15.4055C19.7812 16.2437 20.2762 16.9631 20.986 17.3031L19.8177 20.8081L21.1511 21.253L21.8906 19.0345L22.6301 21.253L23.9636 20.8081L22.7953 17.3031C23.505 16.9632 24 16.2437 24 15.4055Z"
            />
        </svg>
    },
    {
        route: 'services',
        name: 'Сервисы',
        id: TopLevelCategory.Services,
        icon: <svg width="19" height="13" viewBox="0 0 19 13" fill="#787D85" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.6537 5.76156C16.7086 5.47062 16.7363 5.17386 16.7363 4.875C16.7363 2.18678 14.4891 0 11.7266 0C9.96313 0 8.32857 0.914081 7.43056 2.36661C6.21834 1.9842 4.97459 2.14818 3.94992 2.8353C2.92526 3.52188 2.3137 4.60893 2.26423 5.79753C0.917195 6.42012 0 7.74573 0 9.20833C0 9.46223 0.0631973 9.70981 0.111551 9.94995L0.112107 9.95049C0.471994 11.7178 2.07939 13 3.93359 13H15.0664C17.2147 13 19 11.2988 19 9.20833C19 7.72987 18.0703 6.39896 16.6537 5.76156Z"
               />
        </svg>
    },
    {
        route: 'books',
        name: 'Книги',
        id: TopLevelCategory.books,
        icon: <svg width="24" height="23" viewBox="0 0 24 23" fill="#787D85" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.05938 3.74976C5.05884 3.74976 5.05824 3.74976 5.0577 3.74976C4.86854 3.74976 4.69063 3.81888 4.55628 3.9445C4.42046 4.07151 4.34564 4.24063 4.34564 4.42066V14.4808C4.34564 14.8497 4.66706 15.1506 5.06221 15.1515C6.72807 15.1553 9.51906 15.4807 11.4445 17.3695V6.84131C11.4445 6.71626 11.4104 6.59878 11.3461 6.50156C9.76579 4.11589 6.72902 3.75342 5.05938 3.74976Z"
               />
            <path
                d="M19.6544 14.4808V4.4206C19.6544 4.24057 19.5796 4.07145 19.4438 3.94444C19.3094 3.81882 19.1314 3.74969 18.9424 3.74969C18.9418 3.74969 18.9412 3.74969 18.9407 3.74969C17.2711 3.75342 14.2343 4.11589 12.654 6.50156C12.5897 6.59878 12.5557 6.71626 12.5557 6.84131V17.3695C14.4811 15.4807 17.272 15.1552 18.9379 15.1515C19.333 15.1505 19.6544 14.8496 19.6544 14.4808Z"
                />
            <path
                d="M21.2845 6.06976H20.7655V14.4808C20.7655 15.4227 19.9469 16.1908 18.9405 16.1931C17.5275 16.1962 15.1977 16.4553 13.5477 17.9192C16.4014 17.2642 19.4098 17.69 21.1243 18.0563C21.3383 18.102 21.5595 18.0547 21.7311 17.9266C21.902 17.7988 22 17.6077 22 17.4026V6.74054C22.0001 6.37069 21.679 6.06976 21.2845 6.06976Z"
               />
            <path
                d="M3.23448 14.4808V6.06976H2.71556C2.32108 6.06976 2 6.37069 2 6.74054V17.4024C2 17.6076 2.09805 17.7986 2.26896 17.9264C2.44034 18.0545 2.66135 18.1019 2.87576 18.0561C4.59024 17.6898 7.59867 17.264 10.4523 17.919C8.80231 16.4551 6.47247 16.1962 5.05947 16.193C4.05321 16.1908 3.23448 15.4227 3.23448 14.4808Z"
            />
        </svg>

    },
    {
        route: 'products',
        name: 'Продукты',
        id: TopLevelCategory.Products,
        icon: <svg width="24" height="23" viewBox="0 0 24 23" fill="#787D85" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.09 4.16813L6.92174 8.08845L3.67499 6.59091L11.6992 2.87659C11.8792 2.79081 12.0952 2.79081 12.2842 2.87659L15.09 4.16813Z"
                />
            <path
                d="M20.316 6.59094L12.0045 10.4508L8.89202 9.01302L8.44202 8.79858L16.6193 4.87897L17.0693 5.0927L20.316 6.59094Z"
                />
            <path
                d="M11.3385 11.563L11.3295 19.6856L3.369 15.7913C3.144 15.6802 3 15.4573 3 15.2176V7.70319L6.3735 9.26119V12.0003C6.3735 12.3512 6.6795 12.6423 7.0485 12.6423C7.4175 12.6423 7.7235 12.3512 7.7235 12.0003V9.89465L8.1735 10.1L11.3385 11.563Z"
               />
            <path d="M20.991 7.71161L12.6885 11.5546L12.6795 19.6771L21 15.6043L20.991 7.71161Z"/>
        </svg>
    }
]

export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <a href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id === firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </a>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        )
    }
    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>
                            {m._id.secondCategory}
                        </div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        )
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => (
                <a href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: true
                })}>
                    {page.category}
                </a>
            ))
        )
    };
    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
}