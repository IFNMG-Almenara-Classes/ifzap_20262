import { atualizarContato, getContato } from "@/src/api/contatosApi";
import FormularioContato from "@/src/componentes/FormularioContato";
import { ContatoType } from "@/src/tipos/types";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function EditarPage() {
  const { id } = useLocalSearchParams();
  const [contato, setContato] = useState<ContatoType | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function carregarContato() {
      const dado = await getContato(Number(id));
      setContato(dado);
    }
    carregarContato();
  }, [id]);

  const onSalvar = async (contato: ContatoType) => {
    await atualizarContato(contato);
    router.back();
  };

  return (
    <View>
      {contato && <FormularioContato contato={contato} onSalvar={onSalvar} />}
    </View>
  );
}
