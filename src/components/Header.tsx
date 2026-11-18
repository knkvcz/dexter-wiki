import type { Tema } from "../data/tipos";

type HeaderProps = {
  tema: Tema;
  onAlternarTema: () => void;
};

function Header({ tema, onAlternarTema }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header-titulo">Dexter Wiki</h1>
      <nav className="header-nav">
        <a href="#personagens">Personagens</a>
        <a href="#series">Séries</a>
        <button className="btn-tema" onClick={onAlternarTema}>
          {tema === "escuro" ? "☀ Modo claro" : "🌙 Modo escuro"}
        </button>
      </nav>
    </header>
  );
}

export default Header;