import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {AntDesign} from '@expo/vector-icons';

export default function Login({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: "center",backgroundColor: "white", alignItems: "center"}}>
            <Image 
            style={{
                width:290,
                height:290,
                borderRadius:20,
                marginBottom: 50,
                transform: [{rotate: "-45deg"}]
            }}
            source={{
                uri: "https://images.unsplash.com/photo-1487803836022-91054ca05fdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGJpY3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                }}
                 />
            <Text style={{color: "rgba(0, 0, 0, 6)", fontSize: 24}}>Welcome to</Text>
            <Text style={{color: "black", fontSize: 30, fontWeight: '600'}}>Power Bike Shop</Text>
            <TouchableOpacity 
            onPress={() => {
                navigation.navigate("Home")
                }}
                style={{
                    backgroundColor: "#e3e3e3",
                    flexDirection: "row",
                    alignItems: "center",
                    padding:10,
                    paddingHorizontal: 60, 
                    borderRadius:10,
                    marginTop: 20
                }}
            >
               <AntDesign name="google" size={24} color="rgb(256, 100, 10)" />       
            <Text style={{fontSize: 17, marginLeft:15}}>Login with Gmail</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => {
            navigation.navigate("Home")
            }}
                style={{
                    backgroundColor: "black",
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    padding:10,
                    paddingHorizontal: 60, 
                    marginTop: 20
                }}
            >
                <AntDesign name="apple1" size={24} color="white" />
            <Text style={{fontSize: 17, color: "white", marginLeft:15}}>Login with Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={{marginTop: 10, fontWeight: "500", color: "grey"}}>
                    Not a member? 
                    <Text style={{color: "orange", fontWeight: "bold"}}> Signup</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}