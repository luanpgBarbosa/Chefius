import * as Animatable from "react-native-animatable";
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import colors from "../../../assets/colors";
import { fonts } from "../../../assets/fonts";
import { useRouter } from "expo-router";
import EtapaTitle from "../../../assets/components/EtapaTitle";
import dataNascimento from "../../../assets/imgs/dataNascimento.png";
import { Picker } from "@react-native-picker/picker";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth";

export default function Etapa1() {
  const [dia, setDia] = useState();
  const [mes, setMes] = useState();
  const [ano, setAno] = useState();
  const { setAuthIdade } = useContext(AuthContext)
  const router = useRouter();

  function testandoDate() {
    if (dia && mes && ano) {
      const date = new Date(ano, mes - 1, dia);
      setAuthIdade(date)
      router.navigate('/etapa2')
    } else {
      console.log("Por favor, preencha todos os campos.");
    }
  }

  return (
    <Animatable.View
      style={styles.container}
      animation="slideInRight"
      duration={350}
    >
      <EtapaTitle titulo="Etapa 1:" subtitulo="Sua idade" />
      <View style={styles.conteudo}>
        <Image source={dataNascimento} style={styles.img} />
        <Text style={styles.descricao}>Qual a sua data de nascimento?</Text>
        <View style={styles.date}>
          <Picker selectedValue={dia} onValueChange={setDia} style={styles.info}>
            <Picker.Item label="Dia" value={undefined} />
            {[...Array(31)].map((_, index) => (
              <Picker.Item key={index} label={`${index + 1}`} value={index + 1} />
            ))}
          </Picker>
          <Picker selectedValue={mes} onValueChange={setMes} style={styles.info}>
            <Picker.Item label="Mês" value={undefined} />
            {[...Array(12)].map((_, index) => (
              <Picker.Item key={index} label={`${index + 1}`} value={index + 1} />
            ))}
          </Picker>
          <Picker selectedValue={ano} onValueChange={setAno} style={styles.info}>
            <Picker.Item label="Ano" value={undefined} />
            {[...Array(100)].map((_, index) => {
              const year = new Date().getFullYear() - index;
              return (
                <Picker.Item key={index} label={`${year}`} value={year} />
              );
            })}
          </Picker>
        </View>
        <TouchableOpacity style={styles.btn} onPress={testandoDate}>
          <Text style={styles.btnText}>Próximo →</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
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

  msg: {
    fontSize: 22,
    color: colors.rosa,
    fontFamily: fonts.Bold,

  },

  btn: {
    width: 210,
    height: 50,
    borderRadius: 18,
    backgroundColor: colors.rosa,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 55,
  },

  btnText: {
    fontSize: 18,
    color: colors.branco,
    fontFamily: fonts.Regular,
  },

  img: {
    alignSelf: 'center',
  },

  descricao: {
    marginVertical: -35,
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },

  info: {
    width: 120,
  },

  date: {
    backgroundColor: colors.cinzaClaro,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});