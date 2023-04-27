/// <reference types="react-scripts" />

export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount?: number;
}

export type ButtonType = {
    variant?: string
}

export type ProductContextType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount?: number;
}