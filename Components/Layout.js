import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Home({ children }) {
    const [click, setclick] = useState(false);
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <View style={styles.container}>
            <View>Home</View>
            <View>Home</View>
            <View>Home</View>
            {children}
            <View>Setting</View>
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