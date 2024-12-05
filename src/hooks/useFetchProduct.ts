import {useEffect, useState} from "react";
import {Product} from "../types/productTypes.ts";

export const useFetchProduct = (url: string) => {
    const [product, setProduct] = useState<Product | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                setError('')
                setProduct(null)
                const response = await fetch(url)
                const data = await response.json()
                data.quantity = 1
                setProduct(data);
            } catch (error) {
                setError('Failed to get data')
            } finally {
                setIsLoading(false)
            }
        })()
    }, [url])

    return {product, isLoading, error}
};
