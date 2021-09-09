import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button,ScrollView, SafeAreaView, FlatList, Text, TextInput, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import Moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function PostDetail({ history }) {
    const [post, setPost] = useState([]);
    var id = history.location.search.slice(1, history.location.search.length);
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get("https://backend-api37.herokuapp.com/api/Posts/detail/" + id )
            .then(response => {
                setPost(response.data);
                
            })
    }
    console.log(post);

    return (
        <View style={styles.container}>
            <View  style={styles.backHome}>
                <View style={styles.backHomeLeft} >
                    <TouchableOpacity style={styles.backHomeRoute} onPress={() => { history.replace("/") }}>
                        <FontAwesome5 style={styles.backHomeIcon} name={'arrow-left'} size={25} />
                    </TouchableOpacity>
                </View>
                <View  style={styles.backHomeCenter}>
                    <Text style={styles.detail}>Tin chi tiết</Text>
                </View>
                <View  style={styles.backHomeRight}></View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    backHome: {
        height: 40,
        backgroundColor: "rgb(241, 243, 244)",
        justifyContent:"flex-start",
        alignItems: "center",
        flexDirection:"row"
    },
    backHomeLeft: {
        flex:1
    },
    backHomeCenter: {
        flex:3,
        alignItems:"center"
    },
    backHomeRight: {
        flex:1
    },
    backHomeRoute: {
        height: 28,
        width: 30,
        justifyContent:"flex-start",
        flexDirection: "column"
    },
    backHomeIcon: {
        marginLeft: 10,
        alignContent: "center",
        justifyContent: "center",
        color: "#1877F2"
    },
    detail: {
        fontSize: 20,
        fontWeight: "600"
    }
      

});
