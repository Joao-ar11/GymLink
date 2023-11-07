import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../../../components/Login";
import Registro from "../../../components/Registro";
import SelecaoRegistro from "../../../components/SelecaoRegistro";

const Stack = createNativeStackNavigator()

export default function Cadastro() {

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        headerBackVisible: false,
        headerBackImageSource: require('../../../../assets/voltar.png')
      }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Registro' component={Registro}/>
        <Stack.Screen name='Selecao' component={SelecaoRegistro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}