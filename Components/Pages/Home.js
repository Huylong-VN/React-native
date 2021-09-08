import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button,ScrollView, SafeAreaView, FlatList, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Moment from 'moment';

export default function Home({ history }) {
    const [post, setPost] = useState([]);
    useEffect(()=>{
        axios.get("https://backend-api37.herokuapp.com/api/posts?maxResultCount=8")
        .then(response => setPost(response.data.items))
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.extention}>
                <View style={styles.extentionItem1}>
                    <Text style={{color:"white"}}>Đăng ký tờ khai y tế</Text>
                </View>
                <View style={styles.extentionItem1}>
                <Text style={{color:"white"}}>Đanh sách bác sĩ</Text>
                </View>
            </View>
            <View style={styles.extention}>
                <View style={styles.extentionItem2}>
                    <Text style={{color:"white"}}>Thống kê</Text>
                </View>
                <View style={styles.extentionItem2}>
                    <Text style={{color:"white"}}>Quảng cáo</Text>
                </View>
            </View>
            <View style={styles.contentTop}>
            { post.map((value, index)=>{
                
                Moment.locale('vi');
                var dt =  value.createAt;
                return(
                    <View key={index} style={styles.item}> 
                        <View style={styles.imgItem}>
                            {value.images.map((value, index) => {
                                return <Image key={index} style={styles.img} source = {{ uri:"https://backend-api37.herokuapp.com/store-image/"+ value.path}} />
                            })}
                        </View>
                        <View style={styles.contentItem}>
                            <Text style={styles.contentDate}>{Moment(dt).format('LL')}</Text>
                            <Text style={styles.contentTitle}>{value.title}</Text>
                        </View>
                    </View>
                )
            })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        width:"100%",
        marginBottom: 50,
    },
    contentTop:{
        marginTop: 20,
    },
    item: {
        flexDirection: "row",
        height: 120,
        width: "100%",
        backgroundColor: "white",
        marginRight: 20,
        padding: 10
    },
    imgItem: {
        flex:1,
    },
    img: {
        height: "100%",
        width: "90%",
        borderRadius: 10,
    },
    contentItem: {
        flex:3,
        
    },
    contentTitle: {
        fontSize: 18,
        fontWeight: "600"
    },
    contentDate: {
        opacity:0.4
    },

    extention:{
        flexDirection:"row",
        width:"100%",
        height: 70,
        
        
    },
    extentionItem1:{
        flex: 1,
        margin: 5,
        backgroundColor:"#4444ef",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 15,
    },
    extentionItem2:{
        flex: 1,
        margin: 5,
        backgroundColor:"#0e950e",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 15,
    }

});
