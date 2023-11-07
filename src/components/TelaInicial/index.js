import { useContext } from "react";
import { ScrollView } from "react-native";
import InicioAluno from "./InicioAluno";
import InicioPersonal from './InicioPersonal'
import User from "../User";

export default function TelaInicial({ navigation }) {
  const usuario = useContext(User);
  return (
    <ScrollView contentContainerStyle={{flex: 1, width: '100%', backgroundColor: '#FFFFFF'}}>
      {
        usuario.user?.tipo === 'aluno' ?
        <InicioAluno navigation={navigation}/> :
        <InicioPersonal navigation={navigation}/>
      }
    </ScrollView>
  );
}