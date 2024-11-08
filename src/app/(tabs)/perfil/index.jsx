import chapeu from "../../../assets/imgs/chapeu_menu.png"
import { View, Text, Image, StyleSheet, TouchableOpacity, BackHandler } from "react-native";
import ButtonLayout from "../../../assets/components/ButtonLayout";
import colors from "../../../assets/colors";
import { AntDesign } from "@expo/vector-icons";
import { fonts } from "../../../assets/fonts";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth";
import { useRouter } from "expo-router";
import fotoPerfil from "../../../assets/imgs/foto-perfil.jpeg"

export default function Perfil(){
 const { authNome } = useContext(AuthContext)
 const router = useRouter()

 return(
  <View style={styles.container}>
   <Image source={chapeu} style={styles.icon} />
   <Image source={fotoPerfil} style={styles.fotoPerfil} />
   <Text style={styles.username}>{authNome}</Text>
   <ButtonLayout title="Preferências" rota="/preferencias" />
   <ButtonLayout title="Informações pessoais" rota="/userInfo" />
   <ButtonLayout style={styles.posic} title="Receitas salvas" rota="/receitaSalva" />
   <ButtonLayout style={styles.posic} title="Configurações" rota="/configuracoes" />
   <TouchableOpacity 
   style={styles.button}
   onPress={() => router.navigate("/")}
   >
    <Text style={styles.buttonText}>Sair</Text>
   </TouchableOpacity>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: colors.branco,
  alignItems: 'center',
 },

 icon: {
  alignSelf: 'center',
  marginVertical: 15,
 },

 fotoPerfil: {
  width: 150,
  borderRadius: 500,
  fontSize: 56,
 },

 username: {
  fontSize: 22,
  alignSelf: 'center',
  marginVertical: 25,
 },

 posic: {
  alignSelf: 'center'
 },

 button: {
  width: 150,
  height: 40,
  backgroundColor: colors.rosa,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  borderRadius: 15,
  marginTop: 15,
 },

 buttonText: {
  fontSize: 18,
  fontFamily: fonts.Regular,
  color: colors.branco,
 }
})