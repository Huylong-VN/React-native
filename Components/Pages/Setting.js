import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, ActivityIndicator , Image } from 'react-native';


export default function Setting({ history }) {

    return (
        <View style={styles.container}>
            <View style={styles.settingMenu}>
                <TouchableOpacity style={styles.settingItem} onPress={() => history.replace("/login")}>
                    <Text style={styles.settingItemText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem} onPress={() => history.replace("/login")}>
                    <Text style={styles.settingItemText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem} onPress={() => history.replace("/login")}>
                    <Text style={styles.settingItemText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem} onPress={() => history.replace("/login")}>
                    <Text style={styles.settingItemText}>Login</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingMenu: {
        height: 40,
        width: "90%",
        marginTop: "3%",
        backgroundColor: "#1877F2",
        // borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        
    },
    settingItemText: {
        color: "white",
        textAlign:"center",
        fontSize: 16
    },
    settingItem: {
        flex: 1,
    }

});