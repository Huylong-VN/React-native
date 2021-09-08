import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";


export default function Layout({children, history }) {
    const [click, setclick] = useState(false);
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>Header-search</View>
            {children}
            <View style={styles.menu}>
                <View style={styles.menuItem} onPress={() => history.push("/home")}>Home</View>
                <View style={styles.menuItem} onPress={() => history.push("/home")}>Home</View>
                <View style={styles.menuItem} onPress={() => history.push("/home")}>Home</View>
                <View style={styles.menuItem} onPress={() => history.push("/setting")}>Setting</View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu: {
        flexDirection: "row",
    },
    menuItem: {
        flex: 3,
        height: 50,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "auto",
        paddingBottom: "auto",
    }
});