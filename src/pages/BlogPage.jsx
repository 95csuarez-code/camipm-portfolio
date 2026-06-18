import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { articles } from "../data/articles";

export default function BlogPage({ navigate }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = articles.filter(a => {
    const matchCat = filter === "all" || a.category === filter;
    const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#333" }}>
      <Navbar navigate={navigate} currentPage="blog" />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #e8f2ff 0%, #ffffff 60%)", paddingTop: "6rem", paddingBottom: "3rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, color: "#222", marginBottom: "1rem" }}>Blog y Publicaciones</h1>
          <p style={{ color: "#666", fontSize: "1.1rem", lineHeight: 1.7 }}>
            Insights sobre liderazgo técnico, metodologías ágiles y transformación digital basados en experiencia práctica y casos reales
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: "1.75rem 1.5rem", background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {[["all", "Todos"], ["linkedin", "LinkedIn"], ["medium", "Medium"]].map(([val, label]) => (
              <button key={val} onClick={() => setFilter(val)} style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "0.5rem",
                border: `2px solid ${filter === val ? "#0066CC" : "#d1d5db"}`,
                background: filter === val ? "#0066CC" : "#fff",
                color: filter === val ? "#fff" : "#555",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "0.9rem",
                transition: "all 0.2s"
              }}>{label}</button>
            ))}
          </div>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", color: "#aaa" }}>🔍</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar artículos..."
              style={{ paddingLeft: "2.5rem", paddingRight: "1rem", paddingTop: "0.6rem", paddingBottom: "0.6rem", border: "1px solid #d1d5db", borderRadius: "0.5rem", fontSize: "0.9rem", width: 260, fontFamily: "inherit", outline: "none" }}
              onFocus={e => e.target.style.borderColor = "#0066CC"}
              onBlur={e => e.target.style.borderColor = "#d1d5db"}
            />
          </div>
        </div>
        <div style={{ maxWidth: "1100px", margin: "0.75rem auto 0", fontSize: "0.875rem", color: "#888" }}>
          Mostrando {filtered.length} artículo{filtered.length !== 1 ? "s" : ""}
        </div>
      </section>

      {/* Articles grid */}
      <section style={{ padding: "3rem 1.5rem 5rem", background: "#f9fafb" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem", color: "#888" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔎</div>
              <p style={{ fontSize: "1.1rem" }}>No se encontraron artículos con esos criterios.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {filtered.map(article => (
                <article key={article.id} className="card-hover" style={{ background: "#fff", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", transition: "box-shadow 0.2s, transform 0.2s" }}>
                  <div style={{ background: "linear-gradient(135deg, #0066CC 0%, #3399ff 100%)", height: 130, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.5rem" }}>
                    {article.category === "linkedin" ? "💼" : "📝"}
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem", alignItems: "center" }}>
                      <span style={{ background: article.category === "linkedin" ? "#dbeafe" : "#dcfce7", color: article.category === "linkedin" ? "#1d4ed8" : "#15803d", fontSize: "0.78rem", fontWeight: 600, padding: "0.2rem 0.65rem", borderRadius: 99, textTransform: "capitalize" }}>
                        {article.category}
                      </span>
                      <span style={{ color: "#999", fontSize: "0.8rem" }}>{article.dateLabel}</span>
                    </div>
                    <h3 style={{ fontWeight: 700, color: "#222", fontSize: "1rem", lineHeight: 1.45, marginBottom: "0.75rem" }}>{article.title}</h3>
                    <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>{article.excerpt}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                      {article.tags.map(t => (
                        <span key={t} style={{ background: "#f3f4f6", color: "#555", fontSize: "0.75rem", padding: "0.2rem 0.6rem", borderRadius: 99 }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.75rem", borderTop: "1px solid #f0f0f0" }}>
                      <div style={{ display: "flex", gap: "1rem", fontSize: "0.8rem", color: "#999" }}>
                        <span>⏱ {article.readTime}</span>
                        {article.views && <span>👁 {article.views}</span>}
                      </div>
                      <button onClick={() => navigate("article", article)} style={{ color: "#0066CC", fontWeight: 600, fontSize: "0.9rem", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                        Leer más →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}
