import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function CardRotina(props) {

  function selecionarRotina() {
    props.navigation.navigate({
      name: 'ExerciciosAluno',
      screen: 'ExerciciosAluno',
      params: {
        id: props.item.id
      }
    });
  }

  return (
    <TouchableOpacity onPress={selecionarRotina} style={styles.container}>
      <View>
        <Image style={styles.foto} source={require('../../../../assets/dumbbell.png')}/>
      </View>
      <View style={styles.textoContainer}>
        <Text style={styles.instrutor}>{props.item.nomeP}</Text>
        <Text style={styles.data}>{props.item.data.toDate().toLocaleString('pt-BR')}</Text>
      </View>
      <TouchableOpacity style={styles.menuContainer}>
        <Image style={styles.menuFoto} source={require('../../../../assets/pontos-verticais.png')}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}