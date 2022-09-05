import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import {useEffect} from "react";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";


const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <TailwindProvider>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </TailwindProvider>
        </NavigationContainer>

  );
}

