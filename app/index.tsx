import { getContatos } from "@/src/api/contatosApi";
import Contato from "@/src/componentes/Contato";
import { ContatoType } from "@/src/tipos/types";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

export default function Index() {
  const [contatos, setContatos] = useState<ContatoType[]>([]);
  const [carregando, setCarregando] = useState(false);

  async function carregarContatos() {
    setCarregando(true);
    const contatos = await getContatos();
    setContatos(contatos);
    setCarregando(false);
  }

  useEffect(() => {
    carregarContatos();
    console.log("useEffect executada!");
  }, []);

  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Button title="Novo contato" onPress={() => router.navigate("/novo")} />
      {!carregando && (
        <FlatList
          data={contatos}
          renderItem={({ item, index }) => (
            <Contato key={index} contato={item} />
          )}
        />
      )}
      {carregando && (
        <View>
          <Text>Carregando...</Text>
        </View>
      )}
    </View>
  );
}
