import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function NovoPage() {
  const [nome, setNome] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <Text>Nome: {nome}</Text>
      <TextInput
        style={styles.inputNome}
        value={nome}
        onChangeText={(novoNome) => setNome(novoNome)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputNome: {
    borderColor: "#7454cc",
    borderWidth: 1,
    margin: 5,
  },
});
