import * as Animatable from "react-native-animatable"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import colors from "../../../assets/colors";
import guru from "../../../assets/imgs/guru_cadastro.png"
import { fonts } from "../../../assets/fonts";

export default function Cadastro(){
  const router = useRouter()
  return (
    <Animatable.View 
    style={styles.container}
    animation="slideInUp"
    duration={350}
    >
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Vamos começar!</Text>
        <Image 
        source={guru}
        />
        <Text style={styles.text1}>Eu sou a Guru,  sua assistente do Chefius. É um prazer saber que você confia em mim, espero te ajudar no seu dia a dia.</Text>
        <Text style={styles.text2}>Para começarmos, primeiro você precisa  fornecer algumas informações.</Text>
        <TouchableOpacity 
          style={styles.btnConteiner}
          onPress={() => router.navigate("etapa1")}
        >
          <Text style={styles.btnText}>Vamos lá</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.branco
  },

  conteudo: {
    height: 680,
    width: 350,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  titulo: {
    fontSize: 32,
    fontFamily: fonts.Bold,
    color: colors.rosa,
  },

  text1: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    textAlign: 'center',
  },

  text2: {
    fontFamily: fonts.SemiBold,
    fontSize: 17,
    textAlign: 'center',
    color: colors.laranja,
  },

  btnConteiner: {
    width: 240,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    backgroundColor: colors.rosa,
  },

  btnText: {
    fontSize: 18,
    color: colors.branco,
  },
})