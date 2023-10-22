import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";


export default function CardTreino(props) {
  const icone = props.item.fotoTreino;
  const foto = props.item.fotoInstrutor;
  
  return(
    <TouchableOpacity style={styles.container}>
      <View style={styles.head}>
        <View style={styles.iconeContainer}>
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
        <TouchableOpacity style={styles.botao}><Text style={styles.botaoTexto}>Iniciar</Text></TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}