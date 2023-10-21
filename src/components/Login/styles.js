import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 70,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },

  logo: {
    width: '60%',
    height: 68
  },

  inputContainer: {
    marginTop: 10,
    marginBottom: 5,
    width: '100%',
    height: 'auto',
    alignItems: 'center'
  },

  input: {
    padding: 10,
    paddingLeft: 35,
    width: '90%',
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
  },

  inputIcon: {
    position: 'absolute',
    left: 25,
    top: 10
  },

  mostrarSenha: {
    position: 'absolute',
    right: 25,
    top: 10
  },

  esqueceuSenha: {
    marginLeft: 'auto',
    marginRight: 30
  },

  botaoLogin: {
    marginTop: 20,
    marginBottom: 15,
    width: '90%',
    height: 45,
    backgroundColor: '#4736C6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textoLogin: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF'
  },

  cadastroContainer: {
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