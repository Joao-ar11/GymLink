import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  modal: {
    padding: 15,
    width: 275,
    height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  editar: {
    fontSize: 15,
    marginBottom: 30,
    fontWeight: '700'
  },

  input: {
    width: '100%',
    height: 80,
    borderBottomWidth: 1,
    textAlignVertical: 'bottom'
  },

  containerBotoesModal: {
    marginTop: 'auto',
    overflow: 'hidden',
    width: '100%',
    height: 50,
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  botaoModal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  cancelar: {
    color: '#C6C6C6',
    fontSize: 15,
    fontWeight: '700'
  },

  confirmar: {
    color: '#00899B',
    fontSize: 15,
    fontWeight: '700'
  },
});