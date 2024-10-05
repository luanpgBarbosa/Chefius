import * as Animatable from "react-native-animatable"
import ButtonLayout from "../../../assets/components/ButtonLayout"
import { useContext } from "react"
import { AuthContext } from "../../../context/auth"
import { View, Image, StyleSheet, Text } from "react-native"
import colors from "../../../assets/colors"
import { AntDesign } from "@expo/vector-icons"
import useState from "react"
import { fonts } from "../../../assets/fonts"

export default function UserInfo(){
 const { authNome, authEmail, authSenha } = useContext(AuthContext)
 
 return(
  <Animatable.View 
  style={styles.container}
  animation="slideInUp"
  duration={350}
  easing="ease-in-out"
  >
   <Text style={styles.titulo}>Informações do usuário</Text>
   <View style={styles.fotoPerfilContainer}>
    <AntDesign name="user" style={styles.fotoPerfil} />
   </View>
   <Text>{authNome}</Text>
   <View>
    <Text>E-mail</Text>
    <Text>{authEmail}</Text>
    <Text>Senha</Text>
    <Text>{authSenha}</Text>
   </View>
  </Animatable.View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: colors.branco,
 },

 titulo: {
  textAlign: "center",
  fontSize: 26,
  color: colors.azulEscuro,
  fontFamily: fonts.SemiBold
 },

 fotoPerfilContainer: {
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 120,
  borderWidth: 5,
  borderColor: colors.rosa,
  width: 120,
  height: 120,
  borderRadius: 80,
  marginVertical: 15,
 },

 fotoPerfil: {
  fontSize: 56,
  color: colors.rosa,
 },
})