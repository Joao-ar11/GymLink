import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  containerDenuncia: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalDenuncia: {
    width: 300,
    height: 226,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center'
  },

  tituloDenuncia: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 15,
    fontWeight: '700'
  },

  legendDenuncia: {
    marginLeft: 15,
    alignSelf: 'flex-start',
    fontSize: 15,
    fontWeight: '500'
  },

  containerCheckDenuncia: {
    width: '90%',
  },

  containerMotivo: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },

  checkDenuncia: {
    width: 13,
    height: 13,
    borderWidth: 1,
    borderColor: '#000000'
  },

  checkImagem: {
    position: 'absolute',
    top: -2,
    left: -1,
    width: 13,
    height: 15
  },

  textoMotivo: {
    fontSize: 11,
    fontWeight: '400'
  },

  containerBotoesDenuncia: {
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

  botaoDenuncia: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  textoCancelar: {
    color: '#C6C6C6',
    fontSize: 15,
    fontWeight: '700'
  },

  textoConfirmar: {
    color: '#00899B',
    fontSize: 15,
    fontWeight: '700'
  },
});