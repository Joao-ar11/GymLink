import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MontarTreinos from "../../../components/MontarTreinos";
import Montar from "../../../components/Montar";
import ListaExerciciosPersonal from "../../../components/ListaExerciciosPersonal";
import Logo from "../../../components/Header/Logo";

const Stack = createNativeStackNavigator();

export default function TabMontar() {

  return(
    <Stack.Navigator screenOptions={{
      headerTitle: Logo,
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerBackImageSource: require('../../../../assets/voltar.png')
    }}>
      <Stack.Screen name='MontarTreinos' component={MontarTreinos} />
      <Stack.Screen name='Montar' component={Montar} />
      <Stack.Screen name='Lista' component={ListaExerciciosPersonal} />
    </Stack.Navigator>
  );
}