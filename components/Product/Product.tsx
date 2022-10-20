import cn from 'classnames';
import {ProductProps} from "./Product.props";
import {Card} from "../Card/Card";
import {Rating} from "../Rating/Rating";
import {Tag} from "../Tag/Tag";
import {Button} from "../Button/Button";
import {devOfNum, priceRu} from "../../helpers/helpers";
import {Divider} from "../Divider/Divider";
import Image from 'next/image';
import styles from './Product.module.scss';
import {useState} from "react";
import {Review} from "../Review/Review";

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {

    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

    return (
        <>
            <Card>
                <div className={styles.product}>
                    <div className={styles.productLogo}>
                        <Image
                            src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}
                            width={70}
                            height={70}
                        />
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
                                {item}
                            </Tag>)}
                    </div>
                    <div className={styles.productPriceTitle}>
                        цена
                    </div>
                    <div className={styles.productCreditTitle}>
                        кредит
                    </div>
                    <div className={styles.productRateTitle}>
                        {product.reviewCount} {devOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов',])}
                    </div>
                    <div className={styles.productHr}>
                        <Divider/>
                    </div>
                    <div className={styles.productDescription}>
                        {product.descriptions}
                    </div>
                    <div className={styles.productFeature}>
                        {product.characteristics.map(item => (
                                <div className={styles.productFeature__characteristics} key={item.name}>
                                <span className={styles.productFeature__characteristicsName}>
                                    {item.name}
                                </span>
                                    <span className={styles.productFeature__characteristicsDots}></span>
                                    <span className={styles.productFeature__characteristicsValue}>
                                    {item.value}
                                </span>
                                </div>
                            )
                        )}
                    </div>
                    <div className={styles.productAdvantagesBlock}>
                        {
                            product.advantages && <div className={styles.productAdvantagesBlockAdv}>
                                <div className={styles.productAdvantagesBlockAdv__title}>
                                    Преимущества
                                </div>
                                <div>{product.advantages}</div>
                            </div>
                        }
                        {
                            product.disadvantages && <div className={styles.productAdvantagesBlockDis}>
                                <div className={styles.productAdvantagesBlockAdv__title}>
                                    Недостатки
                                </div>
                                <div>
                                    {product.disadvantages}
                                </div>
                            </div>
                        }
                    </div>
                    <div className={styles.productHr}>
                        <Divider/>
                    </div>
                    <div className={styles.productActions}>
                        <Button appearance={'primary'}>Узнать подробнее</Button>
                        <Button
                            onClick={() => setIsReviewOpened(!isReviewOpened)}
                            appearance={'ghost'}
                            arrow={isReviewOpened ? 'down' : 'right'}
                            className={styles.productActionsButton}>Читать
                            отзывы</Button>
                    </div>
                </div>
            </Card>
            <Card color='blue' className={cn(styles.review, {
                [styles.opened]: isReviewOpened,
                [styles.closed]: !isReviewOpened,
            })}>
                {product.reviews.map(itemReviews => (
                    <Review key={itemReviews._id} review={itemReviews}/>
                ))}
            </Card>
        </>
    )
}