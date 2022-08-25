import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useNetInfo} from "@react-native-community/netinfo";
import Device from 'react-native-device-detection';

import {
    ChevronDownIcon,
    UserIcon,
    SearchIcon,
    AdjustmentsIcon,
    ChevronUpIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronDownIcon as ChevronDownIcon2,
    UserIcon as UserIcon2,
    SearchIcon as SearchIcon2,
    AdjustmentsIcon as AdjustmentsIcon2,
    ChevronUpIcon as ChevronUpIcon2,
    ChevronLeftIcon as ChevronLeftIcon2,
    ChevronRightIcon as ChevronRightIcon2,
    ChevronDownIcon as ChevronDownIcon3,
    UserIcon as UserIcon3,
    SearchIcon as SearchIcon3,
    AdjustmentsIcon as AdjustmentsIcon3,
    ChevronUpIcon as ChevronUpIcon3,
    ChevronLeftIcon as ChevronLeftIcon3,
    ChevronRightIcon as ChevronRightIcon3,
    ChevronDownIcon as ChevronDownIcon4,
    UserIcon as UserIcon4,
    SearchIcon as SearchIcon4,
    AdjustmentsIcon as AdjustmentsIcon4,
    ChevronUpIcon as ChevronUpIcon4,
    ChevronLeftIcon as ChevronLeftIcon4,
    ChevronRightIcon as ChevronRightIcon4,
    ChevronDownIcon as ChevronDownIcon5,
    UserIcon as UserIcon5,
    SearchIcon as SearchIcon5,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
    const navigation = useNavigation();
    const netInfo = useNetInfo();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Uizard Wifi Testing',
            headerShown: false
        })

        // alert the information
        alert('isConnected: ' + netInfo.isConnected);
        alert('isIos', Device.isIos());
    }, [])
    return (
        <SafeAreaView>
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{uri: 'https://links.papareact.com/wru'}}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View>
                    <Text className="font-bold color-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon color="#00CCBB" size={20} />
                    </Text>

                    {/*<Text>Type: {netInfo.type}</Text>*/}
                    {/*<Text>Is Connected? {netInfo.isConnected.toString()}</Text>*/}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
