
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Catagory from './screens/Catagory';
import Catagories from './screens/Catagories';
const Stack = createStackNavigator();
export default class StackNavigation extends React.Component {
  render() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Catagories} 
          options={{ title: 'Home Page' }}/>
          <Stack.Screen name="Catagory" component={Catagory}
           options={({ route }) => ({ title: route.params.catagoryName })} />
        </Stack.Navigator>

    )
  }
}





