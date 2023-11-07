import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from "react-native";
import { auth, db, storage } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, getDoc, collection, Timestamp } from "firebase/firestore";
import User from '../../User';
import Erro from "../Erro";
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
  const [ erroNome, setErroNome ] = useState('');
  const [ erroData, setErroData ] = useState('');
  const [ erroTelefone, setErroTelefone ] = useState('');
  const [ erroEmail, setErroEmail ] = useState('');
  const [ erroSenha, setErroSenha ] = useState('');
  const [ erroConfirmarSenha, setErroConfirmarSenha ] = useState('');  
  const [ erroFormulario, setErroFormulario ] = useState('');
  const [ erroCref, setErroCref ] = useState('');

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
    setConfirmarSenha(input);
  }

  function validarFormulario() {
    let erro;

    if (nome.length < 4) {
      setErroNome('Nome muito pequeno');
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
    if (cref.length < 1) {
      setErroCref('Campo vazio');
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
          cref,
          telefone,
          email,
          descricao: '',
          vinculos: [],
          tipo: 'personal',
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
      <TextInput style={styles.input} placeholder='Nome Completo' value={nome} onChangeText={mudarNome} returnKeyType="next" onSubmitEditing={() => this.input2.focus()} blurOnSubmit={false}/>
      { erroNome ? <Erro erro={erroNome} /> : <></>}
      <View style={styles.containerDividido}>
        <TextInput style={ {...styles.input, ...styles.inputMeio }} keyboardType="numeric" placeholder="Data de nascimento" value={displayData} maxLength={10} onChangeText={mudarData} returnKeyType="next" ref={(input) => this.input2 = input} onSubmitEditing={() => this.input3.focus()} blurOnSubmit={false}/>
        <TextInput style={{ ...styles.input, ...styles.inputMeio }} placeholder='CREF' value={cref} onChangeText={mudarCref} returnKeyType="next" ref={(input) => this.input3 = input} onSubmitEditing={() => this.input4.focus()} blurOnSubmit={false}/>
      </View>
      <View style={styles.containerDividido}>
        {erroData ? <Erro erro={erroData} /> : <View/>}
        {erroCref ? <Erro erro={erroCref} /> : <View/>}
      </View>
      <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={mudarTelefone} returnKeyType="next" ref={(input) => this.input4 = input} onSubmitEditing={() => this.input5.focus()} blurOnSubmit={false}/>
      {erroTelefone ? <Erro erro={erroTelefone} /> : <></>}
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={mudarEmail} returnKeyType="next" ref={(input) => {this.input5 = input}} onSubmitEditing={() => this.input6.focus()} blurOnSubmit={false}/>
      {erroEmail ? <Erro erro={erroEmail} /> : <></>}
      <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" value={senha} onChangeText={mudarSenha} returnKeyType="next" ref={(input) => this.input6 = input} onSubmitEditing={() => this.input7.focus()} blurOnSubmit={false}/>
      {erroSenha ? <Erro erro={erroSenha} /> : <></>}
      <KeyboardAvoidingView style={{width: '100%'}}behavior="padding">
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Confirmar Senha" value={confirmarSenha} onChangeText={mudarConfirmarSenha} ref={(input) => this.input7 = input} onSubmitEditing={validarFormulario}/>
        {erroConfirmarSenha ? <Erro erro={erroConfirmarSenha} /> : <></>}
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