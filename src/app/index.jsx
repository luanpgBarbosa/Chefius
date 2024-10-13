import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import colors from "../assets/colors";
import chapeu from "../assets/imgs/chapeu_menu.png";
import guruBemVindo from "../assets/imgs/guru_bemvindo.png"
import { LinearGradient } from "expo-linear-gradient";
import { fonts } from "../assets/fonts";
import * as Animatable from "react-native-animatable"

export default function Teste(){
  const router = useRouter();
  return(
    <Animatable.View style={{ flex: 1 }}>
      <StatusBar hidden />
      <LinearGradient
      colors={[colors.laranjaClaro, colors.branco]}
      style={styles.container}
      >
        <Image source={chapeu} />
        <Image source={guruBemVindo} />
        <Text style={styles.titulo}>Seja bem-vindo</Text>
        <Text style={styles.subtitulo}>Faça parte!</Text>
        <Text style={styles.texto}>Uma vida melhor começa com uma alimentação melhor</Text>
        <View style={styles.buttonConteiner}>
          <TouchableOpacity
            onPress={() => router.navigate("/login")}
            style={styles.btnLoginConteiner}
          >
            <Text style={styles.btnLoginText}>Já tenho uma conta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.navigate("/cadastro")}
            style={styles.btnCadastroConteiner}
          >
            <Text style={styles.btnCadastroText}>Começar agora</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonConteiner: {
    height: 200,
    justifyContent: 'space-evenly',
  },

  titulo: {
    width: 200,
    fontSize: 42,
    color: colors.rosa,
    fontFamily: fonts.Pacifico,
    textAlign: 'center',
  },

  subtitulo: {
    fontFamily: fonts.Bold,
    fontSize: 24,
    color: colors.laranja,
  },

  texto: {
    width: 300,
    fontSize: 18,
    fontFamily: fonts.Regular,
    textAlign: 'center',
  },

  btnCadastroConteiner: {
    width: 240,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    backgroundColor: colors.rosa,
  },

  btnCadastroText: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    color: colors.branco,
  },

  btnLoginConteiner: {
    width: 240,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    borderWidth: 2,
    borderColor: colors.rosa,
    backgroundColor: colors.branco,
  },

  btnLoginText: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    color: colors.rosa,
  },
})