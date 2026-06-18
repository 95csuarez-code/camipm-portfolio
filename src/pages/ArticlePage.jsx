import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { articles } from "../data/articles";

function renderContent(content) {
  return content.map((block, i) => {
    if (block.type === "intro") return (
      <p key={i} style={{ fontSize: "1.2rem", color: "#374151", lineHeight: 1.8, fontWeight: 500, marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid #e5e7eb" }}>{block.text}</p>
    );
    if (block.type === "h2") return (
      <h2 key={i} style={{ fontSize: "1.65rem", fontWeight: 800, color: "#222", marginTop: "2.5rem", marginBottom: "1rem" }}>{block.text}</h2>
    );
    if (block.type === "h3") return (
      <h3 key={i} style={{ fontSize: "1.25rem", fontWeight: 700, color: "#333", marginTop: "1.75rem", marginBottom: "0.75rem" }}>{block.text}</h3>
    );
    if (block.type === "p") return (
      <p key={i} style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.8, marginBottom: "1.25rem" }}>{block.text}</p>
    );
    if (block.type === "blockquote") return (
      <blockquote key={i} style={{ borderLeft: "4px solid #0066CC", paddingLeft: "1.5rem", margin: "2rem 0", fontStyle: "italic", color: "#6B7280", fontSize: "1.05rem", lineHeight: 1.7 }}>
        {block.text}
      </blockquote>
    );
    if (block.type === "ul") return (
      <ul key={i} style={{ paddingLeft: "1.75rem", margin: "1.25rem 0", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {block.items.map((item, j) => (
          <li key={j} style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.7 }}>{item}</li>
        ))}
      </ul>
    );
    return null;
  });
}

