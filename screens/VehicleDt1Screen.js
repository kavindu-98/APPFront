import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LoginComponent, SignupComponent } from "../components";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Animated,
  
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { TextIconButton, PasswordIcon } from "../components";
import * as Animatable from "react-native-animatable";
import SelectBox from 'react-native-multiple-select';
import {Picker} from '@react-native-picker/picker';

const Tab = createMaterialTopTabNavigator();

const API_URL = 'http://192.168.1.107:8080//api/users/login';



const VehicleDt1Screen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [Name1, setName1] = useState();
  const [Name2, setName2] = useState();
  const [Phone, setPhone] = useState();
  const [Did, setDid] = useState();
  const [NIC, setNIC] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
   const [selectedItem, setSelectedItem] = useState({});
   const [selectedGender, setSelectedGender] = useState({});


  const K_Option = [
    {
      item : '+94',
      id: 'sri',
    },
    {
      item : '+88',
      id: 'india',
    },
    {
      item : '+97',
      id: 'mal',
    },
    {
      item : '+99',
      id: 'ban',
    },
    {
      item : '+70',
      id: 'japan',
    },
    {
      item : '+60',
      id: 'usa',
    },
  ]

 

  const register = async () => {
    const payload = {
      email,
      password,
    };

    try {
      fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      navigation.navigate("Home");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 150;
  const Header_Min_Height = 40;
 
  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height- Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp'
  }) 

 




  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} > 
    <View style={styles.container}>
                    <StatusBar
                        style="auto"
                        />
        
      <Animated.View style={
        [styles.header,
          {
            height: animateHeaderHeight
          }
        ]}>
          
            <TextIconButton
                           
                           icon={icons.left_arrow}
                           customContainerStyle={{
                            marginTop: SIZES.padding2,
                            backgroundColor: COLORS.transparentWhite,
                            width: 60,
                            marginLeft: -6
                          
                        }}
                        customIconStyle={{
                            height: 30
                        }}
                        onPress={() => {navigation.navigate('SL')}}
                    /> 
                    
            
          <Text style={styles.Title}> Vehicle Info</Text>
        <View style={styles.button}>

        <TextIconButton
                           label="Log in"
                           customContainerStyle={{
                            width: 130,
                            height: 35,
                            borderRadius: SIZES.radius_btn1,
                            // marginLeft: 15,
                            backgroundColor: COLORS.transparentWhite,
                            alignItems: 'flex-end',
                            // justifyContent: 'space-around'
                            
                        }}
                        customLabelStyle={{
                            color: COLORS.red1Font,
                            ...FONTS.h2,
                            alignItems: 'flex-end',
                            marginLeft: -110,
                            fontSize: 20
                        }}
                        onPress={() => {navigation.navigate('Login')}}
                    /> 
                   
        </View>
         
      </Animated.View>
     
      <ScrollView
       scrollEventThrottle={16}
       onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
        {useNativeDriver: false}
       )}
      
      >
      
      <View style={styles.footer}>
        
          <View  style={{ marginTop: SIZES.padding5, margin: SIZES.padding4}}>
                
                <View>
                   <View style={styles.namecontainer}>
                    <View>
                        <Text style={styles.inputTitle}>VEHICLE NUMBER</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your Vehicle No"
                            // autoFocus
                            value={Name1}
                            onChangeText={text => setName1(text)}
                          />
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>VEHICLE TYPE</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your Vehicle Type"
                            // autoFocus
                            value={Name2}
                            onChangeText={text => setName2(text)}
                          />
                    </View>
                     
                   </View>
                 
                    <Text style={styles.inputTitle}>VEHICLE LICENSE NUMBER</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Vehicle License Number"
                    // secureTextEntry
                    value={email}
                    onChangeText={text => setEmail(text)}
                  />

               
                     
                    <Text style={styles.inputTitle}>VEHICLE INSURANCE NUMBER</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Vehicle Insurance Number"
                    // secureTextEntry
                    value={Did}
                    onChangeText={text => setDid(text)}
                  />
     
                 
                </View>

                    <TextIconButton
                      label="CONTINUE"
                      customContainerStyle={{
                      width: "100%",
                      height: 55,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: SIZES.padding1
                      }}
                      customLabelStyle={{
                      color: COLORS.white,
                      alignItems: 'center',
                      marginLeft: -15,
                      ...FONTS.h2,
                      
                      }}
                      onPress={() => {navigation.navigate('Login')}}
                   />
  

          </View>



          
      </View>
      </ScrollView>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default VehicleDt1Screen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: COLORS.white
  },
  header: {
      // flex: 1,
      flexDirection: 'row',
      
  },
  footer: {
      // flex: 1,
      // height: "70%",
      backgroundColor: '#fff',
      // borderTopLeftRadius: 30,
      // borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  Title: {
    justifyContent: 'center',
    color: COLORS.black,
    ...FONTS.h2,
    fontWeight: 'bold',
    marginTop: 45,
    marginLeft: 40
    
  },
  namecontainer: {
      flexDirection: 'row',
      width: "100%",
      justifyContent: 'space-between'
  },

 
 
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      // marginLeft: 10,
      alignItems: 'flex-end', 
      marginLeft: 130,
      marginTop: 30

  },

 
  inputTitle: {
    
    ...FONTS.h3,
    fontWeight: 'bold',
    marginTop: SIZES.padding3
  },
  inputSubTitle: {
    
    ...FONTS.h4,
    fontWeight: 'bold',
    marginTop: SIZES.padding3,
    textAlign: 'center'

  },
  input: {
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    borderRadius: 8,
    borderWidth: 1,
    width: "100%",
    height: 50,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2

  },

});
