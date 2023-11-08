import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from "react-native";
import { auth, db, storage } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Timestamp, addDoc, collection, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Erro from '../Erro';
import styles from "../styles";
import User from "../../User";

export default function FormularioAluno(props) {
  const [ nome, setNome ] = useState('');
  const [ data, setData ] = useState('');
  const [ displayData, setDisplaydata ] = useState('');
  const [ peso, setPeso ] = useState('');
  const [ altura, setAltura ] = useState('');
  const [ telefone, setTelefone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ confirmarSenha, setConfirmarSenha ] = useState('');
  const [ erroNome, setErroNome ] = useState('');
  const [ erroData, setErroData ] = useState('');
  const [ erroPeso, setErroPeso ] = useState('');
  const [ erroAltura, setErroAltura ] = useState('');
  const [ erroTelefone, setErroTelefone ] = useState('');
  const [ erroEmail, setErroEmail ] = useState('');
  const [ erroSenha, setErroSenha ] = useState('');
  const [ erroConfirmarSenha, setErroConfirmarSenha ] = useState('');  
  const [ erroFormulario, setErroFormulario ] = useState('');

  const colecao = collection(db, 'users');
  const usuario = useContext(User);
  const imagem = require('../../../../assets/user.png');
  const imagemUri = Image.resolveAssetSource(imagem).uri;

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
    const dataValor = new Date(dataFormatada.split('/').reverse().join('-'));
    setData(dataValor);
  }

  function mudarPeso(input) {
    let inputFiltrado = '';
    if (input.includes('kg') || input.length === 1) {
      inputFiltrado = input.replace(' kg', '');
    } else {
      inputFiltrado = input.slice(0, -3)
    }
    if (inputFiltrado.length > 0) {
      setPeso(inputFiltrado + ' kg');
    } else {
      setPeso('');
    }
  }

  function mudarAltura(input) {
    let inputFiltrado = '';
    if (input.includes('m') || input.length === 1) {
      inputFiltrado = input.replace(' m', '');
    } else {
      inputFiltrado = input.slice(0, -2)
    }
    if (inputFiltrado.length > 0){
      setAltura(inputFiltrado + ' m');
    } else {
      setAltura('');
    }
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
    setConfirmarSenha(input);
  }

  function validarFormulario() {
    let erro;

    if (nome.length < 4) {
      setErroNome('Nome muito pequeno');
      erro = 'Campos preenchidos incorretamente';
    }
    if (altura.length < 1) {
      setErroAltura('Campo vazio');
      erro = 'Campos preenchidos incorretamente';
    }
    if (peso.length < 1) {
      setErroPeso('Campo vazio');
      erro = 'Campos preenchidos incorretamente';
    }
    if (displayData.length < 1) {
      setErroData('Campo vazio');
      erro = 'Campos preenchidos incorretamente';
    }
    if (telefone.length < 1) {
      setErroTelefone('Campo vazio');
      erro = 'Campos preenchidos incorretamente';
    }
    if (email.length < 1) {
      setErroEmail('Campo vazio');
      erro = 'Campos preenchidos incorretamente';
    }
    if (senha.length < 8) {
      setErroSenha('Senha precisa ser maior que 8 caracteres');
      erro = 'Campos preenchidos incorretamente';
    }
    if (senha !== confirmarSenha) {
      setErroConfirmarSenha('Senhas não são iguais');
      erro = 'Campos preenchidos incorretamente';
    }

    if(!erro) {
      enviarFormulario();
    } else {
      setErroFormulario(erro);
    }
  }

  async function enviarFormulario() {
    props.carregar(true);
    createUserWithEmailAndPassword(auth, email, senha)
    .then((Usercredential) => {
      const novoNome = 'usuarios/' + Date.now() + Math.ceil(Math.random() * 1000) + '.png';
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          resolve(xhr.response);
        };
        
        xhr.onerror = function() {
          reject(new Error('uriToBlob failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', imagemUri, true);
        xhr.send(null);
      })
        .then((blob) => uploadBytes(ref(storage, novoNome), blob))
        .then(() => {
          const r = ref(storage, novoNome);
          return getDownloadURL(r)
        })
        .then((linkFoto) => addDoc(colecao, {
          nome,
          altura,
          peso,
          telefone,
          email,
          descricao: '',
          solicitcoes: [],
          tipo: 'aluno',
          foto: linkFoto,
          data: Timestamp.fromDate(data),
          uid : Usercredential.user.uid
        }))
        .catch((error) => new Promise.reject(error));
      }
    )
    .then(doc => getDoc(doc))
    .then(dados => usuario.setUser({...dados.data(), idDocumento: dados.id}))
    .catch((erro) => {
      props.carregar(false);
      setErroFormulario(erro.message);
      if (auth.currentUser) {
        auth.currentUser.delete();
      }
    });
  }

  return (
    <View style={styles.formulario}>
      <TextInput style={styles.input} placeholder='Nome Completo' value={nome} onChangeText={mudarNome} returnKeyType="next" onSubmitEditing={() => {this.input2.focus()}} blurOnSubmit={false}/>
      { erroNome ? <Erro erro={erroNome} /> : <></>}
      <View style={styles.containerDividido}>
        <TextInput selection={{start: altura.length - 2, end: altura.length - 2}} style={ {...styles.input, ...styles.inputMeio }} ref={(input) => {this.input2 = input}} keyboardType="numeric" placeholder="Altura" value={altura} maxLength={6} onChangeText={mudarAltura} returnKeyType="next" onSubmitEditing={() => {this.input3.focus()}} blurOnSubmit={false}/>
        <TextInput selection={{start: peso.length - 3, end: peso.length - 3}} style={ {...styles.input, ...styles.inputMeio }} keyboardType="numeric" placeholder="Peso" value={peso} maxLength={9} onChangeText={mudarPeso} returnKeyType="next" ref={(input) => {this.input3 = input}} onSubmitEditing={() => {this.input4.focus()}} blurOnSubmit={false}/>
      </View>
      <View style={styles.containerDividido}>
        {erroAltura ? <Erro erro={erroAltura} /> : <View/>}
        {erroPeso ? <Erro erro={erroPeso} /> : <View/>}
      </View>
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Data de nascimento" value={displayData} maxLength={10} onChangeText={mudarData} returnKeyType="next" ref={(input) => {this.input4 = input}} onSubmitEditing={() => {this.input5.focus()}} blurOnSubmit={false}/>
      {erroData ? <Erro erro={erroData} /> : <></>}
      <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={mudarTelefone} keyboardType="phone-pad" returnKeyType="next" ref={(input) => {this.input5 = input}} onSubmitEditing={() => {this.input6.focus()}} blurOnSubmit={false}/>
      {erroTelefone ? <Erro erro={erroTelefone} /> : <></>}
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={mudarEmail} keyboardType="email-address" autoCapitalize="none" returnKeyType="next" ref={(input) => {this.input6 = input}} onSubmitEditing={() => {this.input7.focus()}} blurOnSubmit={false}/>
      {erroEmail ? <Erro erro={erroEmail} /> : <></>}
      <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" value={senha} onChangeText={mudarSenha} autoCapitalize="none" returnKeyType="next" ref={(input) => {this.input7 = input}} onSubmitEditing={() => {this.input8.focus()}} blurOnSubmit={false}/>
      {erroSenha ? <Erro erro={erroSenha} /> : <></>}
      <KeyboardAvoidingView style={{width: '100%'}} behavior="padding">
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Confirmar Senha" value={confirmarSenha} onChangeText={mudarConfirmarSenha} autoCapitalize="none" ref={(input) => {this.input8 = input}} onSubmitEditing={validarFormulario}/>
        {erroConfirmarSenha ? <Erro erro={erroConfirmarSenha} ref={(input) => {this.input8= input}}/> : <></>}
      </KeyboardAvoidingView>
      {erroFormulario ? <Erro erro={erroFormulario} /> : <></>}
      <TouchableOpacity style={styles.botao} onPress={validarFormulario}>
        <Text style={styles.botaoTexto}>Registrar</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.textoConta}>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}><Text style={styles.link}>Clique aqui!</Text></TouchableOpacity>
      </View>
    </View>
  );
}