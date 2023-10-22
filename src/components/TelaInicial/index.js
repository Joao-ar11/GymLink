import { ScrollView } from "react-native";
import InicioAluno from "./InicioAluno";
import InicioPersonal from './InicioPersonal'

export default function TelaInicial({ route, navigation }) {
  return (
    <ScrollView contentContainerStyle={{flex: 1, width: '100%', backgroundColor: '#FFFFFF'}}>
      {
        route.params.tipo === 'aluno' ?
        <InicioAluno /> :
        <InicioPersonal />
      }
    </ScrollView>
  );
}