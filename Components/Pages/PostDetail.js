import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button,ScrollView, SafeAreaView, FlatList, Text, TextInput, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import Moment from 'moment';

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
    console.log(post)
    return (
        <View style={styles.container}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
      

});
