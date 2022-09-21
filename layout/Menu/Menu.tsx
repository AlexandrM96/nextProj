import React, {useContext} from "react";
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import cn from "classnames";
import {useRouter} from "next/router";
import {firstLevelMenu} from "../../helpers/helpers";
import styles from './Menu.module.scss';

export const Menu = (): JSX.Element => {

    const {menu, setMenu, firstCategory} = useContext(AppContext);

    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            console.log(m)
            if (m._id.secondCategory === secondCategory) {
                console.log('ddd')
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };

    const buildFirstLevel = () => {
        // console.log(firstLevelMenu);
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
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        // console.log(menuItem, menu)
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondLevel}
                                 onClick={() => openSecondLevel(m._id.secondCategory)}>
                                {m._id.secondCategory}
                            </div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: m.isOpened
                            })}>
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {

        return (
            pages.map(page => (
                <a href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
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
};