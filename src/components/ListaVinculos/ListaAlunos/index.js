import { Text, FlatList} from "react-native";
import { db } from "../../../firebase/firebase";
import { getDocs, where, query, collection } from "firebase/firestore";
import CardUsuario from "../../CardUsuario";
import User from "../../User";
import { useContext, useEffect, useState } from "react";

export default function ListaAlunos(props) {
  const [alunos, setAlunos] = useState([]);
  const usuario = useContext(User);

  useEffect(() => {
    if (usuario.user.vinculos.length > 0) {
      const novosAlunos = [];
      const c = collection(db, 'users');
      const q = query(c, where('uid', 'in', usuario.user.vinculos));
      getDocs(q)
      .then((docs) => {
        docs.forEach((doc) => {
          novosAlunos.push(doc.data());
        })
      })
      .then(() => setAlunos(novosAlunos));
    }
  }, [usuario.user]);

  return (
    <>
      <Text style={{ fontSize: 16, fontWeight: '700'}}>Meus Alunos</Text>
      {usuario.user.vinculos.length === 0 ? <Text>Você não tem alunos no momento, espere por algum pedido de vínculo</Text> : <></>}
      <FlatList 
        data={alunos}
        renderItem={({ item }) => <CardUsuario item={item} navigation={props.navigation}/>}
        keyExtractor={item => item.uid}
        contentContainerStyle={{ marginTop: 10, paddingVertical: 7, paddingHorizontal: 5, width: '100%', alignItems: 'center', gap: 10}}
        extraData={alunos}
      />
    </>
  );
}