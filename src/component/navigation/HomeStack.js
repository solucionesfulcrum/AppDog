import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Principal from '../../screens/main/Principal'


const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Principal"
      >
      <Stack.Screen
        name="Principal"
        component={Principal}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
