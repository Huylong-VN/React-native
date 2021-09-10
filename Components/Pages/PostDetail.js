import React, { useState, useEffect } from 'react';
import { View, StyleSheet,  Text, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import Moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { REACT_APP_API_URL,REACT_APP_BASE_IMGS } from "@env"

export default function PostDetail({ history }) {
    const [post, setPost] = useState([]);
    const [loading, setloading] = useState(false);
    var id = history.location.search.slice(1, history.location.search.length);
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        setloading(true)
        axios.get(REACT_APP_API_URL+"/Posts/detail/" + id)
            .then(response => {
                setPost(response.data);
                setloading(false);
            })
    }
    console.log(post.images)
    return (
        <View style={styles.container}>
            <View style={styles.backHome}>
                <View style={styles.backHomeLeft} >
                    <TouchableOpacity style={styles.backHomeRoute} onPress={() => { history.replace("/") }}>
                        <FontAwesome5 style={styles.backHomeIcon} name={'arrow-left'} size={25} />
                    </TouchableOpacity>
                </View>
                <View style={styles.backHomeCenter}>
                    <Text style={styles.detail}>Tin chi tiết</Text>
                </View>
                <View style={styles.backHomeRight}></View>
                <View>
                </View>
            </View>
            {loading === true ? <View style={styles.load}><ActivityIndicator size="large" color="#0000ff"  /></View> : (<View style={styles.content}>
                <Text style={styles.title}><Text style={{ fontWeight: 'bold', fontSize: 21 }}>Tiêu Đề:</Text> {post.title}</Text>
                <View style={styles.contentItem}>
                    <Text style={styles.contentItemText}>         {post.content}</Text>
                </View>
                <View>
                    {post.images != null ? 
                    <View> 
                        {post.images.map((value, key) => {
                            console.log(value)
                        return <Image key={key} style={{ height: 250, width: "100%" }} source={{ uri: REACT_APP_BASE_IMGS + value.path }} />
                        })}
                    </View> : <Text>No Content</Text>}

                </View>
                <Text style={styles.date}>{Moment(post.createAt).format('LL')}</Text>
            </View>)}


        </View>
    );
}

const styles = StyleSheet.create({
    load: {
        flexDirection: "row",
        justifyContent: "center",

    },
    date: {
        color: 'black', textAlign: 'right', fontWeight: 'bold', marginTop: '2%'
    },
    contentItemText: {
        fontSize: 15
    },
    contentItem: {
        margin: "2%"
    },
    content: {
        marginTop: "3%"
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
    backHome: {
        height: 40,
        backgroundColor: "rgb(241, 243, 244)",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row"
    },
    backHomeLeft: {
        flex: 1
    },
    backHomeCenter: {
        flex: 3,
        alignItems: "center"
    },
    backHomeRight: {
        flex: 1
    },
    backHomeRoute: {
        height: 28,
        width: 30,
        justifyContent: "flex-start",
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
    },
    title: {
        fontSize: 21,
        color: 'black',
        margin:"2%"
    },

});
