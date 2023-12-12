import React from "react";

//👇🏻 app screens
// import Login from "./screens/Login";



//👇🏻 React Navigation configurations

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/splash/Splash";
import Login from "../screens/login/Login";
import MapScreen from "../screens/map/MapScreen";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return (
     
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen
                    name='Splash'
                    component={Splash}
                    options={{ headerShown: false }}
                />

              
                 <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{
                      
                        headerShown: false,
                    }}
                />
                
                <Stack.Screen name='Map' component={MapScreen} />
            </Stack.Navigator>
      
    );
}