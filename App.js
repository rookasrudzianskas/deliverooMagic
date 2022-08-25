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

    useEffect(() => {
        console.log('Initially ' + (window.navigator.onLine ? 'on' : 'off') + 'line');
        // window.addEventListener('online', () => console.log('Became online'));
        // window.addEventListener('offline', () => console.log('Became offline'));
        //
        // document.getElementById('statusCheck').addEventListener('click', () => console.log('window.navigator.onLine is ' + window.navigator.onLine));
    }, [])

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

