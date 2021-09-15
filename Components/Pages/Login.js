import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Login({ history }) {

    const [click, setclick] = useState(false);
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
    const [passwordConfirm, onChangePasswordConfirm ] = useState('');
    const [email, onChangeEmail] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>News COVID</Text>
            {click === false ? (
                <>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Username..."
                            placeholderTextColor="#003f5c"
                            onChangeText={ onChangeUsername } 
                            value={username}
                        />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Password..."
                            placeholderTextColor="#003f5c"
                            onChangeText={ onChangePassword } 
                            value={password}
                        />
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => history.push("/")}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setclick(!click)}>
                        <Text style={styles.loginText}>Signup</Text>
                    </TouchableOpacity>
                </>
            ) :
                (<>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Enter username..."
                            placeholderTextColor="#003f5c"
                            onChangeText={ onChangeUsername } 
                            value={username}
                        />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Enter password..."
                            placeholderTextColor="#003f5c"
                            onChangeText={ onChangePassword } 
                            value={password}
                        />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Enter password again..."
                            placeholderTextColor="#003f5c"
                            onChangeText={ onChangePasswordConfirm } 
                            value={passwordConfirm}
                        />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Enter email..."
                            placeholderTextColor="#003f5c"
                            onChangeText={ onChangeEmail } 
                            value={email}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => history.push("/")}>
                        <Text style={styles.loginText}>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setclick(!click)}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1877F2",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40,
        textAlign: 'center'
    },
    logoImage: {
        height: 50,
        width: 50,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white",
        fontSize: 16,
    },
    forgot: {
        color: "white",
        fontSize: 14
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white",
        fontSize: 16,
    }
});
