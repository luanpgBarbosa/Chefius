import chapeu from "../../../assets/imgs/chapeu_menu.png"
import { View, Text, Image, StyleSheet, TouchableOpacity, BackHandler } from "react-native";
import ButtonLayout from "../../../assets/components/ButtonLayout";
import colors from "../../../assets/colors";
import { AntDesign } from "@expo/vector-icons";
import { fonts } from "../../../assets/fonts";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth";
import { useRouter } from "expo-router";

export default function Perfil(){
 const { authNome } = useContext(AuthContext)
 const router = useRouter()

 return(
  <View style={styles.container}>
   <Image source={chapeu} style={styles.icon} />
   <View style={styles.fotoPerfilContainer}>
    <AntDesign name="user" style={styles.fotoPerfil} />
   </View>
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

 username: {
  fontSize: 22,
  alignSelf: 'center',
  marginBottom: 45,
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