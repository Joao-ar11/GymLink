import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../../../components/Login";
import Registro from "../../../components/Registro";

const Stack = createNativeStackNavigator()

export default function Cadastro() {

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        headerBackVisible: false
      }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen
          name='Registro'
          component={Registro}
          initialParams={{ tipo: 'aluno' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}