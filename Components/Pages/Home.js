import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Home({ history }) {
    const [click, setclick] = useState(false);
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
    const [phone, onChangePhone] = useState('');
    const [email, onChangeEmail] = useState('');

    return (
        <View style={styles.container}>
            <View>View</View>
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
