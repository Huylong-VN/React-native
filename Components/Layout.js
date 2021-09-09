import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useHistory } from "react-router-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Layout({ children }) {
    let history = useHistory();
    const [active, setActive] = useState("home");
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.appName}>News Covid</Text>
                <TextInput
                    style={styles.appSearch}
                    placeholder="Search ..."
                />
                <View style={styles.appLink}>
                    <FontAwesome5 style={styles.iconStyles} name={'facebook'} size={25} />
                    <FontAwesome5 style={styles.iconStyles} name={'instagram'} size={25} />
                </View>
            </View>
            <ScrollView>
                {children}
            </ScrollView>
            <View style={styles.menu}>
                <TouchableOpacity style={ active==="home" ? styles.menuItemActive:styles.menuItem } onPress={() => { history.replace("/"); setActive("home") }}>
                    <FontAwesome5 style={ active==="home" ? styles.active: styles.icon } name={'home'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={ active==="news" ? styles.menuItemActive:styles.menuItem } onPress={() => { history.replace("/setting"); setActive("news") }}>
                    <FontAwesome5 style={ active==="news" ? styles.active: styles.icon} name={'newspaper'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={ active==="plus" ? styles.menuItemActive:styles.menuItem } onPress={() => { history.replace("/setting"); setActive("plus") }}>
                    <FontAwesome5 style={ active==="plus" ? styles.active: styles.icon} name={'plus-square'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={ active==="notify" ? styles.menuItemActive:styles.menuItem }  onPress={() => { history.replace("/setting"); setActive("notify")}}>
                    <FontAwesome5 style={ active==="notify" ? styles.active: styles.icon} name={'bell'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={ active==="setting" ? styles.menuItemActive:styles.menuItem }  onPress={() => { history.replace("/setting"); setActive("setting") }}>
                    <FontAwesome5 style={ active==="setting" ? styles.active: styles.icon} name={'cog'} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 23,
        zIndex: 1,
        fontSize: 25,
        fontWeight: "bold",
        backgroundColor: "#F02849",
        top: 0,
        width: "100%",
        height: "9%",
        flexDirection: "row",
        alignItems: "center",
    },

    iconStyles: {
        color: "white",
        margin: 10,
    },
    appName: {
        flex: 2,
        textAlign: "center",
        fontSize: 20,
        fontFamily: "Roboto",
        fontWeight: "bold",
        borderRadius: 10,
        borderColor: 'black',
    },
    appLink: {
        flex: 2,
        flexDirection: "row",
        color: "white",
        justifyContent: "flex-end"
    },
    appSearch: {
        flex: 2,
        borderRadius: 20,
        height: "70%",
        paddingLeft: 10,
        color: "white"
        
    },
    container: {
        flex: 1
    },
    menu: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        backgroundColor: "rgb(241, 243, 244)",
        bottom: 0,
        height: 49,
        zIndex: 1
    },
    icon: {
        color: "#F02849",
    },
    active: {
        color: "#1877F2",
    },
    menuItem: {
        flex: 1,
        height: 45,
        marginRight: 5,
        marginLeft: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 13,
        flexDirection: "column",
    },
    menuItemActive:{
        flex: 1,
        height: 45,
        marginRight: 5,
        marginLeft: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 13,
        flexDirection: "column",
        borderTopColor: "#1877F2",
        borderTopWidth: 1
    }

});