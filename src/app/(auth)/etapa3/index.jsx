import * as Animatable from "react-native-animatable"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../../assets/colors";
import { fonts } from "../../../assets/fonts";
import { useRouter } from "expo-router";
import EtapaTitle from "../../../assets/components/EtapaTitle";
import Header from "../../../assets/components/Header";

export default function Etapa3(){
 const router = useRouter()
 return(
  <Animatable.View 
  style={styles.container}
  animation="slideInRight"
  duration={350}
  >
   <EtapaTitle titulo="Etapa 3:" subtitulo="Preferências" />
   <View style={styles.conteudo}>
    <Text style={styles.msg}>Etapa 3 está em andamento...</Text>
    <TouchableOpacity 
    style={styles.btn}
    onPress={() => router.navigate("etapa4")}
    >
     <Text style={styles.btnText}>Prosseguir...</Text>
    </TouchableOpacity>
   </View>
  </Animatable.View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: colors.branco,
 },

 conteudo: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },

 msg: {
  fontSize: 22,
  color: colors.rosa,
  fontFamily: fonts.Bold,
 },

 btn: {
  width: 210,
  height: 50,
  borderRadius: 18,
  backgroundColor: colors.rosa,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 55,
 },

 btnText: {
  fontSize: 18,
  color: colors.branco,
  fontFamily: fonts.Regular,
 }
})