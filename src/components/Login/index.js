import { useContext, useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import { auth, db } from '../../firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, where, collection, query } from "firebase/firestore";
import User from "../User";
import Erro from "../Registro/Erro";
import styles from "./styles";


export default function Login({ navigation }) {
  const [ ocultarSenha, setOcultarSenha ] = useState(true);
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ erro, setErro ] = useState('');
  const [ carregando, setCarregando ] = useState(false);
  const caminhoDb = collection(db, 'users');
  const usuario = useContext(User);

  function logar() {
    setCarregando(true);
    signInWithEmailAndPassword(auth, email, senha)
    .then((UserCredential) => 
      {
        const q = query(caminhoDb, where('uid', '==', UserCredential.user.uid));
        return getDocs(q);
      }
    )
    .then((resultados) => {
      resultados.forEach(doc => {
        usuario.setUser({...doc.data(), idDocumento: doc.id})
      })
    })
    .catch(() => {
      setErro('Email ou senhas inválidos');
      setCarregando(false);
    })
  }


  return(
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='never'>
      <Image style={styles.logo} source={require('../../../assets/GymLinkNomeELogo.png')}/>
      <KeyboardAvoidingView style={{width: '100%', marginTop: 150}} behavior="padding">
        <View style={styles.inputContainer}>
          <Image source={require('../../../assets/account.png')} style={styles.inputIcon}/>
          <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} autoCapitalize="none" keyboardType="email-address" returnKeyType="next" onSubmitEditing={() => {this.input2.focus()}} blurOnSubmit={false}/>
        </View>
        <View style={styles.inputContainer} behavior="padding">
          <Image source={require('../../../assets/lock.png')} style={styles.inputIcon}/>
          <TextInput ref={(input) => {this.input2 = input}} secureTextEntry={ocultarSenha} placeholder="Senha" value={senha} onChangeText={setSenha} style={styles.input} autoCapitalize="none" onSubmitEditing={logar}/>
          <TouchableOpacity onPress={() => setOcultarSenha(!ocultarSenha)} style={styles.mostrarSenha}>{ ocultarSenha ? 
            <Image source={require('../../../assets/eye-off-outline.png')}/> :
            <Image source={require('../../../assets/eye-outline.png')}/> 
          }</TouchableOpacity>
        </View> 
      </KeyboardAvoidingView>
      {erro ? <Erro erro={erro}/> : <></>}
      <TouchableOpacity style={styles.esqueceuSenha}><Text>Esqueceu a senha?</Text></TouchableOpacity>
      <TouchableOpacity style={styles.botaoLogin} onPress={logar}><Text style={styles.textoLogin}>Login</Text></TouchableOpacity>
      <View style={styles.cadastroContainer}>
        <Text style={styles.textoConta}>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Selecao')}><Text style={styles.link}>Cadastre-se!</Text></TouchableOpacity>
      </View>
      <ActivityIndicator animating={carregando} style={styles.carregando} color='#4736C6' size='large'/>
    </ScrollView>
  )
}