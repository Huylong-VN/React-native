import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useHistory } from "react-router-native";


export default function Layout({ children }) {
    let history = useHistory();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Header-search</Text>
            {children}
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => history.replace("/home")}>
                    <Text style={styles.menuItem} >Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => history.replace("/home")}>
                    <Text style={styles.menuItem} >Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => history.replace("/home")}>
                    <Text style={styles.menuItem} >Home</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => history.replace("/setting")}>
                    <Text style={styles.menuItem}>Setting</Text>
                </TouchableOpacity>
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