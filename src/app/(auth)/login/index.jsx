import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../../../assets/colors";
import { useRouter } from "expo-router";
import { fonts } from "../../../assets/fonts";
import * as Animatable from "react-native-animatable"

export default function Login(){
  const router = useRouter()
  return(
    <Animatable.View 
    animation="slideInUp" 
    duration={500} 
    easing="ease-in-out"
    style={styles.container}
    >
      <Text style={styles.titulo}>Que bom que você voltou!</Text>
      <Text style={styles.texto}>Utilizar uma conta garante que todas as suas preferências ficarâo salvas, além de proporcionar uma experiência única.</Text>
      <View style={styles.buttonsConteiner}>
        <TouchableOpacity 
          onPress={() => router.push("/loginemail")}
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
    fontSize: 32,
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 240,
    height: 50,
    borderRadius: 17,
    backgroundColor: colors.rosa,
    marginVertical: 55,
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
});