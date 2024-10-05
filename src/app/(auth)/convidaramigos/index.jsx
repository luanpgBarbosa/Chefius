import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import colors from "../../../assets/colors";
import convidarAmigos from "../../../assets/imgs/convidarAmigos.png"
import { fonts } from "../../../assets/fonts";

export default function ConvidarAmigos(){
  return(
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Convidar amigos</Text>
        <Image
        style={styles.img}
        source={convidarAmigos}
        />
        <Text style={styles.text}>É muito importante para nós o seu compartilhamento. Com a sua ajuda, a Chefius pode alcançar diversas pessoas e fazer a diferença na vida delas!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Compartilhar Link</Text>
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

  conteudo: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 24,
    fontFamily: fonts.Bold,
    color: colors.azulEscuro,
  },

  text: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    width: 330,
    textAlign: 'center',
  },

  button: {
    width: 240,
    height: 50,
    backgroundColor: colors.verde,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    color: colors.branco,
  },
})