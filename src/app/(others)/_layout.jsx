import { Stack } from "expo-router";
import Header from "../../assets/components/Header";

export default function Others(){
 return(
  <Stack 
  screenOptions={{ header: () => <Header /> }}
  >
   <Stack.Screen name="convidarAmigos/index" />
   <Stack.Screen name="configuracoes/index" />
   <Stack.Screen name="userInfo/index" />
   <Stack.Screen name="receitaSalva/index" />
  </Stack>
 )
}