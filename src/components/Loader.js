import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colors, spacing, fontSize } from '@/styles/theme';

/**
 * Indicador de carga reutilizable, centrado en la pantalla.
 */
const Loader = ({ label = 'Cargando...' }) => (
    <View style={styles.container}>
        <ActivityIndicator color={colors.primary} size='large' />
        <Text style={styles.label}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.md },
    label: { color: colors.textMuted, fontSize: fontSize.sm },
});

export default Loader;
