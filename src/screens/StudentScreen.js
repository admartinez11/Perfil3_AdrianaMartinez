import { StyleSheet, Text, View } from 'react-native';
import InfoRow from '@/components/InfoRow';
import Button from '@/components/ui/Button';
import { student } from '@/constants/student';
import { colors, radius, spacing, fontSize, shadow } from '@/styles/theme';

/**
 * Pantalla 1: información de la estudiante y botón hacia la lista de productos.
 */
const StudentScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.heading}>Información de la estudiante</Text>
            <InfoRow label='Nombre' value={student.name} />
            <InfoRow label='Carnet' value={student.carnet} />
            <InfoRow label='Sección y grupo' value={`${student.section} - ${student.group}`} />
        </View>
        <Button title='Ver productos' onPress={() => navigation.navigate('Products')} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: spacing.xl,
        gap: spacing.xl,
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: radius.lg,
        padding: spacing.xl,
        ...shadow,
    },
    heading: {
        color: colors.primaryDark,
        fontSize: fontSize.xl,
        fontWeight: '800',
        marginBottom: spacing.sm,
    },
});

export default StudentScreen;
