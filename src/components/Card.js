import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, fontSize, shadow } from '@/styles/theme';

/**
 * Tarjeta reutilizable: muestra imagen, título, descripción y, opcionalmente,
 * una etiqueta (categoría) y un precio. Todo llega por props.
 */
const Card = ({ title, image, description, tag, price }) => (
    <View style={styles.card}>
        <View style={styles.imageWrapper}>
            <Image source={{ uri: image }} style={styles.image} resizeMode='contain' />
        </View>
        <View style={styles.body}>
            {tag ? <Text style={styles.tag}>{tag}</Text> : null}
            <Text style={styles.title} numberOfLines={2}>{title}</Text>
            <Text style={styles.description} numberOfLines={4}>{description}</Text>
            {price != null ? <Text style={styles.price}>${price.toFixed(2)}</Text> : null}
        </View>
    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: radius.lg,
        overflow: 'hidden',
        ...shadow,
    },
    imageWrapper: {
        backgroundColor: colors.white,
        padding: spacing.lg,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    image: { width: '100%', height: 180 },
    body: { padding: spacing.lg, gap: spacing.sm },
    tag: {
        alignSelf: 'flex-start',
        backgroundColor: colors.accent,
        color: colors.primary,
        fontSize: fontSize.xs,
        fontWeight: '600',
        textTransform: 'uppercase',
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.sm,
        borderRadius: radius.full,
    },
    title: { color: colors.text, fontSize: fontSize.lg, fontWeight: '700' },
    description: { color: colors.textMuted, fontSize: fontSize.sm, lineHeight: 19 },
    price: { color: colors.primaryDark, fontSize: fontSize.xl, fontWeight: '800' },
});

export default Card;
