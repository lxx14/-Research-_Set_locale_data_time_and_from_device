import React, { Component } from 'react';
import { Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import moment from "moment/min/moment-with-locales";

import {styles} from './styles';


export default class OpenGL extends Component {



    render() {
        const deviceCountry = DeviceInfo.getDeviceCountry().toLowerCase(); // get country (recieved from Language preferences in device settings)

        const is24Hour = DeviceInfo.is24Hour();  // get time format from device. If in device settings switcher stay in 24 hour position, this method returns "true"

        return (
            <View style={styles.container}>
                {
                    is24Hour ?
                        <Text>time EUR: {moment().format("HH:mm")}</Text> :  // 24 H format 
                        <Text>time US: {moment().format("hh:mm a")}</Text>   // 12 H format
                }
                <Text>{moment.locale('us') /* put localization for moment */}</Text>
                <Text>{moment().format("l") /*get date in device country format. You can change "l" to "ll" for other output style of date */}</Text>
            </View>
        );
    }
}