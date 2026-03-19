import { criarContato } from "@/src/api/contatosApi";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function NovoPage() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const router = useRouter();

  function salvarContato() {
    criarContato(nome, telefone)
      .then(() => {
        alert("Contato criado com sucesso!");
        router.back();
      })
      .catch((error) => {
        alert("Erro ao criar contato: " + error.message);
      })
      .finally(() => {
        console.log("Operação de criação de contato finalizada.");
      });
  }

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
      <Button title="Salvar" onPress={() => salvarContato()} />
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
