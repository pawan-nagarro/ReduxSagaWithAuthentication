import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';

const stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Home" component={HomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
