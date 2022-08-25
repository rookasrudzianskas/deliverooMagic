import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Uizard Wifi Testing',
            // headerShown: false
        })
    }, [])
    return (
        <View>
            <Text className="text-3xl font-bold">
                Uizard is offline. - user is offline. no connection 🔴
            </Text>
        </View>
    );
};

export default HomeScreen;
