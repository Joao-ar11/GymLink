import { View, Image } from "react-native";

export default function Logo() {
  return (
    <View style={{ marginLeft: 'auto', width: 150, height: 44.62 }}>
      <Image style={{ width: 150, height: 44.62}} source={require('../../../../assets/GymLinkNomeELogo.png')}/>
    </View>
  );
}