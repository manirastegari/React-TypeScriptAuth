import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'chocolate'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: '700'
                    }
                }} >
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}