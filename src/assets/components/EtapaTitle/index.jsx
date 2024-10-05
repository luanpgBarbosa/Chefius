import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../colors";
import { fonts } from "../../fonts";

export default function EtapaTitle(props){
 const [titulo] = useState(props.titulo)
 const [subtitulo] = useState(props.subtitulo)

 return(
  <View style={styles.container}>
   <Text style={styles.titulo}>{titulo}</Text>
   <Text style={styles.subtitulo}>{subtitulo}</Text>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  height: 100,
  backgroundColor: colors.branco,
  justifyContent: 'center',
  alignItems: 'center'
 },

 titulo: {
  color: colors.rosa,
  fontSize: 24,
  fontFamily: fonts.Bold,
 },

 subtitulo: {
  color: colors.rosa,
  fontSize: 32,
  fontFamily: fonts.Bold,
 },
})