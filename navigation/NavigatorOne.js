import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Category from '../screens/one/Category' 
import CategoryDetai from '../screens/one/CategoryDetai'

const Stack  = createNativeStackNavigator() 

const NavigatorOne = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Category' component={Category} />
                <Stack.Screen name='CategoryDetail' component={CategoryDetai} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigatorOne;
