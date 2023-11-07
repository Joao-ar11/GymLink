import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },

  titulo: {
    marginTop: 30,
    marginBottom: 100,
    fontSize: 24,
    fontWeight: '500'
  },

  botao: {
    marginVertical: 10,
    padding: 10,
    width: '90%',
    height: 70,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#4736C6',
    flexDirection: 'row',
    alignItems: 'center'
  },

  containerImagem: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },

  imagemBotao: {
    width: 50,
    height: 50
  },

  textoBotao: {
    marginLeft: 30,
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '700'
  },

  loginContainer: {
    marginTop: 'auto',
    marginBottom: 30,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },

  textoConta: {
    fontSize: 14,
    fontWeight: '400',
  },

  link: {
    fontSize: 16,
    fontWeight: '900',
    color: "#382D85",
    textDecorationLine: "underline"
  }
});