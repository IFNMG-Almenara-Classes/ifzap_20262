import AsyncStorage from "@react-native-async-storage/async-storage";
import { ContatoType } from "../tipos/types";

export async function getContatos(): Promise<ContatoType[]> {
  const contatosString = await AsyncStorage.getItem("contatos");
  const contatos = JSON.parse(contatosString || "[]") as ContatoType[];
  return contatos;
}

export async function criarContato(nome: string, telefone?: string) {
  const contatos = await getContatos();
  const proximoId = contatos.length + 1;

  const novoContato: ContatoType = {
    id: proximoId,
    nome: nome,
    telefone: telefone,
    online: false,
  };
  contatos.push(novoContato);
  await AsyncStorage.setItem("contatos", JSON.stringify(contatos));
  console.log("CriarContato Executada!");
}
