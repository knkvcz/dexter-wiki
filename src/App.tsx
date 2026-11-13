import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardPersonagem from "./components/CardPersonagem";
import CardSerie from "./components/CardSerie";
import { personagens } from "./data/personagens";
import { series } from "./data/series";

function App() {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  function alternarFavorito(id: number) {
    setFavoritos((atual) =>
      atual.includes(id) ? atual.filter((f) => f !== id) : [...atual, id]
    );
  }

  return (
    <>
      <Header />
      <main className="main">
        <section id="personagens" className="secao">
          <h2 className="secao-titulo">Personagens</h2>
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