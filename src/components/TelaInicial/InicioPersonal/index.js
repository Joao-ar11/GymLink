import { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles";
import User from "../../User";

export default function InicioPersonal(props) {
  const usuario = useContext(User);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.fotoContainer}>
          <Image style={styles.foto} source={{uri: usuario.user?.foto}}/>
        </View>
        <View style={styles.textoContainer}>
          <Text style={styles.texto}>Bem vindo</Text>
          <Text style={styles.nomeUsuario}>{usuario.user?.nome}</Text>
        </View>
      </View>
      <View style={{...styles.botoesContainer, justifyContent: 'center', gap: 50}}>
        <TouchableOpacity style={styles.botao}><Text style={styles.botaoTexto}>Alunos vinculados</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botao}><Text style={styles.botaoTexto}>Montar treinos</Text></TouchableOpacity>
      </View>
    </View>
  )
}