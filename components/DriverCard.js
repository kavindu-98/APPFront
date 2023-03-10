
import React from 'react'
import {
    View,  
    Text,
    ImageBackground,
    Image,
    ScrollView,
    Button,
    // Section,
    FlatList,
    StyleSheet,
    Dimensions,
} from 'react-native';

import{
    COLORS,
    FONTS,
    SIZES,
    icons,
    images,
    dummyData

} from "../constants";
const {width, height} = Dimensions.get("window");

const DriverCard = ({ImageUri}) => {

        return (
            <View style={{ 
                height: 125, 
                width: width* 0.9, 
                marginLeft:20,
                marginTop: 15,
                borderColor:  COLORS.black,
                borderWidth: 1,
                borderRadius: 10,
                shadowColor: COLORS.black,
                flexDirection: 'row'
             
              
                     }}>
            
                    <View style={{ flexDirection: 'column'
                        
                    }}>
                    <View style={styles.Circle}>
                        <Image source={ImageUri} style={styles.profileimage} resizeMode="center"
                        />
                    </View>

                    <View style={styles.Rating}>
                            <Image source={require('../assets/images/Star.png')} style={styles.profileimage} resizeMode="center"
                                />
                                <Text style={{
                                    marginTop: 22,
                                    marginLeft: -15,
                                    ...FONTS.h2,
                                    

                                }}>4.5</Text>
                    </View>

                    </View>
        <View >
                    <Text style={{
                        ...FONTS.h2,
                        marginLeft: 60,
                        marginTop: 20,
                        color:COLORS.black,
                       
                    }}>
                    Lalith Perera
                    </Text>
                    <Text
                    style={{
                        ...FONTS.h3,
                        marginLeft: 60,
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
                        marginLeft: 56,
                        marginTop: 10
                        // tintColor: COLORS.red1Font,
                        
                    }}
                />
                    <Text
                    style={{
                        ...FONTS.h3,
                        marginLeft: 100,
                        marginTop:-25
                       
                    }}
                    >
                  20 Seats Available
                    </Text>


                 
        </View>
        <View>
        <Image
                    source={require('../assets/icons/right_arrow.png')}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        marginLeft: 5,
                        marginTop: 45,
                        tintColor: COLORS.gray30,
                        
                    }}
                />
        </View>
        </View>
        )
    }

export default DriverCard;

const styles = StyleSheet.create({

profileimage: {
    width: 70,
    height: 70,
    borderRadius: 1300,
    // overflow: "hidden",
    
  
  },
  Circle:{
    width: 60,
    height: 60,
    borderRadius: 50,
marginLeft: 10,
marginTop:10
   
    

    // overflow: "hidden",

  },
  Rating: {
    flexDirection: 'row',
    marginTop: -5,
    marginLeft: -5
    
  }


})