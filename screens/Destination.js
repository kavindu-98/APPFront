import { StyleSheet, Text, View,  StatusBar, TouchableOpacity, ScrollView, SafeAreaView, Image, Animated, BackHandler, TextInput} from 'react-native';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from '../constants';
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import {
  IconButton,

} from "../components";
import { HeaderBar , TextIconButton, Rating, TextButton, MapComponent} from "../components";

import * as Animatable from 'react-native-animatable';

import { ImageBackground } from 'react-native';
import HomeScreen from './HomeScreen';





const Destination = ({ route}) => {

const textInput1 = useRef(4);
const textInput2 = useRef(5);
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["100%"];   


  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 100;
  const Header_Min_Height = 40;
 
  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height- Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp'
  }) 

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
                 flex: 3,
                  height : "100%",
                  backgroundColor: COLORS.gray10,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }}
            >
                     {/* header */}
                     <Animated.View style={
                            [styles.header,
                            {
                                height: animateHeaderHeight
                            }
                            ]}>
          
            <TextIconButton
                           
                           icon={icons.close}
                           customContainerStyle={{
                            marginTop: SIZES.padding1,
                            backgroundColor: COLORS.transparentWhite,
                            width: 60,
                            marginLeft: -4
                          
                        }}
                        customIconStyle={{
                            height: 25
                        }}
                        onPress={() => {navigation.goBack()}}
                    /> 
                    
            
          <Text style={styles.Title}>Canada Friendship Rd, Katunaya...</Text>
        <View style={styles.button}>

        <IconButton
                    icon={icons.map}
                    onPress={() => {navigation.navigate('SetDesM')}}
                    iconStyle={{
                      marginLeft:50,
                      marginTop: 10,
                      borderRadius: 50
                        // tintColor: COLORS.transparentWhite
                    }}
                ></IconButton>
                   
        </View>
         
      </Animated.View>

      <GooglePlacesAutocomplete  
          nearbyPlacesAPI='GooglePlacesSearch'
          placeholder='Going to..'
          listViewDisplayed= "auto"
          debounce={400}
          currentLocation={true}
          ref= {textInput1}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails= {false}
          autoFocus={true}
          // styles= {autoComplete}
          // query={
          //   key: 
          // }
      >


      </GooglePlacesAutocomplete>
              
          
                           
            </View>

   
    )
}

function SlidingUpPanel() {
  return (
    
          <View
              style={{
               flex: 1,
           
                backgroundColor: COLORS.gray10,
                // alignItems: 'center',
                // justifyContent: 'center',
              }}
          >
       
    
      
           
        
          </View>


  )
}



  return (
    <View style={{ flex: 1 }}>
         <StatusBar
                        style="auto"
                        />
    
    {renderMap()}
    {SlidingUpPanel()}
  </View>
  )
}

export default Destination;

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
  autoComplete:{
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
   
    
    
},
Title: {
    // justifyContent: 'flex-end',
    color: COLORS.black,
    ...FONTS.h3,
    fontWeight: 'bold',
    marginTop: 45,
    marginLeft: 10,
     justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  button: {
    // marginLeft: 10,
    alignItems: 'flex-end', 
    
    marginTop: 35

},

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