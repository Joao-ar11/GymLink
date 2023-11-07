import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../../../components/Header/Logo';
import ListaVinculos from '../../../components/ListaVinculos';
import VisualizarUsuario from '../../../components/VisualizarUsuario'
import Pesquisa from '../../../components/Pesquisa';

const Stack = createNativeStackNavigator();

export default function Vinculos() {

  return(
    <Stack.Navigator screenOptions={{
      headerTitle: Logo,
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerBackImageSource: require('../../../../assets/voltar.png'),
    }}>
      <Stack.Screen name='ListaVinculos' component={ListaVinculos}/>
      <Stack.Screen name='Pesquisa' component={Pesquisa}/>
      <Stack.Screen name='VisualizarUsuario' component={VisualizarUsuario}/>
    </Stack.Navigator>
  );
}