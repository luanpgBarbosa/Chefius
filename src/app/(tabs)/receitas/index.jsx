import { View, Text, StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import fonts from "../../../assets/fonts"

export default function Receitas(){
 return(
  <View style={styles.container}>
    <View>
      <Text>Nós queremos te ajudar!</Text>
      <Text>Entender o que você consome é fundamental para uma vida mais saudável e equilibrada. Por isso, sugestões são disponibilizadas diariamente.</Text>
      <Text>Receitas abaixo</Text>
    </View>
    <View>
      <Text>Café da manhã</Text>
    </View>
    <View>
      <Text>Almoço</Text>
    </View>
    <View>
      <Text>Café da tarde</Text>
    </View>
    <View>
      <Text>Jantar</Text>
    </View>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: colors.branco,
 }
})