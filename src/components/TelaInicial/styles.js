import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },

  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  fotoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden'
  },

  foto: {
    width: 60,
    height: 60
  },
  
  textoContainer: {
    marginLeft: 10
  },

  texto: {
    fontsize: 15,
    fontWeight: '400'
  },

  nomeUsuario: {
    fontSize: 15,
    fontWeight: '500'
  },

  graficoContainer: {
    marginTop: 30,
    width: '100%',
    height: 225,
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 25,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    overflow: 'hidden'
  },

  grafico: {
    width: '100%',
    height: 225,
  },

  botoesContainer: {
    marginTop: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  botao: {
    width: 100,
    height: 100,
    backgroundColor: '#FBFBFB',
    borderRadius: 25,
    shadowColor: '#000000',
    shadowOffset: { width: 0, Height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  botaoTexto: {
    textAlign: 'center',
    color: '#AAAAAA',
    fontSize: 16,
    fontWeight: '600',
  }
});