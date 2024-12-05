import {useEffect, useState} from "react";

export const useFetchCategories = (url: string) => {
    const [categories, setCategories] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                setError('')
                setCategories([])
                const response = await fetch(url)
                const data = await response.json()
                setCategories(data)
            } catch (error) {
                setError('Failed to get data')
            } finally {
                setIsLoading(false)
            }
        })()
    }, [])

    return {categories, isLoading, error}
};
