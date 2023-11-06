import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Image } from "react-native";
import Perfil from "../../../components/Perfil";
import Logo from '../../../components/Header/Logo';

const Stack = createNativeStackNavigator();


export default function Usuario({ navigation }) {

  function Opcoes() {
    return (
      <TouchableOpacity style={{
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('../../../../assets/opcao.png')} style={{
          width: 35,
          height: 35
        }}/>
      </TouchableOpacity>
    );
  }

  return(
    <Stack.Navigator screenOptions={{
      headerTitle: Logo,
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerBackImageSource: require('../../../../assets/voltar.png')
    }}>
      <Stack.Screen name='Perfil' component={Perfil} options={{
        headerRight: Opcoes
      }}/>
    </Stack.Navigator>
  )
}