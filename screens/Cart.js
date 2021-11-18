import React from "react";
import {View, Text, Image} from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function Cart({navigation}) {
    return (
        <View>
            <ScrollView style={{flexDirection: "column"}}>
             <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate("Home")
                        }}
                    >
                <View style={{marginTop: 40, flexDirection: "row",  alignItems: "center", justifyContent:"space-between", marginLeft: 10}}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: "column",  alignItems: "center", justifyContent:"space-between", marginTop: -22,}}>
                <Text style={{fontSize: 20, fontWeight: "600"}}>Cart List</Text>
            </View>
            <View style={{ flexDirection: "column",  alignItems: "center", justifyContent:"space-between"}}>
                <Text style={{fontSize: 15, fontWeight: "200"}}>(3 Items)</Text>
            </View>

            <View style={{marginTop: 50, flexDirection: "row"}}>
            <Image 
                            style={{
                                marginLeft: 5,
                                width:110,
                                height:120,
                                borderRadius: 19,                        
                                marginBottom: 30,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                            }}
                            source={{
                                uri: "https://images.unsplash.com/photo-1572884901053-b3f1896aea8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                }}
                        />
            <View style= {{flexDirection: 'column', padding: 10, marginLeft: 10}}>
            <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 20, fontWeight:"300", marginTop: -11}}>Jungle Bike</Text>
            <View style={{marginLeft: 120,}}><AntDesign name="delete" size={24} color="orange" /></View>
            </View>
            <View style={{marginTop: 5}}>
            <Text style={{fontWeight: "200"}}>Mountain Bike</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, fontWeight:"700", marginTop: 40}}>₵450.00</Text>
            <View style={{marginLeft:90, marginTop: 40}}><AntDesign name="minuscircle" size={24} color="black" /></View>
            <Text style={{fontSize: 20, fontWeight:"700", marginTop: 40, marginLeft: 10}}>1</Text>
            <View style={{marginLeft:10, marginTop: 40}}><AntDesign name="pluscircle" size={24} color="orange" /></View>
            </View>
            </View>
        </View>

        <View style={{marginTop: 2, flexDirection: "row"}}>
            <Image 
                            style={{
                                marginLeft: 5,
                                width:110,
                                height:120,
                                borderRadius: 19,                        
                                marginBottom: 30,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                            }}
                            source={{
                                uri: "https://images.unsplash.com/photo-1593091861575-38a632b4f32a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                }}
                        />
            <View style= {{flexDirection: 'column', padding: 10, marginLeft: 10}}>
            <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 20, fontWeight:"300", marginTop: -11}}>Sideways Bike</Text>
            <View style={{marginLeft: 100,}}><AntDesign name="delete" size={24} color="orange" /></View>
            </View>
            <View style={{marginTop: 5}}>
            <Text style={{fontWeight: "200"}}>Road Bike</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, fontWeight:"700", marginTop: 40}}>₵900.00</Text>
            <View style={{marginLeft:90, marginTop: 40}}><AntDesign name="minuscircle" size={24} color="black" /></View>
            <Text style={{fontSize: 20, fontWeight:"700", marginTop: 40, marginLeft: 10}}>1</Text>
            <View style={{marginLeft:10, marginTop: 40}}><AntDesign name="pluscircle" size={24} color="orange" /></View>
            </View>
            </View>
        </View>

        <View style={{marginTop: 2, flexDirection: "row"}}>
            <Image 
                            style={{
                                marginLeft: 5,
                                width:110,
                                height:120,
                                borderRadius: 19,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                            }}
                            source={{
                                uri: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmljeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                }}
                        />
            <View style= {{flexDirection: 'column', padding: 10, marginLeft: 10}}>
            <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 20, fontWeight:"300", marginTop: -11}}>Cruiser Bike</Text>
            <View style={{marginLeft: 120}}><AntDesign name="delete" size={24} color="orange" /></View>
            </View>
            <View style={{marginTop: 5}}>
            <Text style={{fontWeight: "200"}}>Urban Bike</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, fontWeight:"700", marginTop: 40}}>₵700.00</Text>
            <View style={{marginLeft:90, marginTop: 40}}><AntDesign name="minuscircle" size={24} color="black" /></View>
            <Text style={{fontSize: 20, fontWeight:"700", marginTop: 40, marginLeft: 10}}>1</Text>
            <View style={{marginLeft:10, marginTop: 40}}><AntDesign name="pluscircle" size={24} color="orange" /></View>
            </View>
            </View>
        </View>

        <View style = {{
                 
                 backgroundColor: 'white', 
                 padding:10, 
                 borderRadius: 15,
                 marginLeft: 5, 
                 marginTop: 20,
                 width: 380,
                 height: 200
             }}>
                 <View style={{flexDirection:'row'}}>
                 <Text style = {{color:'black', fontSize: 25, fontWeight:'200'}}>Subtotal</Text>
                 <View style={{marginLeft:130}}><Text style = {{ color: 'black', fontSize: 30, fontWeight: '600'}}>₵2,050.00</Text></View>
                 </View>
                 <View style={{flexDirection:'row', marginTop: 20}}>
                 <Text style = {{color:'black', fontSize: 25, fontWeight:'200'}}>Shipping fee</Text>
                 <View style={{marginLeft:90}}><Text style = {{ color: 'black', fontSize: 30, fontWeight: '600'}}>₵300.00</Text></View>
                 </View>

                 <View style={{flexDirection:'row', marginTop: 50}}>
                 <Text style = {{color:'black', fontSize: 35, fontWeight:'600'}}>Total</Text>
                 <View style={{marginLeft:140}}><Text style = {{ color: 'black', fontSize: 30, fontWeight: '600'}}>₵2,350.00</Text></View>
                 </View>
 
             </View>
            
             <View style = {{
                 
                 backgroundColor: "rgb(256, 100, 10)", 
                 padding:10, 
                 borderRadius: 15,
                 marginLeft: 25, 
                 marginTop: 20,
                 width: 350,
                 height: 50
             }}>
                 <Text style={{color: "white", fontSize: 25, marginLeft: 55}}>Proceed to Checkout</Text>
            </View>
            </ScrollView>

        </View>
        
    );
}
