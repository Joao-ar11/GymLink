import { ScrollView, View } from "react-native";
import PerfilAluno from "./PerfilAluno";
import PerfilPersonal from "./PerfilPersonal";
import User from "../User";
import { useContext } from "react";

export default function Perfil() {
  const usuario = useContext(User);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF'}}>
      {usuario.user.tipo === 'aluno' ?
        <PerfilAluno />
        :
        <PerfilPersonal />
      }
    </View>
  );
}