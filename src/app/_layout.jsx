import { Stack } from "expo-router";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico"
import AuthProvider from "../context/auth";

export default function Routes(){
 const [fontsLoaded] = useFonts({
  Montserrat_400Regular,
  Montserrat_700Bold,
  Pacifico_400Regular,
  Montserrat_600SemiBold,
 })
 if(!fontsLoaded){
  return null
 }

 return (
  <AuthProvider>
   <Stack initialRouteName="index">
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    <Stack.Screen name="(others)" options={{ headerShown: false }} />
   </Stack>
  </AuthProvider>
 )
}