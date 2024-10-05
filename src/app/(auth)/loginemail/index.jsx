import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import { fonts } from "../../../assets/fonts";
import { useRouter } from "expo-router";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable"

export default function LoginEmail(){
  const router = useRouter()
  return (
    <Animatable.View animation="slideInUp" duration={500} style={styles.conteiner}>
      <View style={styles.descricaoConteiner}>
        <Text style={styles.titulo}>Login por Email</Text>
        <Text style={styles.descricao}>Forneça os mesmos dados utilizados ao criar a conta.</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputConteiner}>
          <MaterialIcons name="email" size={24} color={colors.cinza} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
          />
        </View>
        <View style={styles.inputConteiner}>
          <Entypo name="lock" size={24} color={colors.cinza} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />
          <Entypo name="eye" size={24} color={colors.cinza} style={styles.icon} />
        </View>
        <TouchableOpacity 
        style={styles.buttonConteiner}
        onPress={() => router.navigate("/home")}
        >
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: colors.branco,
  },

  descricaoConteiner: {
    height: 150,
    justifyContent: 'space-evenly'
  },

  titulo: {
    fontFamily: fonts.Bold,
    alignSelf: 'center',
    fontSize: 30,
    color: colors.rosa,
  },

  descricao: {
    width: 300,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: fonts.Regular,
  },

  form: {
    height: 350,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  inputConteiner: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 300,
    height: 50,
    backgroundColor: colors.cinzaClaro,
    borderRadius: 16,
  },

  icon: {
    marginHorizontal: 10,
  },

  input: {
    flex: 1,
    color: colors.cinza,
    fontSize: 16,
    fontFamily: fonts.Regular,
    padding: 5,
  },

  buttonConteiner: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 240,
    height: 50,
    borderRadius: 17,
    backgroundColor: colors.rosa,
  },

  buttonText: {
    color: colors.branco,
    fontSize: 18,
    fontFamily: fonts.Regular,
  },
});
