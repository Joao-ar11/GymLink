import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function SelecaoRegistro({ navigation }) {

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Que tipo de usuário você é?</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Registro', {
        tipo: 'aluno'
      })}>
        <View style={styles.containerImagem}>
          <Image style={styles.imagemBotao} source={require('../../../assets/aluno.png')}/>
        </View>
        <Text style={styles.textoBotao}>Aluno</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Registro', {
        tipo: 'personal'
      })}>
        <View style={styles.containerImagem}>
          <Image style={styles.imagemBotao} source={require('../../../assets/treinador-pessoal.png')}/>
        </View>
        <Text style={styles.textoBotao}>Personal</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.textoConta}>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.link}>Clique aqui!</Text></TouchableOpacity>
      </View>
    </View>
  );
}