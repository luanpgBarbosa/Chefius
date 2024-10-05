import ButtonLayout from "../../../assets/components/ButtonLayout"
import { StyleSheet, Text } from "react-native";
import colors from "../../../assets/colors";
import { fonts } from "../../../assets/fonts";
import * as Animatable from "react-native-animatable";

export default function Configuracoes(){
 return(
  <Animatable.View 
  style={styles.container}
  animation="slideInLeft"
  duration={250} 
  easing="linear"
  >
   <Text style={styles.titulo}>Configurações</Text>
   <ButtonLayout title="Informações do usuário" rota="/userInfo" />
   <ButtonLayout title="Convidar amigos" rota="/convidarAmigos" />
  </Animatable.View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: colors.branco,
 },

 titulo: {
  fontSize: 24,
  color: colors.azulEscuro,
  fontFamily: fonts.SemiBold,
  alignSelf: 'center'
 },

 posicao: {
  marginLeft: 15
 }
})