import { View, Text } from "react-native";
import FormularioAluno from "./FormularioAluno";
import FormularioPersonal from "./FormularioPersonal";
import styles from "./styles";

export default function Registro(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registre-se</Text>
      {props.tipo === 'aluno' ?
        <FormularioAluno /> :
        <FormularioPersonal />
      }
    </View>
  );
}