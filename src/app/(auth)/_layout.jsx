import { Stack } from "expo-router";
import Header from "../../assets/components/Header";

export default function AuthRouter(){
 return(
  <>
   <Stack screenOptions={{ 
    header: () => <Header />,
   }}>
    <Stack.Screen name="login/index" />
    <Stack.Screen name="loginemail/index" />
    <Stack.Screen name="cadastro/index" />
    <Stack.Screen name="cadastroemail/index" />
    <Stack.Screen name="etapa1/index" />
    <Stack.Screen name="etapa2/index" />
    <Stack.Screen name="etapa3/index" />
    <Stack.Screen name="etapa4/index" />
    <Stack.Screen name="convidaramigos/index" />
   </Stack>
  </>
 )
}