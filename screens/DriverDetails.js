import { StyleSheet, Text, View,  StatusBar, TouchableOpacity, ScrollView, SafeAreaView, Image, Animated, BackHandler, TextInput} from 'react-native';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from '../constants';
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";


import { HeaderBar ,IconButton, TextIconButton, Rating, TextButton, MapComponent, DriverCard} from "../components";

import * as Animatable from 'react-native-animatable';

import { ImageBackground } from 'react-native';
import HomeScreen from './HomeScreen';





const DriverDetails = () => {


 

//   const [selectedPlace, setSelectedPlace] = React.useState(null)
//   const [selectedHotel, setSelectedHotel] = React.useState(null)
//   const [allowDragging, setAllowDragging] = React.useState(true)


//   const _draggedValue = React.useRef(new Animated.Value(0)).current;


// //   let _panel = React.useRef(null);

//   React.useEffect(() => {
//       let { selectedPlace } = route.params;
//       setSelectedPlace(selectedPlace) 
//       // Listener that will diasble panel dragging whenever the mapview is shown
//       _draggedValue.addListener((valueObj) => {
//           if (valueObj.value > SIZES.height) {
//               setAllowDragging(false)
//           }
//       })
//       return () => {
//           _draggedValue.removeAllListeners()
//       }
//   }, [])
  const navigation = useNavigation();





function renderMap() {
    return (
 
            <View
                style={{
                 flex: 1,
                  height : "100%",
                  flexDirection: 'column',
                  backgroundColor: COLORS.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
            >
                     {/* header */}
                     <HeaderBar
                              // title={selectedPlace?.name}
                              leftOnPressed={() => {navigation.navigate('SeleDriver')}}
                              icon={icons.close}
                              iconStyle3={{
                                tintColor: COLORS.black,
                              }}
                              right={false}
                              title= "Driver Details"
                              containerStyle={{
                                
                                  position: 'absolute',
                                  top: SIZES.padding * 2,
                                  // height: "20%",
                                  // width: SIZES.width,
                                  // backgroundColor: COLORS.red1Font
                                 
                              }}
                              containerStyle2={{
                              
                                // height: "20%",
                                // width: SIZES.width,
                                backgroundColor: COLORS.transparentWhite,
                                
                               
                            }}
                            titleStyle={{
                              
                              // height: "20%",
                              // width: SIZES.width,
                              color:COLORS.black,
                              fontSize: 18,
                              fontWeight: 'bold'
                              
                             
                          }}
                        
                             
                            />
             
                    <View style={styles.Card}>
                            <View style={{
                               marginTop: 10,
                                  flexDirection: 'column',
                                 
                                  // justifyContent: 'center',
                                }}>
                                  <View  style={{
                               marginTop: 10,
                               
                                  flexDirection: 'row',
                                 
                                  // justifyContent: 'center',
                                }}>

                                
                                  <View style={styles.Circle}>
                                      <Image source={require('../assets/images/Profile2.jpg')} style={styles.profileimage} resizeMode="center"
                                      />
                                  </View>
                               <View style={{
                                     
                               
                                      flexDirection: 'column',
                                 
                                  // justifyContent: 'center',
                                }}>

                            
                                <Text
                                      style={{
                                        color: COLORS.black,
                                        fontWeight: 'bold',
                                        ...FONTS.h1,
                                        fontSize: 23,
                                        marginLeft: 20
                                      }}
                                      >Lalith Perera</Text>
                                         <Text
                                style={{
                                  color: COLORS.black,
                                  // fontWeight: 1,
                                  ...FONTS.h2,
                                  fontSize: 15,
                                  marginLeft: 20
                                }}
                                >NB3742 - Dehiwala</Text>
                                   <Text
                                  style={{
                                      ...FONTS.h3,
                                      marginLeft: 20,
                                      marginTop:5
                                    
                                  }}
                                  >
                                Mini Bus  *  AC
                                  </Text>
                                   <Image
                                source={require('../assets/icons/Seats.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    marginLeft: 20,
                                    marginTop: 10
                                    // tintColor: COLORS.red1Font,
                                    
                                }}
                            />
                                <Text
                                style={{
                                    ...FONTS.h3,
                                    marginLeft: 60,
                                    marginTop:-25
                                  
                                }}
                                >
                              20 Seats Available
                                </Text>

                                <Image source={require('../assets/images/Star.png')} style={styles.Star} resizeMode="center"
                                />
                                <Text style={{
                                    marginTop: -27,
                                    marginLeft: -55,
                                    ...FONTS.h2,
                                    

                                }}>4.5</Text>



                                </View>

                                  </View>
        

                   
                      
                              

                           
                              
                             
                            
                                      <View   style={{
                                              flexDirection: 'row',
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              marginTop: 20
                                          }}> 
                                            <Image source={require('../assets/images/Bus.png')} style={styles.Star1} 
                                            />
                                            <Image source={require('../assets/images/Bus.png')} style={styles.Star1} 
                                            />
                                          

                                  </View>
                                  <View   style={{
                                              flexDirection: 'row',
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              marginTop: 20
                                          }}> 
                                            <Image source={require('../assets/images/Bus.png')} style={styles.Star1} 
                                            />
                                            <Image source={require('../assets/images/Bus.png')} style={styles.Star1} 
                                            />
                                          

                                  </View>
                            </View>
                                  

                            </View>
                            <Text style={{
                                    marginTop: 5,
                                    marginLeft: -220,
                                    ...FONTS.h2,
                                    fontWeight: 'bold'
                                    

                                }}>Route Details</Text>
                                  <Text style={{
                                    marginTop: 1,
                                    marginLeft: -105,
                                    ...FONTS.h2,
                                    fontSize:16
                                    
                                    

                                }}>Time can be changed due to traffic</Text>
                                 <Image source={require('../assets/images/map1.png')} style={styles.Star2} 
                                            />
                                           

                            <TextIconButton
                                          label="SEND REQUEST"
                                          customContainerStyle={{
                                          width: "90%",
                                          height: 55,
                                        
                                          borderRadius: SIZES.radius_btn4,
                                          marginTop: SIZES.padding1,
                                          marginBottom: 30
                                          }}
                                          customLabelStyle={{
                                          color: COLORS.white,
                                          alignItems: 'center',
                                          marginLeft: -15,
                                          ...FONTS.h2,
                                          
                                          }}
                                          onPress={() => {navigation.navigate('PendingDriver')}}
                                      />

                          
                
             
                           
            </View>

          

   
    )
}





  return (
    <ScrollView>
    <View style={{ flex: 1 }}>
       <StatusBar
                        style="auto"
                        />
    
    {renderMap()}
    {/* {SlidingUpPanel()} */}
  </View>
  </ScrollView>
  )
}

export default DriverDetails;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    borderRadius: 8,
    borderWidth: 1,
    width: "85%",
    height: 50,
    marginLeft: 17,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2

  },
 line: {
    width:380,
    height: 26,
   
    // resizeMode: "cover",
    
  
  },
  profileimage: {
    width: 120,
    height: 120,
    borderRadius: 1900,
    // overflow: "hidden",
    
  
  },
  Circle:{
    width: 120,
    height: 120,
    borderRadius: 100,
marginTop:2,
marginLeft: -15
   
    

    // overflow: "hidden",

  },


  Card:{
    width: 350,
    height: 400,
   borderRadius: 30, 
    backgroundColor: COLORS.white,
    borderWidth:1,
    
marginTop:90,
alignItems: 'center',
// justifyContent: 'center', 
   
    

    // overflow: "hidden",

  },
  Star:{
    width: 24,
    height: 24,

    marginLeft:-85,
    
  },
  Star1:{
    width: 100,
    height: 70,
    marginHorizontal:20 
  },
  Star2:{
    width: SIZES.width*0.8,
    height: 130,
    borderRadius:20,
    marginHorizontal:20 
  }


//   header: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',

// },


// container: {
//   backgroundColor: COLORS.background,
//   height: "100%",
//   flex: 1
// },
// titlebar: {
//   flexDirection: 'row',

// },


// nameTitle : {
//    color: COLORS.black,
//    marginTop: 15,
//    fontSize: SIZES.h3,

   
// },
// proname : {
//   alignItems: 'center'
// },
// nametag : {
//   color: COLORS.dark_grey,
//   marginTop: 3,
//   fontSize: SIZES.h3,

  
// },
// prodes : {
//   color: COLORS.grey,
//   marginTop: -5,
//   padding: 35,
//   fontSize: SIZES.body5,

  
// },




})