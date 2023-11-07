import { useState } from "react";
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import FormularioAluno from "./FormularioAluno";
import FormularioPersonal from "./FormularioPersonal";
import styles from "./styles";

export default function Registro({ route, navigation }) {
  const [ carregando, setCarregando ] = useState(false);

  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}} keyboardShouldPersistTaps={'never'}>
      <View style={styles.container}>
      <TouchableOpacity style={{ position: 'absolute', top: 30, left: 10, width: 30, height: 30 }} onPress={() => navigation.pop()}>
        <Image source={require('../../../assets/voltar.png')} style={{ width: 30, height: 30}}/>
      </TouchableOpacity>
        <Text style={styles.title}>Registre-se</Text>
        {route.params.tipo === 'aluno' ?
          <FormularioAluno navigation={navigation} carregar={setCarregando}/> :
          <FormularioPersonal navigation={navigation} carregar={setCarregando}/>
        }
        {carregando ? <ActivityIndicator size='large' color='#4736C6' style={styles.carregando} animating={carregando}/> : <></>}
      </View>
    </ScrollView>
  );
}