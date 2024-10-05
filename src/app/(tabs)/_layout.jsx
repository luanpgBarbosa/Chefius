import { Tabs } from "expo-router";
import colors from "../../assets/colors";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { fonts } from "../../assets/fonts";

export default function TabsRoutes(){
 return(
  <>
   <Tabs
   screenOptions={{
    headerShown: false,
    tabBarStyle: {
     height: 80,
     alignItems: 'center',
     backgroundColor: colors.branco
    },
    tabBarLabelStyle: {
     fontSize: 16,
     fontFamily: fonts.SemiBold,
     marginBottom: 10,
    },
    tabBarInactiveTintColor: colors.preto,
    tabBarActiveTintColor: colors.rosa
   }}
   >
    <Tabs.Screen 
    name="home/index" 
    options={{ 
     title: "Home",
     tabBarIcon: ({color, size, focused}) => {
      if(focused){
       return <Ionicons name="home" size={size} color={color} />
      }
      return <Ionicons name="home" size={size} color={color} />
     }
    }}
    />
    <Tabs.Screen 
    name="receitas/index" 
    options={{ 
     title: "Receitas",
     tabBarIcon: ({color, size, focused}) => {
      if(focused){
       return <MaterialIcons name="soup-kitchen" size={size} color={color} />
      }
      return <MaterialIcons name="soup-kitchen" size={size} color={color} />
     }
    }} />
    <Tabs.Screen 
    name="guru/index" 
    options={{ 
     title: "Guru",
     tabBarIcon: ({color, size, focused}) => {
      if(focused){
       return <MaterialCommunityIcons name="chef-hat" size={size} color={color} />
      }
      return <MaterialCommunityIcons name="chef-hat" size={size} color={color} />
     } 
    }} />
    <Tabs.Screen 
    name="perfil/index" 
    options={{ 
     title: "Perfil",
     tabBarIcon: ({color, size, focused}) => {
      if(focused){
       return <MaterialIcons name="person" size={size} color={color} />
      }
      return <MaterialIcons name="person" size={size} color={color} />
     } 
    }} />
   </Tabs>
  </>
 )
}