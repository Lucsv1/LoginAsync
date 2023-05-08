import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import img from "./assets/favicon.png";
import { useState } from "react";

const Form = (props) => {
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
          <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
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
            onPress={() => {
              const obj = { email, senha };
              props.setLista([...props.lista, obj]);
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

export default function App() {
  const [lista, setLista] = useState("");

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
