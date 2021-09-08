import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, Image } from 'react-native';


export default function Home({ history }) {
    const [click, setclick] = useState(false);

    return (
        <View style={styles.container}>
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