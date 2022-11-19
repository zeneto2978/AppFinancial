
// HEADER

import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import {Fontisto} from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64; //currentHeight just Android platforms... // 

export default function Header({name}){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.userName}>
                    {name}
                </Text>

                <TouchableOpacity activeOpacity={0.1} style={styles.buttonUser}>
                <Fontisto name="smiley" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userName:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 44,

    }
})