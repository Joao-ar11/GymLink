import { View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function NavBar({ navigation }) {
  return(
    <View style={styles.barra}>
      <View>
        <TouchableOpacity>
          <Image style={styles.icone} source={require('../../../assets/home.png')}/>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Image style={styles.icone} source={require('../../../assets/dumbbell.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.botaoPrincipal}>
        <TouchableOpacity>
          <Image style={styles.iconePrincipal} source={require('../../../assets/botaoLogo.png')}/>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Image style={styles.icone} source={require('../../../assets/treinador-pessoal.png')}/>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Image style={styles.icone} source={require('../../../assets/perfil.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}