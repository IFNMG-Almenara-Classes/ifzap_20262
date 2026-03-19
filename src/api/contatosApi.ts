import { ContatoType } from "../tipos/types";

const contatos: ContatoType[] = [];
let proximoId = 1;

export function getContatos(): ContatoType[] {
  return contatos;
}

export async function criarContato(nome: string, telefone?: string) {
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
