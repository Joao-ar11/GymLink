import { View, Text, FlatList } from "react-native";
import CardPersonal from "../../CardPersonal";

export default function ListaPersonais(props) {
  const personais = [{
      id: '1',
      nome: 'Machio Naruzo - Musculação',
      descricao: 'Tonificar ou ganhar massa? Estou aqui. Treino de musculação focado em fortalecer e tonificar, combinando exercícios compostos e isolados para máximo ganho e definição.',
      foto: 'https://cdn.anisearch.com/images/character/cover/84/84936_300.webp'
    },

    {
      id: '2',
      nome: 'Baki Hanma - Calistenia',
      descricao: 'Força e flexibilidade usando o corpo. 🌟 "Treino de calistenia com o instrutor Baki Hanma: desafie seu corpo usando o próprio peso, aprimorando força, agilidade e equilíbrio. 💪🌆 #CalisteniaComBaki"',
      foto: 'https://aodisseia.b-cdn.net/wp-content/uploads/2023/07/Baki-Hanma-2a-temporada-anime-netflix-01-768x432.jpg'
    }
  ];

  return (
    <>
      <Text style={{ fontSize: 16, fontWeight: '700'}}>Meus Personais</Text>
      <FlatList 
        data={personais}
        renderItem={({ item }) => <CardPersonal item={item} navigation={props.navigation}/>}
        keyExtractor={item => item.id}
        contentContainerStyle={{ marginTop: 10, paddingVertical: 7,paddingHorizontal: 5, width: '100%', alignItems: 'center', gap: 10 }}
      />
    </>
  );
}