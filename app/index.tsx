import { getContatos } from "@/src/api/contatosApi";
import Contato from "@/src/componentes/Contato";
import { useRouter } from "expo-router";
import { Button, FlatList, View } from "react-native";

export default function Index() {
  const contatos = getContatos();
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Button title="Novo contato" onPress={() => router.navigate("/novo")} />
      <FlatList
        data={contatos}
        renderItem={({ item, index }) => <Contato key={index} contato={item} />}
      />
    </View>
  );
}
