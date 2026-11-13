import type { Personagem } from "../data/tipos";

type CardPersonagemProps = {
  personagem: Personagem;
  favorito: boolean;
  onFavoritar: (id: number) => void;
};

function CardPersonagem({ personagem, favorito, onFavoritar }: CardPersonagemProps) {
  return (
    <article className={favorito ? "card card-favorito" : "card"}>
      <img className="card-imagem" src={personagem.imagem} alt={personagem.nome} />
      <div className="card-corpo">
        <h3 className="card-nome">{personagem.nome}</h3>
        <p className="card-ator">Interpretado por {personagem.ator}</p>
        <p className="card-serie">{personagem.serie}</p>
        <p className="card-descricao">{personagem.descricao}</p>
        <button
          className={favorito ? "btn-favorito ativo" : "btn-favorito"}
          onClick={() => onFavoritar(personagem.id)}
        >
          {favorito ? "♥ Favorito" : "♡ Favoritar"}
        </button>
      </div>
    </article>
  );
}

export default CardPersonagem;