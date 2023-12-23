import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantScreen from '../screens/RestaurantsScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetail';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Restaurants" component={RestaurantScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} options={{ headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;