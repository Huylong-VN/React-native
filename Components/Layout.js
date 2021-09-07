import React from 'react'
import {View,Text} from 'react-native'

export const Layout = (props) => {
    return (
        <View>
            <View>ok</View>
            {props.children}
            <View>Ok Dit</View>
        </View>
    )
}
