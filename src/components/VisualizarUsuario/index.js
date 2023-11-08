import { ScrollView, ActivityIndicator } from "react-native";
import { StyleSheet } from "react-native";
import VisualilzarAluno from "./VisualizarAluno";
import VisualilzarPersonal from "./VisualizarPersonal";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function VisualizarUsuario({ route, navigation }){

  const [ carregando, setCarregando ] = useState(false)
  const [ visualizado, setVisualizado ] = useState({});

  useEffect(() => {
    setCarregando(true);
    const c = collection(db, 'users');
    const q = query(c, where('uid', '==', route.params.uid))
    getDocs(q)
    .then((dados) => dados.forEach((doc) => setVisualizado(doc.data())))
    .then(() => setCarregando(false))
    .catch((error) => {console.log(error); setCarregando(false)})
  }, [])

  return (
    <ScrollView contentContainerStyle={{ width: '100%', backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center'}}>
      { carregando?
          <ActivityIndicator animating={carregando} size={'large'} color={'#4736C6'} style={{ position: 'absolute', top: '45%', left: '45%', display: carregando ? 'flex' : 'none'}}/>
          :
          route.params.tipo === 'personal' ?
            <VisualilzarPersonal item={visualizado}/>
            :
            <VisualilzarAluno item={visualizado} vinculo={route.params.idVinculo}/>
      }
    </ScrollView>
  );
}