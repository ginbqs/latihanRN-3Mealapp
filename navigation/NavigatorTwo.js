import {View, Button,Platform,Alert} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HeaderButton,Item} from 'react-navigation-header-buttons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons'
import Category from '../screens/Category' 
import CategoryMeal from '../screens/CategoryMeal'
import MealDetail from '../screens/MealDetail'
import Favorite from '../screens/Favorite'
import Filter from '../screens/Filter'
import Color from '../constant/Color'

const Stack  = createNativeStackNavigator() 

const homeNavigator = () => {
    return(
        <Stack.Navigator>
                <Stack.Screen name='Category' component={Category} options={{
                    headerTitle: 'Meal Category',
                    headerStyle:{
                        backgroundColor: Platform.OS=='android' ?  Color.primary : ''
                    },
                    headerTintColor: Platform.OS=='android' ? 'white' : Color.primary,
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#a1f142"
                        />
                    )
                }}
                />
                <Stack.Screen name='CategoryMeal' component={CategoryMeal} />
                <Stack.Screen name='MealDetail' component={MealDetail} 
                     options={{
                        headerRight: () => (
                            <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#a1f142"
                        />
                        )
                    }} />
            </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
const TabBar = () => {
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                    iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else {
                    iconName = focused ? 'ios-star' : 'ios-star';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                headerShown: false ,
                tabBarInactiveTintColor: 'gray',
                tabBarActiveBackgroundColor:Color.primary,
                tabBarInactiveBackgroundColor:Color.accent
            })}>
            <Tab.Screen name="Home" component={homeNavigator} />
            <Tab.Screen name="Favorite" component={Favorite} />
        </Tab.Navigator>
    )
}
const Drawer = createDrawerNavigator();
const NavigatorTwo = (props) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="HomeDraw">
                <Drawer.Screen name="HomeDraw" component={TabBar} />
                <Drawer.Screen name="Filter" component={Filter} />
            </Drawer.Navigator>    
        </NavigationContainer>
    )
}

export default NavigatorTwo;
