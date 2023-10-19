import { StyleSheet, View } from 'react-native';
import Registro from './components/Registro';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Registro tipo="aluno" />
    </View>
  );
}