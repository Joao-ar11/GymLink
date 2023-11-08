import { View, TouchableOpacity, Image, Keyboard, Text } from "react-native";
import styles from "./styles";
import { useEffect, useState, useContext } from "react";
import User from "../User";

export default function NavBar({ navigation }) {
  const [ visivel, setVisivel ] = useState(true);
  const usuario = useContext(User);
  const tipo = usuario.user.tipo === 'aluno' ? 'TabTreinos' : 'TabMontar';
  
  let numero = 0;
  
  usuario.notificacoes.forEach(element => {
    if (!element.visualizado) {
      numero += 1;
    }
  });

  const [ notificacoes, setNotificacoes ] = useState(numero);


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
      <TouchableOpacity style={styles.botao} onPress={() => {setNotificacoes(0); navigation.navigate('TabNotificacoes')}}>
        <Image style={styles.icone} source={require('../../../assets/bell.png')}/>
        {notificacoes > 0 ? <View style={styles.notificacao}><Text style={styles.notificacaoNumero}>{notificacoes}</Text></View> : <></>}
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(tipo)}>
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