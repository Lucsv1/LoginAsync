import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Alert } from "react-native";
import img from "./assets/favicon.png";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Screen, Navigator } = createBottomTabNavigator();



export default function App(props) {
  const [listaLogin, setListaLogin] = useState(false);

  const Form = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 40, textAlign: "center" }}>
          Login
        </Text>
        <View style={{ justifyContent: "center", alignSelf: "center" }}>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={{ backgroundColor: "grey", width: 200, borderRadius: 10 }}
          />
          <Text>Senha</Text>
          <TextInput
            value={senha}
            onChangeText={setSenha}
            style={{ backgroundColor: "grey", borderRadius: 10 }}
          />
          <View
            style={{
              backgroundColor: "black",
              padding: 5,
              marginTop: 10,
              borderRadius: 5,
            }}
          >
            <Text onPress={()=>{
              AsyncStorage.getItem("USUARIOS")
              .then((info)=>{
                let lista = []
                let achou = false;
                if (info){
                  lista = JSON.parse(info)
                }
                for (let i = 0; i < lista.length; i++){
                  const obj  = lista[i];
                  if (obj.email == email && obj.senha == senha){
                    setListaLogin(true);
                    achou = true;
                    alert("usuario encontrado")
                    break;
                  }
                }
                if (!achou){
                  alert("usuario ou senha estão incorretos");
                }
              })
            }} style={{ color: "white", textAlign: "center" }}>Login</Text>
          </View>
          <View
            style={{
              backgroundColor: "black",
              padding: 5,
              marginTop: 10,
              borderRadius: 5,
            }}
          >
            <Text
              onPress={()=>{
                AsyncStorage.getItem("USUARIOS")
                .then((info)=>{
                  let lista = []
                  const obj = {email, senha}
                  if(info){
                    lista = JSON.parse(info)
                  }
                  lista.push(obj)
                  AsyncStorage.setItem("USUARIOS", JSON.stringify(lista))
                  .catch((err)=>{alert('erro ' + err)})
                })
              }}
              style={{ color: "white", textAlign: "center" }}
            >
              Register
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View
          style={{
            flex: 3,
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Image source={img} style={{ height: 120, width: 120 }} />
        </View>
        <View style={{ flex: 7 }}>
          <Form />
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
