import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Result = ({navigation}) => {
  return (
    <View>
        <View>
            <Text>Result</Text>
        </View>
        <View style={styles.bannerContainer}>
        <Image
 source={require('../assets/Online test-bro.png')}
style={styles.banner}
resizeMode="contain"
/>   
        </View>
        <View>
        <TouchableOpacity onPress={() => NavigationHelpersContext.navigate("Home")}>
            <Text>Home</Text>
            </TouchableOpacity>   
        </View>
    </View>
  )
}

export default Result;

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300,
        },
        bannerContainer:{
            justifyContent:'center',
            alignItems:'center',
        },
        container:{
            paddingTop:40,
            paddingHorizontal:20,
            height:'100%',
        },
});