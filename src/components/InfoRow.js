import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, fontSize } from '@/styles/theme';

/**
 * Fila etiqueta/valor usada en la pantalla de información de la estudiante.
 */
const InfoRow = ({ label, value }) => (
    <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    row: {
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    label: { color: colors.textMuted, fontSize: fontSize.sm, marginBottom: spacing.xs },
    value: { color: colors.text, fontSize: fontSize.lg, fontWeight: '600' },
});

export default InfoRow;
