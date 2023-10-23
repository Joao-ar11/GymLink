import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";


export default function CardTreino(props) {
  const icone = props.item.fotoTreino;
  const foto = props.item.fotoInstrutor;

  function selecionarTreino() {
    props.navigation.navigate({
      name: 'Rotinas',
      screen: 'Rotinas',
      params: {
        id: props.item.id
      }
    });
  }
  
  return(
    <TouchableOpacity style={styles.container} onPress={selecionarTreino}>
      <View style={styles.head}>
        <View>
          <Image style={styles.icone} source={{uri: icone}}/>
        </View>
        <Text style={styles.treinoNome}>{props.item.nome}</Text>
        <View style={{width: 30}}/>
      </View>
      <Text style={styles.descricao}>{props.item.descricao}</Text>
      <View style={styles.bottom}>
        <View style={styles.fotoContainer}>
          <Image style={styles.foto} source={{uri:foto}}/>
        </View>
        <View style={styles.nomeContainer}>
          <Text style={styles.nomeInstrutor}>{props.item.instrutor}</Text>
          <Text style={styles.nomeInstrutor}>Instrutor</Text>
        </View>
        <TouchableOpacity style={styles.botao} onPress={selecionarTreino}><Text style={styles.botaoTexto}>Iniciar</Text></TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}