export interface ProductCharacteristic {
    value: string;
    name: string
}

export interface ReviewModel {
    _id: string;
    name: string;
    description: string;
    title: string,
    rating: number;
    createdAt: Date;
}

export interface ProductModel {
    tags: string[];
    _id: string;
    categories: string;
    title: string;
    credit: number;
    oldPrice: number;
    category: string;
    createdAt: Date;
    updatedAt: Date;
    advantages: string;
    reviewAvg?: number;
    reviewCount: number;
    reviews: ReviewModel[];
    initialRating: number;
    image: string;
    __v: number;
    characteristics: ProductCharacteristic[];
    descriptions: string;
    price: number;
    link: string;
}