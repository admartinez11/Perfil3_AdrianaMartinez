import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentScreen from '@/screens/StudentScreen';
import ProductsScreen from '@/screens/ProductsScreen';
import { colors } from '@/styles/theme';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerStyle: { backgroundColor: colors.primary },
    headerTintColor: colors.white,
    headerTitleStyle: { fontWeight: '700' },
    contentStyle: { backgroundColor: colors.background },
    animation: 'slide_from_right',
};

// Stack de dos pantallas: Student (inicial) -> Products. El header del stack
// agrega automáticamente la flecha para regresar.
const RootNavigator = () => (
    <Stack.Navigator initialRouteName='Student' screenOptions={screenOptions}>
        <Stack.Screen name='Student' component={StudentScreen} options={{ title: 'Perfil' }} />
        <Stack.Screen name='Products' component={ProductsScreen} options={{ title: 'Productos' }} />
    </Stack.Navigator>
);

export default RootNavigator;
