import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function NovoPage() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(novoNome) => setNome(novoNome)}
      />
      <Text>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={(novoTelefone) => setTelefone(novoTelefone)}
      />
      <Button title="Salvar" onPress={() => console.log("Salvar contato")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: "#7454cc",
    borderWidth: 1,
    margin: 5,
  },
});
