import * as Animatable from "react-native-animatable"
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import colors from "../../../assets/colors";
import { fonts } from "../../../assets/fonts";
import EtapaTitle from "../../../assets/components/EtapaTitle"
import hamburguer from "../../../assets/imgs/hamburguer.png"
import { useRouter } from "expo-router";
import Header from "../../../assets/components/Header";

export default function Etapa2(){
  const router = useRouter()
  return (
    <Animatable.View 
    style={styles.container}
    animation="slideInRight"
    duration={350}
    >
      <EtapaTitle titulo="Etapa 2:" subtitulo="Seu IMC" />
      <View style={styles.conteudo}>
        <Image
          source={hamburguer}
          style={styles.img}
        />
        <Text style={styles.descricao}>Preencha os campos com o formato kg e m.</Text>
        <View style={styles.infoContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputContent}
              placeholder="Peso:"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputContent}
              placeholder="Altura:"
              keyboardType="numeric"
            />
          </View>
        </View>
        <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={() => router.navigate("etapa3")}
        >
          <Text style={styles.buttonText}>Calcular</Text>
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

  conteudo: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  img: {
    marginTop: -45,
  },

  descricao: {
    width: 300,
    textAlign: 'center',
    marginTop: -35,
    fontSize: 18,
    fontFamily: fonts.Regular,
  },

  infoContainer: {
    marginTop: -45,
    justifyContent: 'space-evenly',
    width: '100%',
    flexDirection: 'row',
  },

  inputContainer: {
    width: 160,
    height: 40,
    backgroundColor: colors.cinzaClaro,
    borderRadius: 16,
  },

  inputContent: {
    flex: 1,
    marginLeft: 15,
    color: colors.cinza,
    fontFamily: fonts.Regular,
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 240,
    height: 50,
    borderRadius: 20,
    backgroundColor:  colors.rosa,
  },

  buttonText: {
    fontSize: 20,
    fontFamily: fonts.Regular,
    color: colors.branco,
  }
})