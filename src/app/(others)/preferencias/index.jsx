import { StyleSheet, Text, View } from "react-native";
import ButtonPref from "../../../assets/components/ButtonPref";
import colors from "../../../assets/colors";
import { fonts } from "../../../assets/fonts";

export default function Preferencias(){
 return(
  <View style={styles.container}>
   <Text style={styles.title}>Preferências e Funcionalidades</Text>
   <ButtonPref titulo="Aprender a cozinhar" />
   <ButtonPref titulo="Melhorar a alimentação" />
   <ButtonPref titulo="Acompanhar  a alimentação" />
   <ButtonPref titulo="Tirar dúvidas com a Guru" />
   <ButtonPref titulo="Ter uma assistente cotidiana" />
   <ButtonPref titulo="Receber recomendações" />
   <ButtonPref titulo="Envio de notificações" />
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: colors.branco,
  alignItems: 'center',
 },

 title: {
  fontSize: 30,
  marginVertical: 20,
  fontFamily: fonts.SemiBold,
  color: colors.azulEscuro,
  textAlign: 'center'
 }
})