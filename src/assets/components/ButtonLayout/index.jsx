import { AntDesign } from "@expo/vector-icons";
import colors from "../../colors";
import { fonts } from "../../fonts";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ButtonLayout(props){
 const router = useRouter()
 return(
  <TouchableOpacity 
  style={styles.container}
  onPress={() => router.navigate(props.rota)}
  >
   <Text style={styles.title}>{props.title}</Text>
   <AntDesign name="right" style={styles.seta} />
  </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
 container: {
  width: 350,
  height: 50,
  backgroundColor: colors.branco,
  borderColor: colors.cinzaMedio,
  borderRadius: 15,
  marginBottom: 25,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  elevation: 5,
 },

 title: {
  fontSize: 16,
  fontFamily: fonts.Regular,
  marginLeft: 15,
 },

 seta: {
  fontSize: 20,
  marginRight: 15,
 }
})