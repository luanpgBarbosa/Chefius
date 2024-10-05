import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../../assets/colors";
import { fonts } from "../../../assets/fonts";
import convidarAmigos from "../../../assets/imgs/convidarAmigos.png";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable"

export default function ConvidarAmigos(){
 return(
  <Animatable.View 
  style={styles.container}
  animation="slideInUp"
  duration={350}
  easing="ease-in-out"
  >
   <Text style={styles.title}>Convidar amigos</Text>
   <Image 
   style={styles.img}
   source={convidarAmigos}
   />
   <Text style={styles.descricao}>É muito importante para nós o seu compartilhamento. Com a sua ajuda, a Chefius pode alcançar diversas pessoas e fazer a diferença na vida delas!</Text>
   <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Compartilhar Link</Text>
   </TouchableOpacity>
  </Animatable.View>
 )
}

export const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: colors.branco,
 },

 title: {
  alignSelf: 'center',
  fontSize: 20,
  color: colors.azulEscuro,
  fontFamily: fonts.SemiBold,
  marginBottom: 15,
 },

 img: {
  alignSelf: 'center',
  marginBottom: 45,
 },

 descricao: {
  fontSize: 18,
  color: colors.preto,
  fontFamily: fonts.Regular,
  textAlign: 'center',
  marginBottom: 45,
 },

 button: {
  backgroundColor: colors.verde,
  width: 250,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  borderRadius: 20,
 },

 buttonText: {
  fontSize: 16,
  fontFamily: fonts.SemiBold,
  color: colors.branco,
 }
})