import {useState} from "react";
import {Product} from "../types/productTypes.ts";

export const useFetchProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const fetchData = async (url: string) => {
        try {
            setIsLoading(true)
            setError('')
            setProducts([])
            const response = await fetch(url)
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            setError('Failed to get data')
        } finally {
            setIsLoading(false)
        }
    }
    return {products, isLoading, error, fetchData};
};