export default function ArticlePage({ article, navigate }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [newComment, setNewComment] = useState({ name: "", email: "", text: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("article-body");
      if (!el) return;
      const top = el.offsetTop;
      const height = el.offsetHeight;
      const scrolled = window.scrollY - top;
      const progress = Math.min(Math.max(scrolled / height, 0), 1);
      setScrollProgress(progress * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const relatedArticles = articles.filter(a => a.id !== article?.id).slice(0, 3);

  if (!article) return null;

  const handleComment = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setNewComment({ name: "", email: "", text: "" });
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#333" }}>
      {/* Reading progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, width: `${scrollProgress}%`, height: 3, background: "linear-gradient(90deg, #0066CC, #3399ff)", zIndex: 200, transition: "width 0.15s" }} />

      <Navbar navigate={navigate} currentPage="article" />

      {/* Article header */}
      <section style={{ background: "linear-gradient(135deg, #e8f2ff 0%, #ffffff 100%)", paddingTop: "6rem", paddingBottom: "3rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <button onClick={() => navigate("blog")} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#0066CC", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "0.95rem", fontWeight: 600, marginBottom: "1.5rem" }}>
            ← Volver al blog
          </button>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "1.25rem" }}>
            {[article.category, ...article.tags].map(t => (
              <span key={t} style={{ background: "#e8f2ff", color: "#0066CC", fontSize: "0.8rem", fontWeight: 600, padding: "0.25rem 0.75rem", borderRadius: 99, textTransform: "capitalize" }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#222", lineHeight: 1.25, marginBottom: "1.5rem" }}>{article.title}</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center", color: "#777", fontSize: "0.9rem" }}>
            <span>📅 {article.dateLabel}</span>
            <span>⏱ {article.readTime}</span>
            {article.views && <span>👁 {article.views} vistas</span>}
            {article.comments && <span>💬 {article.comments.length} comentarios</span>}
          </div>
        </div>
      </section>

      {/* Article body */}
      <article id="article-body" style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        {article.content && renderContent(article.content)}

        {/* Share */}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #e5e7eb" }}>
          <h3 style={{ fontWeight: 700, color: "#333", marginBottom: "1rem" }}>Compartir artículo</h3>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {[["LinkedIn", "#2563eb"], ["Twitter/X", "#374151"], ["WhatsApp", "#16a34a"]].map(([label, bg]) => (
              <button key={label} style={{ background: bg, color: "#fff", padding: "0.6rem 1.25rem", borderRadius: "0.5rem", border: "none", cursor: "pointer", fontFamily: "inherit", fontWeight: 600, fontSize: "0.875rem" }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </article>

      {/* Author bio */}
      <section style={{ background: "#f9fafb", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ background: "#fff", borderRadius: "1.25rem", padding: "2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", gap: "1.5rem", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ width: 72, height: 72, background: "linear-gradient(135deg, #0066CC, #3399ff)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", flexShrink: 0 }}>👩‍💼</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: 700, color: "#222", marginBottom: "0.25rem" }}>Camila Suárez</h3>
              <p style={{ color: "#0066CC", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.75rem" }}>Project Manager & Ingeniera Mecatrónica</p>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Con más de 10 años de experiencia en ingeniería mecatrónica y gestión de proyectos, comparte insights sobre liderazgo técnico y metodologías ágiles basados en casos reales.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
                {["LinkedIn", "Email", "WhatsApp"].map(s => (
                  <a key={s} href="#" style={{ fontSize: "0.8rem", color: "#0066CC", fontWeight: 600, textDecoration: "none" }}>{s}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments */}
      <section style={{ padding: "3rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h3 style={{ fontWeight: 800, color: "#222", fontSize: "1.5rem", marginBottom: "2rem" }}>
            Comentarios {article.comments?.length ? `(${article.comments.length})` : ""}
          </h3>

          {article.comments && article.comments.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {article.comments.map((c, i) => (
                <div key={i} style={{ paddingBottom: "1.5rem", borderBottom: "1px solid #f0f0f0" }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, background: "#e8f2ff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>👤</div>
                    <div>
                      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.5rem" }}>
                        <span style={{ fontWeight: 700, color: "#222" }}>{c.author}</span>
                        <span style={{ color: "#999", fontSize: "0.8rem" }}>{c.time}</span>
                      </div>
                      <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>{c.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Comment form */}
          <div style={{ background: "#f9fafb", borderRadius: "1rem", padding: "2rem" }}>
            <h4 style={{ fontWeight: 700, color: "#222", marginBottom: "1.5rem" }}>Deja tu comentario</h4>
            {submitted ? (
              <div style={{ background: "#dcfce7", color: "#15803d", padding: "1rem 1.5rem", borderRadius: "0.75rem", fontWeight: 600 }}>
                ✓ Gracias por tu comentario. Será revisado antes de publicarse.
              </div>
            ) : (
              <form onSubmit={handleComment} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="comment-form-grid">
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#555", marginBottom: "0.4rem" }}>Nombre *</label>
                    <input required value={newComment.name} onChange={e => setNewComment({ ...newComment, name: e.target.value })}
                      style={{ width: "100%", padding: "0.7rem 1rem", border: "1px solid #d1d5db", borderRadius: "0.5rem", fontSize: "0.95rem", fontFamily: "inherit", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#555", marginBottom: "0.4rem" }}>Email *</label>
                    <input required type="email" value={newComment.email} onChange={e => setNewComment({ ...newComment, email: e.target.value })}
                      style={{ width: "100%", padding: "0.7rem 1rem", border: "1px solid #d1d5db", borderRadius: "0.5rem", fontSize: "0.95rem", fontFamily: "inherit", boxSizing: "border-box" }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#555", marginBottom: "0.4rem" }}>Comentario *</label>
                  <textarea required rows={5} value={newComment.text} onChange={e => setNewComment({ ...newComment, text: e.target.value })}
                    placeholder="Comparte tu experiencia o pregunta..."
                    style={{ width: "100%", padding: "0.7rem 1rem", border: "1px solid #d1d5db", borderRadius: "0.5rem", fontSize: "0.95rem", fontFamily: "inherit", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <button type="submit" className="btn-primary">Publicar comentario</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section style={{ padding: "3rem 1.5rem 5rem", background: "#f9fafb" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h3 style={{ fontWeight: 800, color: "#222", fontSize: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>Artículos relacionados</h3>
          <div className="blog-grid">
            {relatedArticles.map(a => (
              <div key={a.id} className="card-hover" style={{ background: "#fff", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", transition: "box-shadow 0.2s, transform 0.2s" }}>
                <div style={{ background: "linear-gradient(135deg, #0066CC 0%, #3399ff 100%)", height: 110, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                  {a.category === "linkedin" ? "💼" : "📝"}
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <span style={{ background: "#e8f2ff", color: "#0066CC", fontSize: "0.75rem", fontWeight: 600, padding: "0.15rem 0.55rem", borderRadius: 99, textTransform: "capitalize" }}>{a.category}</span>
                    <span style={{ color: "#999", fontSize: "0.8rem" }}>{a.dateLabel}</span>
                  </div>
                  <h4 style={{ fontWeight: 700, color: "#222", fontSize: "0.95rem", lineHeight: 1.45, marginBottom: "0.75rem" }}>{a.title}</h4>
                  <button onClick={() => { navigate("article", a); window.scrollTo(0,0); }} style={{ color: "#0066CC", fontWeight: 600, fontSize: "0.875rem", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", padding: 0 }}>
                    Leer artículo →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}
