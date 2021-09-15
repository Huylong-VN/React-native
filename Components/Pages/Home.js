import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button,ScrollView, SafeAreaView, FlatList, Text, TextInput, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import Moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { REACT_APP_API_URL,REACT_APP_BASE_IMGS } from "@env"


export default function Home({ history }) {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(1);
    const [isListEnd, setIsListEnd] = useState(false);
  
    useEffect(() => {
        getData()
    }, [])
    // console.log(process.env)
    const getData = () => {
        if (!loading && !isListEnd) {
            setLoading(true);
            axios.get(REACT_APP_API_URL+"posts?maxResultCount=8&&skipCount=" + offset)
                .then(response => {
                    if (response.data.totalCount > 0) {
                        setOffset(offset + 1);
                        // After the response increasing the offset
                        setPost([...post, ...response.data.items]);
                        setLoading(false);
                    } else {
                        setIsListEnd(true);
                        setLoading(false);
                    }
                })
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.extention}>
                <View style={styles.extentionItem1}>
                    <FontAwesome5 style={styles.icon} name={'file-medical'} size={25} />
                    <Text style={styles.iconText}>Khai báo y tế</Text>
                </View>
                <View style={styles.extentionItem1}>
                    <FontAwesome5 style={styles.icon} name={'user-nurse'} size={25} />
                    <Text style={styles.iconText}>Danh sách bác sĩ</Text>
                </View>
            </View>
            <View style={styles.extention}>
                <View style={styles.extentionItem2}>
                    <FontAwesome5 style={styles.icon} name={'table'} size={25} />
                    <Text style={styles.iconText}>Thống kê</Text>
                </View>
                <View style={styles.extentionItem2}>
                    <FontAwesome5 style={styles.icon} name={'ad'} size={25} />
                    <Text style={styles.iconText}>Quảng cáo</Text>
                </View>
            </View>

            
            <View style={styles.contentTop}>
            { post.map((value, index)=>{
                Moment.locale('vi');
                var dt =  value.createAt;
                return(
                    <TouchableOpacity key={index} style={styles.item} onPress={() => {history.push("/detail?"+value.id)} }> 
                        <View style={styles.imgItem}>
                            <Image key={index} style={styles.img} source = {{ uri:REACT_APP_BASE_IMGS+ value.contents[0].images[0].path}} />
                        </View>
                        <View style={styles.contentItem}>
                            <Text style={styles.contentDate}>{Moment(dt).format('LL')}</Text>
                            <Text style={styles.contentTitle}>{value.title}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
                <View style={{alignItems:"center"}}>
                { loading===true ? <View><ActivityIndicator size="large" color="#0000ff"  /></View>  : <View></View> }
                </View>
                
                <View style={{alignItems:"center"}}>
                { isListEnd ? <Text>Đã hết</Text> : loading===false ? <Button title="Xem thêm" onPress={ getData }/> : <View></View> }
                </View>
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
        marginBottom: 10,
    },
    contentTop:{
        marginTop: 10,
    },
    icon: {
        color: "white",
        marginRight: 10,
    },
    iconText:{
        color:"white",
        fontSize: 16,
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
        height: "90%",
        width: "88%",
        borderRadius: 5,
        marginLeft: 5,
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
        backgroundColor:"#1877F2",
        justifyContent: "center",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    extentionItem2:{
        flex: 1,
        margin: 5,
        backgroundColor:"#00A400",
        justifyContent: "center",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        
    }
});