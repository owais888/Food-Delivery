import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Honey from '../screens/Honey'
import Fish from '../screens/Fish'
import Steak from '../screens/Steak'
import Pasta from '../screens/Pasta'
import Sendwich from '../screens/Sendwich'
import Firehouse from '../screens/Firehouse'
import Biryani from '../screens/Biryani'
import Gigantic from '../screens/Gigantic'
import Twister from '../screens/Twister'

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown:false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Honey" component={Honey}/>
            <Stack.Screen name="Fish" component={Fish}/>
            <Stack.Screen name="Steak" component={Steak}/>
            <Stack.Screen name="Pasta" component={Pasta}/>
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Sendwich" component={Sendwich}/>
            <Stack.Screen name="Firehouse" component={Firehouse}/>
            <Stack.Screen name="Biryani" component={Biryani}/>
            <Stack.Screen name="Gigantic" component={Gigantic}/>
            <Stack.Screen name="Twister" component={Twister}/>

            
        </Stack.Navigator>
    )
}
export default HomeStackNavigator;
