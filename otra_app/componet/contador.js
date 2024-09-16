import { View,Text,StyleSheet } from "react-native";
import React from "react";

export default function Contador({cout}){
    return(
        <View style={styles.Txtcont}>
            <Text style={styles.cont}>{contador}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Txtcont:{
        fontSize:100,
        marginBottom:10,
        color:'white',
        fontWeight:'bold',
    },

    cont:{
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'white',
        height:250,
        width:250,
        marginBottom:25,
    }
});