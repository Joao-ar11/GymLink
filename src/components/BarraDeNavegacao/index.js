import { View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function NavBar({ navigation }) {
  return(
    <View style={styles.barra}>
      <TouchableOpacity style={styles.botao}>
        <Image style={styles.icone} source={require('../../../assets/bell.png')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('TabTreinos')}>
        <Image style={styles.icone} source={require('../../../assets/dumbbell.png')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoPrincipal} onPress={() => navigation.navigate('Inicio')}>
        <Image style={styles.iconePrincipal} source={require('../../../assets/botaoLogo.png')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('TabVinculos')}>
        <Image style={styles.icone} source={require('../../../assets/treinador-pessoal.png')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('TabUsuario')}>
        <Image style={styles.icone} source={require('../../../assets/perfil.png')}/>
      </TouchableOpacity>
    </View>
  );
}