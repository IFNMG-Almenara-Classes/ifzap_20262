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
  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput style={styles.input} value={contato.nome} />
      <Text>Telefone:</Text>
      <TextInput style={styles.input} value={contato.telefone} />
      <Button title="Salvar" onPress={() => onSalvar(contato)} />
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
