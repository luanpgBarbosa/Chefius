import * as Animatable from "react-native-animatable"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../../assets/colors";
import { fonts } from "../../../assets/fonts";
import { useRouter } from "expo-router";
import EtapaTitle from "../../../assets/components/EtapaTitle";
import Header from "../../../assets/components/Header";

export default function Etapa4(){
  const router = useRouter()
  return(
    <Animatable.View 
    style={styles.container}
    animation="slideInRight"
    duration={350}
    >
      <EtapaTitle titulo="Etapa 4:" subtitulo="Cadastro" />
      <Text style={styles.texto}>Utilizar uma conta garante que todas as suas preferências ficarâo salvas, além de proporcionar uma experiência única.</Text>
      <View style={styles.buttonsConteiner}>
      <TouchableOpacity 
        onPress={() => router.navigate("cadastroemail")}
        style={styles.buttonEmail}
      >
        <Text style={styles.buttonEmailText}>Entrar com E-mail</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGoogle}>
        <Text style={styles.buttonGoogleText}>Entrar com Google</Text>
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

  titulo: {
    fontSize: 36,
    fontFamily: fonts.Bold,
    textAlign: 'center',
    color: colors.rosa,
  },

  texto: {
    marginTop: 25,
    textAlign: 'center',
    alignSelf: 'center',
    width: 350,
    fontSize: 18,
    fontFamily: fonts.Regular,
  },

  buttonsConteiner: {
    height: 450,
    alignItems: 'center',
  },

  buttonEmail: {
    marginVertical: 55,
    justifyContent: 'center',
    alignItems: 'center',
    width: 240,
    height: 50,
    borderRadius: 17,
    backgroundColor: colors.rosa,
  },

  buttonEmailText: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    color: colors.branco,
  },

  buttonGoogle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 240,
    height: 50,
    borderRadius: 17,
    backgroundColor: colors.cinzaMedio,
  },

  buttonGoogleText: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    color: colors.cinza,
  },

  buttonFacebook: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 240,
    height: 50,
    borderRadius: 17,
    backgroundColor: colors.azul,
  },

  buttonFacebookText: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    color: colors.branco,
  },
})