import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import { MapStyle} from '../styles'
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';

const MapComponent = () => {
  // const [selectedPlace, setSelectedPlace] = React.useState(null)
  const initialRegion ={ 
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  

  return (
    <View>
                    <MapView
                            style={{
                                width: "100%",
                                height: "80%",
                                marginTop: 100
                                
                            }}
                            customMapStyle={MapStyle}
                            provider={PROVIDER_GOOGLE}
                       
                            initialRegion={initialRegion}
                          >
                            

                          </MapView>
    </View>
  )
}

export default MapComponent

const styles = StyleSheet.create({})