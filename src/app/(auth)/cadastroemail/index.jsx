import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import colors from "../../../assets/colors";
import EtapaTitle from "../../../assets/components/EtapaTitle";
import { fonts } from "../../../assets/fonts";
import { useRouter } from "expo-router";
import { Entypo, MaterialIcons } from "@expo/vector-icons"

export default function CadastroEmail(){
  const router = useRouter()
  return(
    <View style={styles.container}>
      <EtapaTitle titulo="Etapa 4:" subtitulo="Cadastro" />
      <View style={styles.descricaoContainer}>
        <Text style={styles.descricao}>Para se cadastrar, você precisa criar uma senha e de um email válido.</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="person" size={24} color={colors.cinza} style={styles.icon} />
          <TextInput
          style={styles.input}
          placeholder="Nome de usuário..."
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={24} color={colors.cinza} style={styles.icon} />
          <TextInput
          style={styles.input}
          placeholder="Email..."
          />
        </View>
        <View style={styles.inputContainer}>
          <Entypo name="lock" size={24} color={colors.cinza} style={styles.icon} />
          <TextInput
          style={styles.input}
          placeholder="Senha..."
          secureTextEntry={true}
          />
        </View>
        <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={() => router.navigate('home')}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.branco,
  },

  descricaoContainer: {
    justifyContent: 'space-evenly',
    marginVertical: 25,
  },

  titulo: {
    fontWeight: 'bold',
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

  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 300,
    height: 50,
    backgroundColor: colors.cinzaClaro,
    borderRadius: 16,
  },

  icon: {
    marginHorizontal: 10
  },

  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.Regular,
    padding: 5,
  },

  buttonContainer: {
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
})