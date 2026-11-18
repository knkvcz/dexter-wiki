import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardPersonagem from "./components/CardPersonagem";
import CardSerie from "./components/CardSerie";
import { series } from "./data/series";
import { buscarPersonagens } from "./data/api";
import type { Personagem, Tema } from "./data/tipos";

function App() {
  const [personagens, setPersonagens] = useState<Personagem[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [tema, setTema] = useState<Tema>("escuro");

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarPersonagens();
        setPersonagens(dados);
      } catch {
        setErro("Não foi possível carregar os personagens. Tente novamente mais tarde.");
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.tema = tema;
  }, [tema]);

  function alternarFavorito(id: number) {
    setFavoritos((atual) =>
      atual.includes(id) ? atual.filter((f) => f !== id) : [...atual, id]
    );
  }

  function alternarTema() {
    setTema((atual) => (atual === "escuro" ? "claro" : "escuro"));
  }

  return (
    <>
      <Header tema={tema} onAlternarTema={alternarTema} />
      <main className="main">
        <section id="personagens" className="secao">
          <h2 className="secao-titulo">Personagens</h2>

          {carregando && (
            <p className="estado-carregando">Carregando personagens...</p>
          )}

          {erro && (
            <p className="estado-erro" role="alert">
              {erro}
            </p>
          )}

          {!carregando && !erro && (
            <>
              <p className="secao-contador">Favoritos: {favoritos.length}</p>
              <div className="grade">
                {personagens.map((p) => (
                  <CardPersonagem
                    key={p.id}
                    personagem={p}
                    favorito={favoritos.includes(p.id)}
                    onFavoritar={alternarFavorito}
                  />
                ))}
              </div>
            </>
          )}
        </section>

        <section id="series" className="secao">
          <h2 className="secao-titulo">Séries</h2>
          <div className="lista-series">
            {series.map((s) => (
              <CardSerie key={s.id} serie={s} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;