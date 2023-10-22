import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logo from '../../../../components/Header/Logo'
import TreinosMontados from "../../../../components/TreinosMontados";

const Stack = createNativeStackNavigator()

export default function Treinos() {

  return (
      <Stack.Navigator screenOptions={{
        headerTitle: Logo,
        headerTitleAlign: 'center'
      }}>
        <Stack.Screen name='Treinos' component={TreinosMontados}/>
      </Stack.Navigator>
  );
}