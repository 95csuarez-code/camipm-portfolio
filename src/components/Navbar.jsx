import { useState } from "react";

export default function Navbar({ navigate, currentPage = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    if (currentPage !== "home") {
      navigate("home");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, background: "#fff", boxShadow: "0 1px 8px rgba(0,0,0,0.08)", zIndex: 50 }}>
      <nav style={{ padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button
          onClick={() => navigate("home")}
          style={{ fontSize: "1.3rem", fontWeight: 700, color: "#333", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
        >
          Camila Suárez
        </button>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <button onClick={() => scrollTo("sobre-mi")} className="nav-link">Sobre mí</button>
          <button onClick={() => scrollTo("servicios")} className="nav-link">Servicios</button>
          <button onClick={() => scrollTo("proyectos")} className="nav-link">Proyectos</button>
          <button
            onClick={() => navigate("blog")}
            className="nav-link"
            style={{ color: currentPage === "blog" || currentPage === "article" ? "#0066CC" : "#333", fontWeight: currentPage === "blog" || currentPage === "article" ? 600 : 400 }}
          >
            Blog
          </button>
          <button onClick={() => scrollTo("contacto")} className="nav-link">Contacto</button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.5rem", color: "#333" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #eee", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <button onClick={() => scrollTo("sobre-mi")} className="nav-link" style={{ textAlign: "left" }}>Sobre mí</button>
          <button onClick={() => scrollTo("servicios")} className="nav-link" style={{ textAlign: "left" }}>Servicios</button>
          <button onClick={() => scrollTo("proyectos")} className="nav-link" style={{ textAlign: "left" }}>Proyectos</button>
          <button onClick={() => { navigate("blog"); setMenuOpen(false); }} className="nav-link" style={{ textAlign: "left", color: "#0066CC" }}>Blog</button>
          <button onClick={() => scrollTo("contacto")} className="nav-link" style={{ textAlign: "left" }}>Contacto</button>
        </div>
      )}
    </header>
  );
}
