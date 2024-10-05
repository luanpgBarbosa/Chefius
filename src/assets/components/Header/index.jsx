import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import seta from '../../imgs/seta_voltar.png'
import chapeu from '../../imgs/chapeu_menu.png'
import colors from "../../colors";
import { useRouter } from "expo-router";

export default function Header(){
  const router = useRouter()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
      >
        <Image
          source={seta}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{ marginLeft: 100 }}
          source={chapeu}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 120,
    width: '100%',
    backgroundColor: colors.branco,
  },
});