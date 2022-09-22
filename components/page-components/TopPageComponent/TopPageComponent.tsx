import styles from "./TopPageComponent.module.scss";
import {TopPageComponentProps} from "./TopPageComponent.props";
import {HTag} from "../../HTag/HTag";
import {Tag} from "../../Tag/Tag";
import {HHData} from "../../HHData/HHData";
import {TopLevelCategory} from "../../../interfaces/page.interface";
import {Advantages} from "../../Advantages/Advantages";
import {Sort} from "../../Sort/Sort";
import {SortEnum} from "../../Sort/Sort.props";
import {useReducer} from "react";
import {sortReducer} from "./sort.reducer";

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {

    const [{products: sortedProducts, sort}, dispathSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

    const setSort = (sort: SortEnum) => {
        dispathSort({type: sort});
    };

    return (
        <div className={styles.TopPageComponent}>
            <div className={styles.TopPageComponentTitle}>
                <HTag tag={'h1'}>{page.title}</HTag>
                {products && <Tag color={'grey'} size={'div-medium'}>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <div>
                {sortedProducts && sortedProducts.map(productsItem => (
                    <div key={productsItem._id}>
                        {productsItem.title}
                    </div>
                ))}
            </div>
            <div className={styles.TopPageComponentHhTitle}>
                <HTag tag={'h2'}>Вакансии - {page.category}</HTag>
                <Tag color={'red'} size={'div-medium'}>hh.ru</Tag>
            </div>
            <div>
                {firstCategory === TopLevelCategory.Courses && page.hh && <HHData {...page.hh}/>}
            </div>
            <div>
                {page.advantages && page.advantages.length > 0 && <>
                    <HTag tag={'h2'}>Преимущества</HTag>
                    <Advantages advantages={page.advantages}/>
                </>
                }
            </div>
            <div>
                {page.seoText &&
                <div className={styles.TopPageComponentSeo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
                <HTag tag={'h2'}>Получаемые навыки</HTag>
                {page.tags.map(tag => <Tag key={tag} color={'primary'} size={"div-medium"}>{tag}</Tag>)}
            </div>
        </div>
    )
}