import { useState } from "react";
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import FormularioAluno from "./FormularioAluno";
import FormularioPersonal from "./FormularioPersonal";
import styles from "./styles";

export default function Registro({ route, navigation }) {
  const [ carregando, setCarregando ] = useState(false)

  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}} keyboardShouldPersistTaps={'never'}>
      <View style={styles.container}>
        <Text style={styles.title}>Registre-se</Text>
        {route.params.tipo === 'aluno' ?
          <FormularioAluno navigation={navigation} carregar={setCarregando}/> :
          <FormularioPersonal navigation={navigation} carregar={setCarregando}/>
        }
        <ActivityIndicator size='large' color='#4736C6' style={styles.carregando} animating={carregando}/>
      </View>
    </ScrollView>
  );
}