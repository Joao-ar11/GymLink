import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";


export default function CardTreino(props) {

  function selecionarTreino() {
    props.navigation.navigate({
      name: 'Montar',
      screen: 'Montar',
      params: {
        id: props.item.uid,
        nome: props.item.nome
      }
    });
  }
  
  return(
    <TouchableOpacity style={styles.container} onPress={selecionarTreino}>
      <View style={styles.head}>
        <View>
          <Image style={styles.icone} source={require('../../../../assets/dumbbell.png')}/>
        </View>
        <Text style={styles.treinoNome}>{props.item.nome}</Text>
        <View style={{width: 30}}/>
      </View>
      <View style={styles.bottom}>
        <View style={styles.fotoContainer}>
          <Image style={styles.foto} source={{uri: props.item.foto}}/>
        </View>
        <View style={styles.nomeContainer}>
          <Text style={styles.nomeInstrutor}>{props.item.nome}</Text>
          <Text style={styles.nomeInstrutor}>Aluno</Text>
        </View>
        <TouchableOpacity style={styles.botao} onPress={selecionarTreino}><Text style={styles.botaoTexto}>Iniciar</Text></TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}