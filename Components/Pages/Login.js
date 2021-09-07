import React from 'react';
import { View, StyleSheet, Text,TextInput,TouchableOpacity, Image } from 'react-native';

export default function Login({history}) {
  return (
    <View style={styles.container}>
         <Image style={styles.logoImage} 
         source={{uri:"https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/p100x100/120542516_645113559480091_3723724883760704321_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=58c789&_nc_ohc=YMy_oQdSGdEAX8pxtyL&_nc_ht=scontent-hkt1-1.xx&oh=f30299a7c7fe6434dfde394250db6675&oe=61584859"}} />
         <Text style={styles.logo}>Shoppe Phòng Trọ 302</Text>
         <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>history.push("/home")}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40,
    textAlign: 'center'
  },
  logoImage:{
    height:50,
    width:50,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
