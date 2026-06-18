export default function Footer({ navigate }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contacto" style={{ background: "#333", padding: "4rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="footer-grid">
          <div>
            <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>Camila Suárez</h3>
            <p style={{ color: "#aaa", lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Project Manager e Ingeniera Mecatrónica especializada en transformar ideas complejas en soluciones reales que generan impacto.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {["in", "✉", "W"].map((icon, i) => (
                <a key={i} href="#" style={{ width: 40, height: 40, background: "#555", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", fontSize: "0.85rem", transition: "background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#0066CC"}
                  onMouseLeave={e => e.currentTarget.style.background = "#555"}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: "#fff", fontSize: "1rem", fontWeight: 600, marginBottom: "1.25rem" }}>Enlaces</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[["Sobre mí", "sobre-mi"], ["Servicios", "servicios"], ["Proyectos", "proyectos"], ["Blog", "blog"]].map(([label, id]) => (
                <li key={id}>
                  <button
                    onClick={() => id === "blog" ? navigate("blog") : scrollTo(id)}
                    style={{ background: "none", border: "none", color: "#aaa", cursor: "pointer", fontFamily: "inherit", fontSize: "0.95rem", padding: 0, transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "#aaa"}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#fff", fontSize: "1rem", fontWeight: 600, marginBottom: "1.25rem" }}>Contacto</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ color: "#0066CC" }}>✉</span>
                <span style={{ color: "#aaa", fontSize: "0.95rem" }}>camila@camilasuarez.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ color: "#0066CC" }}>📱</span>
                <span style={{ color: "#aaa", fontSize: "0.95rem" }}>+34 600 123 456</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ color: "#0066CC" }}>📍</span>
                <span style={{ color: "#aaa", fontSize: "0.95rem" }}>Madrid, España</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #555", marginTop: "3rem", paddingTop: "2rem", textAlign: "center" }}>
          <p style={{ color: "#777", fontSize: "0.875rem" }}>© 2024 Camila Suárez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
