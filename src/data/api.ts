import type { Personagem } from "./tipos";

export async function buscarPersonagens(): Promise<Personagem[]> {
  const resposta = await fetch("/personagens.json");

  if (!resposta.ok) {
    throw new Error("Falha ao buscar personagens: " + resposta.status);
  }

  return resposta.json();
}