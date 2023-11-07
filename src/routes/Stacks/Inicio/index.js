import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logo from "../../../components/Header/Logo";
import TelaInicial from "../../../components/TelaInicial";
import Rotinas from "../../../components/Rotinas";
import User from "../../../components/User";

const Stack = createNativeStackNavigator();

export default function Inicio() {
  const usuario = useContext(User);

  return (
    <Stack.Navigator screenOptions={{
      headerTitle: Logo,
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerBackImageSource: require('../../../../assets/voltar.png')
    }}>
      <Stack.Screen 
        name='TelaInicial'
        component={TelaInicial}
      />
      <Stack.Screen name='Historico' component={Rotinas}/>
    </Stack.Navigator>
  );
}