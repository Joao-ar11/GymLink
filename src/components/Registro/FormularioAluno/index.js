import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Image, Pressable } from "react-native";
import styles from "../styles";

export default function FormularioAluno() {
  const [ nome, setNome ] = useState('');
  const [ sobreNome, setSobreNome ] = useState('');
  const [ data, setData ] = useState('');
  const [ displayData, setDisplaydata ] = useState('');
  const [ peso, setPeso ] = useState('');
  const [ altura, setAltura ] = useState('');
  const [ fisico, setFisico ] = useState('Tipo físico');
  const [ modal, setModal ] = useState(false);
  const [ telefone, setTelefone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ confirmarSenha, setConfirmarSenha ] = useState('');

  function mudarNome(input) {
    setNome(input);
  }

  function mudarSobreNome(input) {
    setSobreNome(input);
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

  function abrirModal() {
    setModal(!modal);
  }

  function mudarFisico(novoFisico) {
    setFisico(novoFisico);
    setModal(false);
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
      <View style={styles.containerDividido}>
        <TextInput style={{ ...styles.input, ...styles.inputMeio }} placeholder='Nome' value={nome} onChangeText={mudarNome}/>
        <TextInput style={{ ...styles.input, ...styles.inputMeio }} placeholder='Sobrenome' value={sobreNome} onChangeText={mudarSobreNome}/>
      </View>
      <View style={styles.containerDividido}>
        <TextInput style={ {...styles.input, ...styles.inputMeio }} keyboardType="numeric" placeholder="Data de nascimento" value={displayData} maxLength={10} onChangeText={mudarData}/>
        <TextInput selection={{start: peso.length - 3, end: peso.length - 3}} style={ {...styles.input, ...styles.inputMeio }} keyboardType="numeric" placeholder="Peso" value={peso} maxLength={9} onChangeText={mudarPeso}/>
      </View>
      <View style={styles.containerDividido}>
        <TextInput selection={{start: altura.length - 2, end: altura.length - 2}} style={ {...styles.input, ...styles.inputMeio }} keyboardType="numeric" placeholder="Altura" value={altura} maxLength={6} onChangeText={mudarAltura}/>
        <Pressable style={{ ...styles.input, ...styles.inputMeio, ...styles.selectContainer}}  onPress={abrirModal}>
          { modal ? <View style={styles.select}>
            <Text style={{ color: '#8C8C8C', maxWidth: 100, paddingLeft: 10 }}>Escolha um tipo físico:</Text>
            <TouchableOpacity style={styles.option} onPress={() => mudarFisico('Abaixo do peso')}><Text>Abaixo do peso</Text></TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => mudarFisico('Saudável')}><Text>Saudável</Text></TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => mudarFisico('Acima do peso')}><Text>Acima do peso</Text></TouchableOpacity>
            <TouchableOpacity style={{...styles.option, borderBottomLeftRadius: 10, borderBottomEndRadius: 10}} onPress={() => mudarFisico('Obeso')}><Text>Obeso</Text></TouchableOpacity>
          </View> : <Text style={{ marginBottom: 'auto', paddingLeft: 10}}>{fisico}</Text>}
          <TouchableOpacity style={styles.expand} onPress={abrirModal}>
            <Image source={ require('../../../../assets/expand.png') }/>
          </TouchableOpacity>
        </Pressable>
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
      <Text style={styles.textoConta}>Já possui uma conta? <Text style={styles.link}>Clique aqui!</Text></Text>
    </View>
  );
}