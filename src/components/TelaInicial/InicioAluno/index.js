import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles";

export default function InicioAluno() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.fotoContainer}>
          <Image style={styles.foto} source={require('../../../../assets/user.png')}/>
        </View>
        <View style={styles.textoContainer}>
          <Text style={styles.texto}>Bem vindo</Text>
          <Text style={styles.nomeUsuario}>Usuario</Text>
        </View>
      </View>
      <View style={styles.graficoContainer}>
        <Image style={styles.grafico} source={require('../../../../assets/grafico.jpg')}/>
      </View>
      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botao}><Text style={styles.botaoTexto}>Histórico de treino</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botao}><Text style={styles.botaoTexto}>Personais vinculados</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botao}><Text style={styles.botaoTexto}>Treinos montados</Text></TouchableOpacity>
      </View>
    </View>
  )
}