import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { db } from "../../../firebase/firebase";
import { getDocs, where, query, collection } from "firebase/firestore";
import CardPersonal from "../../CardPersonal";
import User from "../../User";
import { useContext, useEffect } from "react";

export default function ListaPersonais(props) {
  const personais = [];
  const usuario = useContext(User);

  useEffect(() => {
    if (usuario.user.vinculos.length > 0) {
      const c = collection(db, 'users');
      const q = query(c, where('uid', 'in', usuario.user.vinculos));
      getDocs(q)
      .then((docs) => {
        docs.forEach((doc) => {
          personais.push(doc.data());
        })
      });
    }
  }, [usuario.user]);

  return (
    <>
      <Text style={{ fontSize: 16, fontWeight: '700'}}>Meus Personais</Text>
      <FlatList 
        data={personais}
        renderItem={({ item }) => <CardPersonal item={item} navigation={props.navigation}/>}
        keyExtractor={item => item.uid}
        contentContainerStyle={{ marginTop: 10, paddingVertical: 7, paddingHorizontal: 5, width: '100%', alignItems: 'center', gap: 10}}
      />
      <TouchableOpacity style={{marginVertical: 10, padding: 5, width: '100%', height: 50, backgroundColor: 'lightgrey', borderRadius: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',shadowColor: '#000000', shadowOffset: { width: 0, height: 0}, shadowOpacity: 0.25, shadowRadius: 5, elevation: 5}} onPress={() => props.navigation.navigate('Pesquisa')}>
        <View style={{width: 40, height: 40, backgroundColor:'#F6F6F6', borderRadius: 20}}><Image source={require('../../../../assets/plus.png')} style={{width: 40, height: 40}}/></View>
        <Text style={{textAlign: 'center', fontSize: 16 ,fontWeight: '700'}}>Adicionar Personais</Text>
        <View style={{width: 40, height: 40}}/>
      </TouchableOpacity>
    </>
  );
}