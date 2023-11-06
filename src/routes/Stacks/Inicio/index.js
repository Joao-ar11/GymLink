import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logo from "../../../components/Header/Logo";
import TelaInicial from "../../../components/TelaInicial";
import Rotinas from "../../../components/Rotinas";

const Stack = createNativeStackNavigator();

export default function Inicio() {
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
        initialParams={{
          tipo: 'aluno'
        }}
      />
      <Stack.Screen name='Historico' component={Rotinas}/>
    </Stack.Navigator>
  );
}