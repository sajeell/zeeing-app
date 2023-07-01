import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BookDetailScreen from './src/screens/BookDetailScreen'
import BookListScreen from './src/screens/BookListScreen'

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BookListScreen">
                <Stack.Screen name="BookListScreen" component={BookListScreen} />
                <Stack.Screen name="BookDetailScreen" component={BookDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
