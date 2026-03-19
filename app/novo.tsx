import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function NovoPage() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <Text>Nome: {nome}</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(novoNome) => setNome(novoNome)}
      />
      <Text>Telefone: {telefone}</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={(novoTelefone) => setTelefone(novoTelefone)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "#7454cc",
    borderWidth: 1,
    margin: 5,
  },
});
