import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignItems: 'center'
  },

  nomeContainer: {
    marginBottom: 5,
    width: '100%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderRadius: 10
  },

  inputNome: {
    width: '35%'
  },

  inputSobreNome: {
    width: '60%'
  },

  botao: {
    marginTop: 20,
    width: '100%',
    height: 45,
    backgroundColor: "#4736C6",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  botaoTexto: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF'
  },

  textoLogin: {
    marginTop: 50,
    fontSize: 14,
    fontWeight: '600',
    color: '#8C8C8C'
  },

  linkLogin: {
    color: '#382D85',
    textDecorationLine: 'underline'
  }
});