import { useCallback, useEffect, useState } from 'react';
import productService from '@/services/productService';

/**
 * Trae los productos de la API y expone el estado de carga/error.
 * `refetch` permite reintentar (botón de error) y el pull-to-refresh.
 */
const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = useCallback(async () => {
        try {
            setError(null);
            const data = await productService.getAll();
            setProducts(data);
        } catch (err) {
            setError(err.message ?? 'No se pudieron cargar los productos');
        }
    }, []);

    useEffect(() => {
        fetchProducts().finally(() => setIsLoading(false));
    }, [fetchProducts]);

    const retry = async () => {
        setIsLoading(true);
        await fetchProducts();
        setIsLoading(false);
    };

    const refresh = async () => {
        setIsRefreshing(true);
        await fetchProducts();
        setIsRefreshing(false);
    };

    return { products, isLoading, isRefreshing, error, retry, refresh };
};

export default useProducts;
