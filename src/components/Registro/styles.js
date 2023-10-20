import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },

  title: {
    marginBottom: 75,
    fontSize: 24,
    fontWeight: '500'
  },

  formulario: {
    flex: 1,
    width: "90%",
    alignItems: "center"
  },

  containerDividido: {
    marginBottom: 5,
    width: "100%",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderRadius: 10
  },

  inputMeio: {
    width: "49%"
  },

  selectContainer: {
    position: 'absolute',
    right: 0,
    top: -5,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    minHeight: 45,
    height: 'auto',
    backgroundColor: '#FFFFFF',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10
  },

  expand: {
    marginLeft: 'auto',
    marginBottom: 'auto',
    width: 25,
    height: 25
  },

  select: {
    width: '100%',
  },

  option: {
    paddingLeft: 10,
    width: '100%',
    height: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center'
  },

  botao: {
    marginTop: 20,
    width: "100%",
    height: 45,
    backgroundColor: "#4736C6",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  botaoTexto: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF"
  },

  textoConta: {
    marginTop: 50,
    fontSize: 14,
    fontWeight: "600",
    color: "#8C8C8C"
  },

  link: {
    color: "#382D85",
    textDecorationLine: "underline"
  }
})