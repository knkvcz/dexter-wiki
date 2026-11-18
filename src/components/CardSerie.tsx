import type { Serie } from "../data/tipos";

type CardSerieProps = {
    serie: Serie;
};

function CardSerie({ serie }: CardSerieProps) {
    return (
        <article className="card-serie-item">
            <h3 className="serie-titulo">{serie.titulo}</h3>
            <p className="serie-ano">{serie.ano}</p>
            <p className="serie-descricao">{serie.descricao}</p>
        </article>
    );
}

export default CardSerie;