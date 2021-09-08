import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import { useHistory } from "react-router-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { color } from 'react-native-elements/dist/helpers';

export default function Layout({ children }) {
    let history = useHistory();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.appName}>News Covid</Text>
                <View style={styles.appLink}>
                    <FontAwesome5 style={styles.iconStyles} name={'facebook'} size={25} />
                    <FontAwesome5 style={styles.iconStyles} name={'instagram'} size={25} />
                </View>
            </View>
            <Text style={{ marginBottom:"2%"}}></Text>
            <ScrollView>
                {children}
            </ScrollView>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} onPress={() => history.replace("/home")}>
                    <FontAwesome5 style={styles.icon} name={'home'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => history.replace("/")}>
                    <FontAwesome5 style={styles.icon}  name={'newspaper'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => history.replace("/")}>
                    <FontAwesome5 style={styles.icon}  name={'plus-square'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => history.replace("/")}>
                    <FontAwesome5 style={styles.icon}  name={'bell'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => history.replace("/setting")}>
                    <FontAwesome5 style={styles.icon}  name={'cog'} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 18,
        zIndex:1,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "red",
        // position:"fixed",
        top:0,
        width:"100%",
        height: "7%",
        flexDirection: "row",
        alignItems: "center"
    },
    iconStyles: {
        color: "white",
        margin: 10,
    },
    appName:{
        flex: 1,
        textAlign:"left",
        fontSize: 20,
        fontFamily: "Roboto",
        fontWeight: "bold"
    },
    appLink:{
        flex: 1,
        flexDirection: "row",
        color:"white",
        justifyContent:"flex-end"
    },
    container: {
        flex: 1,
    },
    menu: {
        flexDirection: "row",
        textAlign: "center",
        alignItems:"center",
        width: "100%",
        backgroundColor:"pink",
        // position:"fixed",
        bottom: 0,
        height: 49,
        zIndex:1,
    },
    icon:{
        color: "red",
    },
    menuItem: {
        flex: 1,
        height: 45,
        backgroundColor: "yellow",
        marginRight:5,
        marginLeft:5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 13,
        flexDirection: "column",
    },

});