import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { articles } from "../data/articles";

const services = [
  { icon: "🚀", title: "Dirección de Proyectos Ágiles", desc: "Fractional Leadership para empresas que necesitan experiencia senior sin compromiso a largo plazo. Implemento metodologías ágiles adaptadas a tu contexto." },
  { icon: "⚙️", title: "Consultoría en Optimización", desc: "Analizo y optimizo productos, procesos y equipos IT. Identifico cuellos de botella y diseño estrategias de mejora continua." },
  { icon: "💻", title: "Diseño de Soluciones Tecnológicas", desc: "Arquitecto soluciones técnicas escalables y sostenibles, conectando necesidades de negocio con implementación tecnológica." },
  { icon: "🎓", title: "Formación y Mentoría", desc: "Capacito equipos en metodologías ágiles, liderazgo técnico y mejores prácticas de desarrollo de productos." },
  { icon: "📊", title: "Product Strategy", desc: "Defino roadmaps de producto alineados con los objetivos de negocio, priorizando features con mayor impacto y retorno de inversión." },
  { icon: "🔄", title: "Transformación Digital", desc: "Guío a organizaciones en su proceso de transformación digital, desde la estrategia hasta la implementación y adopción." },
];

const projects = [
  { title: "Plataforma E-commerce B2B", company: "TechRetail S.A.", tags: ["Agile", "Scrum", "React"], result: "Lanzamiento 3 meses antes del plazo con 40% más de features" },
  { title: "Migración Cloud Enterprise", company: "FinCorp Group", tags: ["Cloud", "AWS", "Migration"], result: "Reducción del 35% en costos operativos y 99.9% uptime" },
  { title: "App de Gestión de Flotas", company: "LogiTrans", tags: ["IoT", "Mobile", "Scrum"], result: "15% de reducción en costos de mantenimiento y mejora en tracking" },
  { title: "Sistema de BI y Analytics", company: "DataHealth", tags: ["BI", "Analytics", "Python"], result: "Tiempo de análisis reducido de 5 días a 4 horas" },
];

const testimonials = [
  { name: "Ana García", role: "CEO, StartupTech", text: "Camila transformó completamente nuestro proceso de desarrollo. En 6 meses pasamos de un equipo caótico a uno altamente eficiente. Su capacidad de liderazgo es excepcional." },
  { name: "Carlos Rodríguez", role: "CTO, InnovateCorp", text: "La experiencia técnica de Camila combinada con su visión estratégica fue clave para el éxito de nuestra transformación digital. Definitivamente la recomendaría." },
  { name: "Miguel Torres", role: "Product Manager, DataCorp", text: "Trabajar con Camila fue una masterclass en gestión de proyectos. Su visión estratégica y capacidad de ejecución nos permitió lanzar nuestro producto estrella 3 meses antes de lo previsto." },
];

