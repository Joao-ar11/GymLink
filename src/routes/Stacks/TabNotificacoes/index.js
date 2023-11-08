import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logo from '../../../components/Header/Logo';
import Notificacoes from "../../../components/Notificacoes";
import VisualizarUsuario from "../../../components/VisualizarUsuario";

const Stack = createNativeStackNavigator()

export default function TabNotificacoes() {

  return (
      <Stack.Navigator screenOptions={{
        headerTitle: Logo,
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerBackImageSource: require('../../../../assets/voltar.png')
      }}>
        <Stack.Screen name='Notificacoes' component={Notificacoes}/>
        <Stack.Screen name='Solicitador' component={VisualizarUsuario} />
      </Stack.Navigator>
  );
}