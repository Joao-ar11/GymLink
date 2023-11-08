import { useContext } from "react";
import { View } from "react-native";
import ListaPersonais from "./ListaPersonais";
import ListaAlunos from "./ListaAlunos";
import User from "../User";

export default function ListaVinculos({ navigation }) {
  const usuario = useContext(User);

  return (
    <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 20, width: '100%', backgroundColor: '#FFFFFF', alignItems: 'center' }}>
      { usuario.user.tipo === 'aluno' ? 
        <ListaPersonais navigation={navigation} />
        :
        <ListaAlunos navigation={navigation} />
      }
    </View>
  );
}