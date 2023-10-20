import { StyleSheet, ScrollView } from 'react-native';
import Registro from './components/Registro';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Registro tipo="aluno" />
    </ScrollView>
  );
}