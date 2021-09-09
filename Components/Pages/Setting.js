import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, ActivityIndicator , Image } from 'react-native';


export default function Home({ history }) {

    return (
        <View style={styles.container}>
            <Text><View><ActivityIndicator size="large" color="#0000ff"  /></View></Text>
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