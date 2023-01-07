import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, WelcomeScreen, Finish, SignUpScreen,AcceptDriver,GetStartScreen,Destination,VehicleDt1Screen, VehicleDt2Screen, DRSignUpScreen, DriverDetails, RoleSelect,OTPScreen, SlScreen,RatingScreen,MyActivity, SetDestiOnMap, NoteToDriver,SelectDriver, PendingDriver} from './screens';
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
              initialRouteName={"Role"}
             >
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        {/* <Stack.Screen name="Role" component={RoleSelect} />
         <Stack.Screen name="SL" component={SlScreen} /> 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="GetStartScreen" component={GetStartScreen} />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Destination" component={Destination} />
           <Stack.Screen name="SetDesM" component={SetDestiOnMap} />
          <Stack.Screen name="SeleDriver" component={SelectDriver} /> 
       
         
          <Stack.Screen name="PendingDriver" component={PendingDriver} /> 
          <Stack.Screen name="AcceptDriver" component={AcceptDriver} />
          <Stack.Screen name="Finish" component={Finish} /> 
          <Stack.Screen name="NoteToDriver" component={NoteToDriver} />
      
           <Stack.Screen name="RatingScreen" component={RatingScreen} />   */}
          {/* <Stack.Screen name="MyActivity" component={MyActivity} />  */}
        
          {/* <Stack.Screen name="DriverDetails" component={DriverDetails} /> */}
          {/* <Stack.Screen name="DRSignUpScreen" component={DRSignUpScreen} /> */}
          {/* <Stack.Screen name="VehicleDt1Screen" component={VehicleDt1Screen} /> */}
          <Stack.Screen name="VehicleDt2Screen" component={VehicleDt2Screen} />
          
        

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})