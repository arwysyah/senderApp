import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Home, Detail} from '../screen/index';

const Stack = createStackNavigator();

const RouteStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={
            ({headerShown: false},
            {
              ...TransitionPresets.SlideFromRightIOS,
              gestureDirection: 'horizontal-inverted',
            })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RouteStack;
