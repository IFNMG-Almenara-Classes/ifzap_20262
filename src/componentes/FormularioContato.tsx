import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ContatoType } from "../tipos/types";

type FormularioContatoProps = {
  contato: ContatoType;
  onSalvar: (contato: ContatoType) => void;
};

export default function FormularioContato({
  contato,
  onSalvar,
}: FormularioContatoProps) {
  const [contatoEditado, setContatoEditado] = useState<ContatoType>({
    ...contato,
  });

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        value={contatoEditado.nome}
        onChangeText={(novoNome) => {
          setContatoEditado((prev) => ({ ...prev, nome: novoNome }));
        }}
      />
      <Text>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={contatoEditado.telefone}
        onChangeText={(novoTelefone) => {
          setContatoEditado((prev) => ({ ...prev, telefone: novoTelefone }));
        }}
      />
      <Button title="Salvar" onPress={() => onSalvar(contatoEditado)} />
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
