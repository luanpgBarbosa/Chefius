import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable"
import { Text } from "react-native-animatable";
import colors from "../../../assets/colors";
import { fonts } from "../../../assets/fonts";

export default function receitaSalva(){
 return(
  <Animatable.View style={styles.container}>
   <Text style={styles.title}>Receitas salvas</Text>
   <Text style={styles.conteudo}>Aqui ficarão suas receitas</Text>
  </Animatable.View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: colors.branco,
 },

 title: {
  alignSelf: 'center',
  fontSize: 24,
  fontFamily: fonts.SemiBold,
  color: colors.azulEscuro,
 },

 conteudo: {
  alignSelf: 'center',
  fontSize: 20,
  fontFamily: fonts.Regular,
 }
})