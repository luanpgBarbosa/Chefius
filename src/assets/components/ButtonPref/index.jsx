import { useRouter } from "expo-router";
import { Text, TouchableOpacity, Switch, StyleSheet } from "react-native";
import colors from "../../colors";
import { fonts } from "../../fonts";

export default function ButtonPref(props){
 return(
  <TouchableOpacity style={styles.container}>
   <Text style={styles.title}>{props.titulo}</Text>
   <Switch />
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
 }
})