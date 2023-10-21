import { StyleSheet, ScrollView } from 'react-native';
import NavegacaoInferior from './components/NavegacaoInferior';
import Registro from './components/Registro';
import Login from './components/Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
  },
});

export default function Index() {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
      <NavegacaoInferior />
    </ScrollView>
  );
}