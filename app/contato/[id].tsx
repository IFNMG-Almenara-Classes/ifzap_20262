import { getContato } from "@/src/api/contatosApi";
import { ContatoType } from "@/src/tipos/types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function EditarPage() {
  const { id } = useLocalSearchParams();
  const [contato, setContato] = useState<ContatoType | null>(null);

  useEffect(() => {
    async function carregarContato() {
      const dado = await getContato(Number(id));
      setContato(dado);
    }
    carregarContato();
  }, [id]);

  return (
    <View>
      <Text>Editando {JSON.stringify(contato)}</Text>
    </View>
  );
}
