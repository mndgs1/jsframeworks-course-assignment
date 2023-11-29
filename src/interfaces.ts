export interface Reviews {
    id: number;
    username: string;
    rating: number;
    description: string;
}

export interface Product {
    id: number;
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

export interface ProductCardInterface {
    product?: boolean;
    className?: string;
    loading?: boolean;
}

export interface HeadingInterface {
    children: React.ReactNode;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    className?: string;
}

export interface ImageInterface {
    src: string;
    alt: string;
    className?: string;
    productCard?: boolean;
    productSpecific?: boolean;
    loading?: boolean;
}

export interface ParagraphInterface {
    children: React.ReactNode;
    className?: string;
    description?: boolean;
    username?: boolean;
    price?: boolean;
    discountedPrice?: boolean;
    rating?: boolean;
    tag?: boolean;
}

export interface NavProps {
    items: { label: string; url: string; id: number }[];
    className?: string;
}
