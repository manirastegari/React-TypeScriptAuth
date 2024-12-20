import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function WelcomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
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
                    name="Welcome"
                    component={WelcomeScreen} />
                
                <Stack.Screen
                    name="SignIn"
                    component={SignInScreen} />
                
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}