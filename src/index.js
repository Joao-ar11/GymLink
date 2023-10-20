import { StyleSheet, ScrollView } from 'react-native';
import Registro from './components/Registro';

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
      <Registro tipo="personal" />
    </ScrollView>
  );
}