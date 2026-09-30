import { StyleSheet, Text, View } from 'react-native';
import Button from '@/components/ui/Button';
import { colors, spacing, fontSize } from '@/styles/theme';

/**
 * Mensaje de error con botón para reintentar la petición.
 */
const ErrorMessage = ({ message, onRetry }) => (
    <View style={styles.container}>
        <Text style={styles.title}>Algo salió mal</Text>
        <Text style={styles.message}>{message}</Text>
        {onRetry ? <Button title='Reintentar' onPress={onRetry} /> : null}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.md,
        padding: spacing.xl,
    },
    title: { color: colors.danger, fontSize: fontSize.lg, fontWeight: '700' },
    message: { color: colors.textMuted, fontSize: fontSize.md, textAlign: 'center' },
});

export default ErrorMessage;
