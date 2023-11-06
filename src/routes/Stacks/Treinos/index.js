import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logo from '../../../components/Header/Logo'
import TreinosMontados from "../../../components/TreinosMontados";
import Rotinas from "../../../components/Rotinas";
import ExerciciosAluno from "../../../components/ExerciciosAluno";
import TrocaExercicios from "../../../components/TrocaExercicios";

const Stack = createNativeStackNavigator()

export default function Treinos() {

  return (
      <Stack.Navigator screenOptions={{
        headerTitle: Logo,
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerBackImageSource: require('../../../../assets/voltar.png')
      }}>
        <Stack.Screen name='Treinos' component={TreinosMontados}/>
        <Stack.Screen name='Rotinas' component={Rotinas} />
        <Stack.Screen name='ExerciciosAluno' component={ExerciciosAluno}/>
        <Stack.Screen name='TrocaExercicio' component={TrocaExercicios}/>
      </Stack.Navigator>
  );
}