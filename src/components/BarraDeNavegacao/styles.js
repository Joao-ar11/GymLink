import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

  barra: {
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    elevation: 15,
    backgroundColor : "#FFFFFF",
    zIndex: 20
  },

  botao: {
    flex: 1,
    alignItems: 'center'
  },

  icone: {
    width: 25,
    height: 25
  },

  iconePrincipal: {
    width: 50,
    height: 50
  },

  botaoPrincipal: {
    position: "relative",
    top: -15,
    height: 60,
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    borderRadius: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    elevation: 15,
    backgroundColor : "#FFFFFF"
  },

  notificacao: {
    position: 'absolute',
    width: 18,
    height: 18,
    top: -10,
    right: 15,
    backgroundColor: 'red',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },

  notificacaoNumero: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700'
  }
});