export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export type Rating = {
    rete: number;
    count: number
}

export type ProductState = {
    data: Product[];
    isLoading: boolean;
    error: Error;
    fetchData: (url: string) => Promise<void>
}
