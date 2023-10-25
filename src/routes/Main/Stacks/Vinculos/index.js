import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../../../../components/Header/Logo';
import ListaVinculos from '../../../../components/ListaVinculos';

const Stack = createNativeStackNavigator();

export default function Vinculos() {

  return(
    <Stack.Navigator screenOptions={{
      headerTitle: Logo,
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerBackImageSource: require('../../../../../assets/voltar.png')
    }}>
      <Stack.Screen name='ListaVinculos' component={ListaVinculos}/>
    </Stack.Navigator>
  );
}