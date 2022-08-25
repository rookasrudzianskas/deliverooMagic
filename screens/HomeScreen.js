import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useNetInfo} from "@react-native-community/netinfo";
import Device from 'react-native-device-detection';

import {
    ChevronDownIcon,
    UserIcon,
    SearchIcon,
    AdjustmentsIcon
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
        alert('isConnected: ' + netInfo.isConnected, 'type: ' + netInfo.type, 'isInternetReachable: ' + netInfo.isInternetReachable);
        alert('isIos', isIos(), 'isAndroid', isAndroid(), 'isTablet', isTablet(), 'isIphoneX', isIphoneX());
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
