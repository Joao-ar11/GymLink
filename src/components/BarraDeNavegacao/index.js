import { View, TouchableOpacity, Image, Keyboard } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";

export default function NavBar({ navigation }) {
  const [ visivel, setVisivel ] = useState(true);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setVisivel(false);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setVisivel(true);
    });

    return () => {
        showSubscription.remove();
        hideSubscription.remove();
    };
  }, [])

  return(
    <>
    { visivel ? <View style={styles.barra}>
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
    :
    <></>
    }
    </>
  );
}