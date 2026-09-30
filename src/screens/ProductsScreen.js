import { FlatList, StyleSheet } from 'react-native';
import Card from '@/components/Card';
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';
import useProducts from '@/hooks/useProducts';
import { spacing } from '@/styles/theme';

/**
 * Pantalla 2: lista de productos de Fake Store API.
 * La lógica vive en useProducts; aquí solo se renderiza.
 */
const ProductsScreen = () => {
    const { products, isLoading, isRefreshing, error, retry, refresh } = useProducts();

    if (isLoading) return <Loader label='Cargando productos...' />;
    if (error) return <ErrorMessage message={error} onRetry={retry} />;

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={styles.list}
            refreshing={isRefreshing}
            onRefresh={refresh}
            renderItem={({ item }) => (
                <Card
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    tag={item.category}
                    price={item.price}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    list: { padding: spacing.lg, gap: spacing.lg },
});

export default ProductsScreen;