export default function HomePage({ navigate }) {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const featuredArticles = articles.slice(0, 3);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#333" }}>
      <Navbar navigate={navigate} currentPage="home" />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #e8f2ff 0%, #ffffff 60%)", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem", width: "100%" }}>
          <div className="hero-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <p style={{ color: "#0066CC", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Project Manager · Ingeniera Mecatrónica</p>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.15, color: "#222", margin: 0 }}>
                  Lidero proyectos complejos con enfoque humano y resultados medibles
                </h1>
              </div>
              <p style={{ fontSize: "1.15rem", color: "#555", lineHeight: 1.7, margin: 0 }}>
                De la industria al software, conecto equipos con soluciones reales. Transformo ideas en productos exitosos.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="https://wa.me/34600123456" target="_blank" rel="noreferrer" className="btn-primary">
                  📱 Contactar por WhatsApp
                </a>
                <button onClick={() => { const el = document.getElementById("proyectos"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} className="btn-outline">
                  Ver mi trabajo
                </button>
              </div>
              <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
                {[["10+", "Años de experiencia"], ["50+", "Proyectos completados"], ["98%", "Clientes satisfechos"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: "2rem", fontWeight: 800, color: "#0066CC" }}>{n}</div>
                    <div style={{ fontSize: "0.85rem", color: "#777" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual" style={{ background: "linear-gradient(135deg, #0066CC 0%, #004499 100%)", borderRadius: "1.5rem", padding: "3rem 2rem", display: "flex", flexDirection: "column", gap: "1.25rem", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 100, height: 100, background: "rgba(255,255,255,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>👩‍💼</div>
              <div style={{ textAlign: "center" }}>
                <h2 style={{ color: "#fff", fontWeight: 700, fontSize: "1.4rem", margin: "0 0 0.5rem" }}>Camila Suárez</h2>
                <p style={{ color: "rgba(255,255,255,0.75)", margin: 0, fontSize: "0.95rem" }}>Project Manager & Ingeniera Mecatrónica</p>
              </div>
              {[["🚀", "Liderazgo Ágil"], ["💡", "Innovación"], ["🎯", "Resultados"]].map(([icon, label]) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.12)", borderRadius: "0.75rem", padding: "0.75rem 1.25rem", display: "flex", gap: "0.75rem", alignItems: "center", width: "100%", maxWidth: 240 }}>
                  <span style={{ fontSize: "1.25rem" }}>{icon}</span>
                  <span style={{ color: "#fff", fontWeight: 500, fontSize: "0.95rem" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" style={{ padding: "5rem 1.5rem", background: "#f9fafb" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="about-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#222", margin: 0 }}>Sobre mí</h2>
              <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.05rem" }}>
                Con más de 10 años de experiencia en ingeniería mecatrónica y gestión de proyectos, he desarrollado una perspectiva única que combina rigor técnico con liderazgo humano. Mi pasión es transformar desafíos complejos en oportunidades de crecimiento.
              </p>
              <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.05rem" }}>
                Especializada en metodologías ágiles, he liderado equipos multidisciplinarios desde startups hasta corporaciones, siempre enfocándome en resultados medibles y desarrollo del talento. Mi enfoque integra visión estratégica, ejecución técnica y comunicación efectiva.
              </p>
              <div className="skills-grid">
                {[["Scrum / Kanban", 95], ["Product Management", 90], ["Liderazgo de Equipos", 92], ["Transformación Digital", 88]].map(([skill, pct]) => (
                  <div key={skill}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                      <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "#444" }}>{skill}</span>
                      <span style={{ fontSize: "0.85rem", color: "#0066CC", fontWeight: 600 }}>{pct}%</span>
                    </div>
                    <div style={{ background: "#e5e7eb", borderRadius: 99, height: 7 }}>
                      <div style={{ width: `${pct}%`, background: "linear-gradient(90deg, #0066CC, #3399ff)", height: "100%", borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: "🏆", title: "Liderazgo", desc: "Guío equipos hacia objetivos claros con metodologías probadas" },
                { icon: "💡", title: "Innovación", desc: "Busco soluciones creativas a problemas complejos" },
                { icon: "🎯", title: "Resultados", desc: "Entrego proyectos a tiempo, dentro del presupuesto y con calidad" },
                { icon: "🤝", title: "Colaboración", desc: "Construyo puentes entre negocio y tecnología" },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ background: "#fff", borderRadius: "1rem", padding: "1.25rem 1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0, marginTop: 2 }}>{icon}</span>
                  <div>
                    <h4 style={{ fontWeight: 700, color: "#222", margin: "0 0 0.25rem" }}>{title}</h4>
                    <p style={{ color: "#666", fontSize: "0.9rem", margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#222", marginBottom: "1rem" }}>Servicios</h2>
            <p style={{ color: "#666", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto" }}>
              Ofrezco soluciones integrales para empresas que buscan optimizar sus procesos, desarrollar productos innovadores y potenciar sus equipos
            </p>
          </div>
          <div className="services-grid">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="card-hover" style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "1rem", padding: "2rem 1.75rem", transition: "box-shadow 0.2s, transform 0.2s" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
                <h3 style={{ fontWeight: 700, color: "#222", marginBottom: "0.75rem", fontSize: "1.1rem" }}>{title}</h3>
                <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" style={{ padding: "5rem 1.5rem", background: "#f9fafb" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#222", marginBottom: "1rem" }}>Proyectos Destacados</h2>
            <p style={{ color: "#666", fontSize: "1.05rem" }}>Casos de éxito que demuestran el impacto de una gestión eficaz</p>
          </div>
          <div className="projects-grid">
            {projects.map(({ title, company, tags, result }) => (
              <div key={title} className="card-hover" style={{ background: "#fff", borderRadius: "1rem", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", transition: "box-shadow 0.2s, transform 0.2s" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 44, height: 44, background: "#e8f2ff", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>📦</div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: "#222", margin: "0 0 0.25rem", fontSize: "1.05rem" }}>{title}</h3>
                    <p style={{ color: "#0066CC", fontSize: "0.875rem", fontWeight: 500, margin: 0 }}>{company}</p>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                  {tags.map(t => (
                    <span key={t} style={{ background: "#e8f2ff", color: "#0066CC", fontSize: "0.78rem", fontWeight: 600, padding: "0.2rem 0.65rem", borderRadius: 99 }}>{t}</span>
                  ))}
                </div>
                <div style={{ background: "#f0fdf4", borderLeft: "3px solid #22c55e", padding: "0.75rem 1rem", borderRadius: "0 0.5rem 0.5rem 0" }}>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: "#15803d", fontWeight: 500 }}>✓ {result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section id="blog" style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#222", marginBottom: "0.5rem" }}>Blog y Publicaciones</h2>
              <p style={{ color: "#666", margin: 0 }}>Insights sobre liderazgo técnico y metodologías ágiles</p>
            </div>
            <button onClick={() => navigate("blog")} className="btn-primary" style={{ whiteSpace: "nowrap" }}>Ver todos los artículos →</button>
          </div>
          <div className="blog-grid">
            {featuredArticles.map(article => (
              <div key={article.id} className="card-hover" style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "1rem", overflow: "hidden", transition: "box-shadow 0.2s, transform 0.2s" }}>
                <div style={{ background: "linear-gradient(135deg, #0066CC 0%, #3399ff 100%)", height: 120, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                  {article.category === "linkedin" ? "💼" : "📝"}
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem", alignItems: "center" }}>
                    <span style={{ background: article.category === "linkedin" ? "#dbeafe" : "#dcfce7", color: article.category === "linkedin" ? "#1d4ed8" : "#15803d", fontSize: "0.78rem", fontWeight: 600, padding: "0.2rem 0.65rem", borderRadius: 99, textTransform: "capitalize" }}>
                      {article.category}
                    </span>
                    <span style={{ color: "#999", fontSize: "0.8rem" }}>{article.dateLabel}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, color: "#222", fontSize: "1rem", lineHeight: 1.4, marginBottom: "0.75rem" }}>{article.title}</h3>
                  <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem" }}>{article.excerpt}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#999", fontSize: "0.8rem" }}>⏱ {article.readTime}</span>
                    <button onClick={() => navigate("article", article)} style={{ color: "#0066CC", fontWeight: 600, fontSize: "0.9rem", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                      Leer más →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" style={{ padding: "5rem 1.5rem", background: "#f9fafb" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#222", textAlign: "center", marginBottom: "3rem" }}>Testimonios</h2>
          <div style={{ background: "#fff", borderRadius: "1.5rem", padding: "3rem 2.5rem", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", position: "relative" }}>
            <div style={{ fontSize: "3rem", color: "#0066CC", lineHeight: 1, marginBottom: "1rem" }}>"</div>
            <p style={{ fontSize: "1.1rem", color: "#444", lineHeight: 1.8, fontStyle: "italic", marginBottom: "2rem" }}>
              {testimonials[testimonialIdx].text}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: 48, height: 48, background: "#e8f2ff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>👤</div>
              <div>
                <div style={{ fontWeight: 700, color: "#222" }}>{testimonials[testimonialIdx].name}</div>
                <div style={{ color: "#666", fontSize: "0.875rem" }}>{testimonials[testimonialIdx].role}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginTop: "2rem" }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)} style={{ width: 10, height: 10, borderRadius: "50%", background: i === testimonialIdx ? "#0066CC" : "#ddd", border: "none", cursor: "pointer", padding: 0, transition: "background 0.2s" }} />
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1.5rem" }}>
            <button onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)} className="btn-outline" style={{ padding: "0.6rem 1.25rem" }}>← Anterior</button>
            <button onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)} className="btn-outline" style={{ padding: "0.6rem 1.25rem" }}>Siguiente →</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #0066CC 0%, #004499 100%)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: "1.5rem" }}>¿Listos para escalar tu proyecto?</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Conectemos para transformar tus desafíos en oportunidades de crecimiento.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/34600123456" target="_blank" rel="noreferrer" style={{ background: "#fff", color: "#0066CC", padding: "0.875rem 2rem", borderRadius: "0.5rem", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              📱 Contactar por WhatsApp
            </a>
            <a href="mailto:camila@camilasuarez.com" style={{ border: "2px solid #fff", color: "#fff", padding: "0.875rem 2rem", borderRadius: "0.5rem", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              ✉ Enviar email
            </a>
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}
