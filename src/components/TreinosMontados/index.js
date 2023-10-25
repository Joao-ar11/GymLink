import { View, Text, FlatList } from 'react-native';
import CardTreino from './CardTreino';
import styles from './styles';

export default function TreinosMontados({ route, navigation }) {
  const treinos = [{
      id: '1',
      nome: 'Treino de Musculação',
      descricao: 'Treino de musculação focado em fortalecer e tonificar, combinando exercícios compostos e isolados para máximo ganho e definição.',
      instrutor: 'Machio Naruzo - Musculação',
      fotoInstrutor: 'https://cdn.anisearch.com/images/character/cover/84/84936_300.webp',
      fotoTreino: 'https://img.icons8.com/external-glyphons-amoghdesign/64/external-dumbbell-education-vol-02-glyphons-amoghdesign.png'
    },

    {
      id: '2',
      nome: 'Treino de Calistenia',
      descricao: '"Treino de calistenia com o instrutor Baki Hanma: desafie seu corpo usando o próprio peso, aprimorando força, agilidade e equilíbrio. 💪🌆 #CalisteniaComBaki"',
      instrutor: 'Baki Hanma - Calistenia',
      fotoInstrutor: 'https://aodisseia.b-cdn.net/wp-content/uploads/2023/07/Baki-Hanma-2a-temporada-anime-netflix-01-768x432.jpg',
      fotoTreino: 'https://img.icons8.com/ios-filled/50/pullups.png'
    }
  ];

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Treinos montados</Text>
      { treinos.length > 0 ?
        <FlatList
          style={styles.lista}
          contentContainerStyle={{alignItems: 'center', paddingTop: 5}}
          data={treinos}
          renderItem={({ item }) => <CardTreino item={item} navigation={navigation}/>}
          keyExtractor={item => item.id}
        /> :
        <View>
          <Text>Você não tem nenhum treino no momento</Text>
          <Text>Vincule-se a um personal para receber treinos</Text>
        </View>
      }
    </View>
  );
}