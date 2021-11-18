import React from "react";
import {View, Text, Image,} from "react-native";
import { Ionicons, FontAwesome, AntDesign, Feather, MaterialIcons} from "@expo/vector-icons";
import {  ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function Home({navigation}) {
    return (
            <View style={{backgroundColor: "white",flex: 1, padddingTop: 55, paddingHorizontal:20, marginTop: 30}}>
                <ScrollView style={{flexDirection: "column"}}>
                <View style={{flexDirection: "row",  alignItems: "center", justifyContent:"space-between"}}>
                <Ionicons name="ios-menu-outline" size={24} color="black" />
                <FontAwesome name="bicycle" size={24} color="black" />

                <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <AntDesign name="search1" size={20} color="black" />
                <Ionicons name="notifications-outline" size={20} color="black" />            
                </View>            
                </View>

                <Text style={{color: "grey", fontSize: 15, marginTop: 20}}>The World's <Text style={{color: "orange", fontSize: 20, fontWeight: '700'}}>Best Bike</Text></Text>
                <Text style={{fontSize: 20, fontWeight: '700', marginTop: 25}}>Categories</Text> 


                <View style={{flexDirection: "row", marginTop: 15}}>
                    <View 
                    style={{
                        borderRadius:13,
                        alignItems:"center",
                        backgroundColor: "#e3e3e3",
                        padding: 10,
                        width: 50,
                        height: 40,
                        marginRight: 25
                        }}
                    >
                        <TouchableOpacity><Text style={{color: "orange", fontSize: 17}}>All</Text></TouchableOpacity>
                    </View>

                    <View 
                    style={{
                        borderRadius:13,
                        alignItems:"center",
                        justifyContent: "space-between",
                        backgroundColor: "#e3e3e3",
                        padding: 10,
                        width: 90,
                        height: 40,
                        marginRight: 25
                        }}
                    >
                        <TouchableOpacity><Text style={{ fontSize: 17, color: "grey"}}>Roadbike</Text></TouchableOpacity>
                    </View>

                    <View 
                    style={{
                        borderRadius:13,
                        alignItems:"center",
                        justifyContent: "space-between",
                        backgroundColor: "#e3e3e3",
                        padding: 10,
                        width: 90,
                        height: 40, 
                        marginRight: 25
                        }}
                    >
                        <TouchableOpacity><Text style={{ fontSize: 17, color: "grey"}}>Mountain</Text></TouchableOpacity>
                    </View>

                    <View 
                    style={{
                        borderRadius:13,
                        alignItems:"center",
                        justifyContent: "space-between",
                        backgroundColor: "#e3e3e3",
                        padding: 10,
                        width: 70,
                        height: 40,
                        marginRight:25
                        }}
                    >
                        <TouchableOpacity><Text style={{ fontSize: 17, color: "grey"}}>Urban</Text></TouchableOpacity>
                    </View>  
                    
                </View>

                <View style ={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View>
                        <Image 
                            style={{
                                marginLeft: 1,
                                width:170,
                                height:250,
                                borderRadius: 19,
                                marginBottom: 20,
                                marginTop: 20,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                            }}
                            source={{
                                uri: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmljeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                }}
                        />
                        <View style={{ alignItems: "center"}}>
                            <Text style={{fontSize: 20, fontWeight:"400", marginTop: -20}}>Cruiser Bikes</Text>
                            <Text style={{fontSize: 20, fontWeight:"700", marginBottom:20}}>₵700.00</Text>   
                        </View>                     
                    </View>
                    
                    <View>
                        <Image 
                            style={{
                                marginLeft: 1,
                                width:170,
                                height:250,
                                borderRadius: 19,                        
                                marginBottom: 20,
                                marginTop: 20,       
                            }}
                            source={{
                                uri: "https://images.unsplash.com/photo-1593091861575-38a632b4f32a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                }}
                        />
                        <View style={{ alignItems: "center"}}>
                            <Text style={{fontSize: 20, fontWeight:"400", marginTop: -20}}>Sideways Bike</Text>
                            <Text style={{fontSize: 20, fontWeight:"700"}}>₵900.00</Text>
                        </View>
                    </View>
                </View>

                <View style ={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View>
                        <Image 
                            style={{
                                marginLeft: 1,
                                width:170,
                                height:250,  
                                borderRadius: 19,                      
                                marginBottom: 20,    
                            }}
                            source={{
                                uri: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJpa2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                }}
                        />
                        <View style={{ alignItems: "center"}}>
                            <Text style={{fontSize: 20, fontWeight:"400", marginTop: -20}}>Prone Bike</Text>
                            <Text style={{fontSize: 20, fontWeight:"700"}}>₵800.00</Text>
                        </View>
                    </View>
                    
                    <View>
                        <Image 
                            style={{
                                marginLeft: 1,
                                width:170,
                                height:250,
                                borderRadius: 19,                        
                                marginBottom: 20,   
                            }}
                            source={{
                                uri: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                }}
                        />
                        <View style={{ alignItems: "center"}}>
                            <Text style={{fontSize: 20, fontWeight:"400", marginTop: -20}}>Touring Bike</Text>
                            <Text style={{fontSize: 20, fontWeight:"700"}}>₵550.00</Text>
                        </View>
                    </View>
                </View>

                <View style ={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View>
                        <Image 
                            style={{
                                marginLeft: 1,
                                width:170,
                                height:250,  
                                borderRadius: 19,                      
                                marginBottom: 20,    
                            }}
                            source={{
                                uri: "https://images.unsplash.com/photo-1487803836022-91054ca05fdd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                }}
                        />
                        <View style={{ alignItems: "center"}}>
                            <Text style={{fontSize: 20, fontWeight:"400", marginTop: -20}}>Track Bike</Text>
                            <Text style={{fontSize: 20, fontWeight:"700"}}>₵600.00</Text>
                        </View>
                    </View>
                    
                    <View>
                        <Image 
                            style={{
                                marginLeft: 1,
                                width:170,
                                height:250,
                                borderRadius: 19,                        
                                marginBottom: 20,   
                            }}
                            source={{
                                uri: "https://images.unsplash.com/photo-1572884901053-b3f1896aea8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                }}
                        />
                        <View style={{ alignItems: "center"}}>
                            <Text style={{fontSize: 20, fontWeight:"400", marginTop: -20}}>Jungle Bike</Text>
                            <Text style={{fontSize: 20, fontWeight:"700"}}>₵450.00</Text>
                        </View>
                    </View>
                </View>

                </ScrollView>

                <View style={{
                    flexDirection: "row",
                    backgroundColor: "#070045", 
                    justifyContent: "space-evenly", 
                    borderRadius: 10,
                    padding: 5,
                    marginLeft: -5,
                    width: 385
                    }}
                    >
                    <View style={{backgroundColor: "white", padding: 10, borderRadius: 40}}>
                    <Feather name="home" size={24} color="black" />
                    </View>

                    <View style={{padding: 10}}>
                    <MaterialIcons name="favorite-border" size={24} color="white" />
                    </View>

                    <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate("Cart")
                        }}
                    >
                    <View style={{ padding: 10}}>
                    <Feather name="shopping-bag" size={24} color="white" />
                    </View>
                    </TouchableOpacity>
                </View>


            </View>


    );

}
