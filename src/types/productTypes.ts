export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rete: number;
        count: number
    },
    quantity: number;
}

export type SortType = 'asc' | 'desc' | '';
