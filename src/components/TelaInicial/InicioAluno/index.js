import { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles";
import User from '../../User';

export default function InicioAluno(props) {
  const usuario = useContext(User)

  function irParaPersonais() {
    props.navigation.navigate('TabVinculos');
  }

  function irParaTreinos() {
    props.navigation.navigate('TabTreinos');
  }

  function irParaHistorico() {
    props.navigation.navigate('Historico')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.fotoContainer}>
          <Image style={styles.foto} source={{ uri: usuario.user.foto }}/>
        </View>
        <View style={styles.textoContainer}>
          <Text style={styles.texto}>Bem vindo</Text>
          <Text style={styles.nomeUsuario}>{usuario.user.nome}</Text>
        </View>
      </View>
      <View style={styles.botoesContainer}>
        <TouchableOpacity onPress={irParaHistorico} style={styles.botao}><Text style={styles.botaoTexto}>Histórico de treinos</Text></TouchableOpacity>
        <TouchableOpacity onPress={irParaPersonais} style={styles.botao}><Text style={styles.botaoTexto}>Personais vinculados</Text></TouchableOpacity>
        <TouchableOpacity onPress={irParaTreinos}  style={styles.botao}><Text style={styles.botaoTexto}>Treinos montados</Text></TouchableOpacity>
      </View>
    </View>
  )
}