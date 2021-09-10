import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, ActivityIndicator , Image } from 'react-native';


export default function Update({ history }) {

    return (
        <View style={styles.container}>
            <View><ActivityIndicator size="large" color="#0000ff"  /></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

});