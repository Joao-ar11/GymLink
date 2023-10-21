import { ScrollView, View, Text } from "react-native";
import FormularioAluno from "./FormularioAluno";
import FormularioPersonal from "./FormularioPersonal";
import styles from "./styles";

export default function Registro({ route, navigation }) {
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Registre-se</Text>
        {route.params.tipo === 'aluno' ?
          <FormularioAluno /> :
          <FormularioPersonal />
        }
      </View>
    </ScrollView>
  );
}