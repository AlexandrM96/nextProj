import cn from 'classnames';
import {ProductProps} from "./Product.props";
import styles from './Product.module.scss';
import {Card} from "../Card/Card";
import {Rating} from "../Rating/Rating";
import {Tag} from "../Tag/Tag";
import {Button} from "../Button/Button";
import {priceRu} from "../../helpers/helpers";

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {

    return (
        <Card>
            <div className={styles.product}>
                <div className={styles.productLogo}>
                    <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}/>
                </div>
                <div className={styles.productTitle}>
                    {product.title}
                </div>
                <div className={styles.productPrice}>
                    {priceRu(product.price)}
                    {
                        product.oldPrice
                        &&
                        <span className={styles.productPriceTag}>
                            <Tag color={"green"} size={"div-medium"}>{priceRu(product.price - product.oldPrice)}</Tag>
                        </span>
                    }
                </div>
                <div className={styles.productCredit}>
                    {priceRu(product.credit)}
                    /
                    <span className={styles.productCreditMonth}>мес</span>
                </div>
                <div className={styles.productRating}>
                    <Rating rating={product.reviewAvg ?? product.initialRating}/>
                </div>
                <div className={styles.productTags}>
                    {product.categories.map(item =>
                        <Tag size={"div-medium"} color={'ghost'}>
                            item
                        </Tag>)}
                </div>
                <div className={styles.productPriceTitle}>
                    цена
                </div>
                <div className={styles.productCreditTitle}>
                    кредит
                </div>
                <div className={styles.productRateTitle}>
                    {product.reviewCount} отзывов
                </div>
                <div className={styles.productHr}>
                    <hr/>
                </div>
                <div className={styles.productDescription}>
                    {product.descriptions}
                </div>
                <div className={styles.productFeature}>
                    feach
                </div>
                <div className={styles.productAdvantagesBlock}>
                    <div className={styles.productAdvantagesBlockAdv}>
                        <div>
                            Преимущества
                        </div>
                        <div>{product.advantages}</div>
                    </div>
                    <div className={styles.productAdvantagesBlockDis}>
                        <div>
                            Недостатки
                        </div>
                        <div>
                            {product.disadvantages}
                        </div>
                    </div>
                </div>
                <div className={styles.productHr}>
                    <hr/>
                </div>
                <div className={styles.productActions}>
                    <Button appearance={'primary'}>Узнать подробнее</Button>
                    <Button appearance={'ghost'} arrow={'right'}>Читать отзывы</Button>
                </div>
            </div>
        </Card>
    )
}