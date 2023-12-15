export interface Reviews {
    id: number;
    username: string;
    rating: number;
    description: string;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    discountedPrice: number;
    imageUrl: string;
    rating: number;
    tags: string[];
    reviews: Reviews[];
    children?: React.ReactNode;
}
