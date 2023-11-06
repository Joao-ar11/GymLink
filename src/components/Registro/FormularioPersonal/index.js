import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import styles from '../styles';

export default function FormularioPersonal(props) {
  const [ nome, setNome ] = useState('');
  const [ data, setData ] = useState('');
  const [ displayData, setDisplaydata ] = useState('');
  const [ cref, setCref ] = useState('');
  const [ telefone, setTelefone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ confirmarSenha, setConfirmarSenha ] = useState('');

  function mudarNome(input) {
    setNome(input);
  }

  function mudarData(input) {
    const inputFiltrado = input.replaceAll('/', '');
    let dataFormatada = '';
    if (inputFiltrado.length > 2) {
      dataFormatada += inputFiltrado.slice(0, 2) + '/' + inputFiltrado.slice(2, 4);
    } else {
      dataFormatada += inputFiltrado;
    }

    if (inputFiltrado.length > 4) {
      dataFormatada += '/' + inputFiltrado.slice(4);
    }

    setDisplaydata(dataFormatada);
    const dataValor = dataFormatada.split('/').reverse().join('-');
    setData(new Date(dataValor));
  }

  function mudarCref(input) {
    setCref(input);
  }

  function mudarTelefone(input) {
    setTelefone(input);
  }

  function mudarEmail(input) {
    setEmail(input);
  }

  function mudarSenha(input) {
    setSenha(input);
  }

  function mudarConfirmarSenha(input) {
    {setConfirmarSenha(input);}
  }

  return (
    <View style={styles.formulario}>
      <TextInput style={styles.input} placeholder='Nome Completo' value={nome} onChangeText={mudarNome}/>
      <View style={styles.containerDividido}>
        <TextInput style={ {...styles.input, ...styles.inputMeio }} keyboardType="numeric" placeholder="Data de nascimento" value={displayData} maxLength={10} onChangeText={mudarData}/>
        <TextInput style={{ ...styles.input, ...styles.inputMeio }} placeholder='CREF' value={cref} onChangeText={mudarCref}/>
      </View>
      <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={mudarTelefone}/>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={mudarEmail}/>
      <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" value={senha} onChangeText={mudarSenha}/>
      <KeyboardAvoidingView style={{width: '100%'}}behavior="padding">
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Confirmar Senha" value={confirmarSenha} onChangeText={mudarConfirmarSenha}/>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Registrar</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.textoConta}>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}><Text style={styles.link}>Clique aqui!</Text></TouchableOpacity>
      </View>
    </View>
  );
}