import { View, Text, StyleSheet } from "react-native";
import colors from "../../../assets/colors";

export default function Home(){
  return(
    <View style={styles.container}>
      <Text style={styles.msg}>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.branco,
  },

  msg: {
    fontSize: 26,
    color: colors.rosa,
  },
})