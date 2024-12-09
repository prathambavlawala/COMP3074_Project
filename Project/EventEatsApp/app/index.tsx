import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import MenuScreen from "./MenuScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
