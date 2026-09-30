import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius, spacing, fontSize } from '@/styles/theme';

const VARIANT_STYLES = {
    primary: { backgroundColor: colors.primary },
    outline: { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.primary },
};

const VARIANT_TEXT = {
    primary: colors.white,
    outline: colors.primary,
};

/**
 * Botón base reutilizable de la app. `variant` define el estilo.
 */
const Button = ({ title, onPress, variant = 'primary', style }) => (
    <Pressable
        onPress={onPress}
        style={({ pressed }) => [
            styles.base,
            VARIANT_STYLES[variant],
            pressed && styles.pressed,
            style,
        ]}
    >
        <Text style={[styles.text, { color: VARIANT_TEXT[variant] }]}>{title}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    base: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderRadius: radius.md,
    },
    pressed: { opacity: 0.85 },
    text: { fontSize: fontSize.md, fontWeight: '600' },
});

export default Button;
