import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import styles from "./styles";

export default function FormularioAluno() {
  const [ nome, setNome ] = useState('');
  const [ sobreNome, setSobreNome ] = useState('');
  const [ data, setData ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ confirmarSenha, setConfirmarSenha ] = useState('');

  function mudarNome(e) {
    setNome(e.target.value);
  }

  function mudarSobreNome(e) {
    setSobreNome(e.target.value);
  }

  function mudarData(e) {
    setData(e.target.value);
  }

  function mudarEmail(e) {
    setEmail(e.target.value);
  }

  function mudarSenha(e) {
    setSenha(e.target.value);
  }

  function mudarConfirmarSenha(e) {
    setConfirmarSenha(e.target.value);
  }

  return (<KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.nomeContainer}>
        <TextInput style={{ ...styles.input, ...styles.inputNome }} placeholder='Nome' value={nome} onChange={mudarNome}/>
        <TextInput style={{ ...styles.input, ...styles.inputSobreNome }} placeholder='Sobrenome' value={sobreNome} onChange={mudarSobreNome}/>
      </View>
      <TextInput style={styles.input} placeholder="Data de nascimento" value={data} onChange={mudarData}/>
      <TextInput style={styles.input} placeholder="Email" value={email} onChange={mudarEmail}/>
      <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" value={senha} onChange={mudarSenha}/>
      <TextInput style={styles.input} secureTextEntry={true} placeholder="Confirmar Senha" value={confirmarSenha} onChange={mudarConfirmarSenha}/>

    <TouchableOpacity style={styles.botao}>
      <Text style={styles.botaoTexto}>Registrar</Text>
    </TouchableOpacity>
    <Text style={styles.textoLogin}>Já possui uma conta? <Text style={styles.linkLogin}>Clique aqui!</Text></Text>
  </KeyboardAvoidingView>);
}