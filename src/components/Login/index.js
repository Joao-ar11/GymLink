import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import styles from "./styles";

export default function Login() {
  const [ mostrarSenha, setMostrarSenha ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');

  return(
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/GymLinkNomeELogo.png')}/>
      <View style={{width: '100%', marginTop: 150}}>
        <View style={styles.inputContainer}>
          <Image source={require('../../../assets/account.png')} style={styles.inputIcon}/>
          <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input}/>
        </View>
        <KeyboardAvoidingView style={styles.inputContainer} behavior="padding">
          <Image source={require('../../../assets/lock.png')} style={styles.inputIcon}/>
          <TextInput secureTextEntry={mostrarSenha} placeholder="Senha" value={senha} onChangeText={setSenha} style={styles.input}/>
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)} style={styles.mostrarSenha}>{ mostrarSenha ? 
            <Image source={require('../../../assets/eye-outline.png')}/> :
            <Image source={require('../../../assets/eye-off-outline.png')}/>
          }</TouchableOpacity>
        </KeyboardAvoidingView> 
      </View>
      <TouchableOpacity style={styles.esqueceuSenha}><Text>Esqueceu a senha?</Text></TouchableOpacity>
      <TouchableOpacity style={styles.botaoLogin}><Text style={styles.textoLogin}>Login</Text></TouchableOpacity>
      <View style={styles.cadastroContainer}>
        <Text style={styles.textoConta}>Não possui uma conta?</Text>
        <TouchableOpacity><Text style={styles.link}>Cadastre-se!</Text></TouchableOpacity>
      </View>
    </View>
  )
}