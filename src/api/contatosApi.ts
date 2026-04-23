import { ContatoType } from "../tipos/types";

const contatos: ContatoType[] = [];
let proximoId = 1;

export async function getContatos(): Promise<ContatoType[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return contatos;
}

export async function criarContato(nome: string, telefone?: string) {
  //sleep
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const novoContato: ContatoType = {
    id: proximoId,
    nome: nome,
    telefone: telefone,
    online: false,
  };
  contatos.push(novoContato);
  proximoId++;
  console.log("CriarContato Executada!");
}
