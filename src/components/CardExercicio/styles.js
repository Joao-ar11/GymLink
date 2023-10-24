import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingRight: 20,
    width: '100%',
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },

  imagemContainer: {
    marginRight: 'auto',
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },

  imagem: {
    width: 40,
    height: 40
  },

  texto: {
    marginHorizontal: 5,
    width: 86,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500'
  },

  check: {
    marginLeft: 'auto',
    padding: 2,
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },

  concluido: {
    width: 18,
    height: 18
  },

  mudarExercicio: {
    position: 'absolute',
    top: -15,
    right: -5,
    width: 30,
    height: 30,
    backgroundColor: '#FFE074',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },

  mudarImagem: {
    width: 17,
    height: 17
  }
});