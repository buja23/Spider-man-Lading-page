import { createFileRoute, Link } from "@tanstack/react-router";
import heroSwing from "@/assets/hero-swing.jpg";
import rooftop from "@/assets/rooftop.jpg";
import mask from "@/assets/mask.jpg";
import webTexture from "@/assets/web-texture.jpg";
import greenGoblin from "@/assets/villains/green-goblin.jpg";
import doctorOctopus from "@/assets/villains/doctor-octopus.jpg";
import venom from "@/assets/villains/venom.jpg";
import sandman from "@/assets/villains/sandman.jpg";
import lizard from "@/assets/villains/lizard.jpg";
import mysterio from "@/assets/villains/mysterio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teia Urbana | Tudo sobre o Homem-Aranha" },
      {
        name: "description",
        content:
          "Fã-site do Homem-Aranha: origem, poderes, galeria de vilões, linha do tempo e curiosidades do herói mais amigo da vizinhança.",
      },
      { property: "og:title", content: "Teia Urbana | Tudo sobre o Homem-Aranha" },
      {
        property: "og:description",
        content:
          "Origem, poderes, vilões e curiosidades do Homem-Aranha em um visual de quadrinhos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const poderes = [
  { titulo: "Força Aracnídea", texto: "Levanta cerca de 10 toneladas e desvia de socos antes deles chegarem.", num: "01" },
  { titulo: "Sentido Aranha", texto: "Um formigamento na nuca que avisa do perigo alguns instantes antes.", num: "02" },
  { titulo: "Aderência Total", texto: "Escala vidro, concreto e teto como se a gravidade fosse opcional.", num: "03" },
  { titulo: "Teias Sintéticas", texto: "Fórmula criada por Peter Parker, disparada pelos lança-teias no pulso.", num: "04" },
];

const viloes = [
  { nome: "Duende Verde", tag: "Norman Osborn", texto: "Planador, bombas-abóbora e uma obsessão pessoal pelo Aranha.", imagem: greenGoblin },
  { nome: "Doutor Octopus", tag: "Otto Octavius", texto: "Quatro braços mecânicos comandados por uma mente brilhante e quebrada.", imagem: doctorOctopus },
  { nome: "Venom", tag: "Simbionte", texto: "O traje vivo que conhece cada segredo do herói — e o odeia.", imagem: venom },
  { nome: "Homem-Areia", tag: "Flint Marko", texto: "Um corpo de areia que nenhum soco consegue derrubar de vez.", imagem: sandman },
  { nome: "Lagarto", tag: "Curt Connors", texto: "Um cientista que quis regenerar um braço e perdeu a humanidade.", imagem: lizard },
  { nome: "Mysterio", tag: "Quentin Beck", texto: "Ilusões tão perfeitas que o sentido aranha vira o único juiz.", imagem: mysterio },
];

const timeline = [
  { ano: "1962", texto: "Estreia em Amazing Fantasy #15 e muda o que um herói adolescente pode ser." },
  { ano: "1963", texto: "Ganha revista própria e enfrenta o Camaleão na primeira edição." },
  { ano: "1984", texto: "O traje preto aparece e planta a semente de Venom." },
  { ano: "2002", texto: "O primeiro grande filme leva o balanço entre prédios para o cinema." },
  { ano: "2018", texto: "O Aranhaverso prova que qualquer um pode usar a máscara." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 border-b-2 border-ink/60 bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#topo" className="font-display text-2xl tracking-wide text-primary">
            TEIA<span className="text-secondary">URBANA</span>
          </a>
          <ul className="hidden gap-6 text-sm font-semibold uppercase tracking-widest md:flex">
            {[
              ["Origem", "origem"],
              ["Poderes", "poderes"],
              ["Vilões", "viloes"],
              ["Linha do tempo", "timeline"],
              ["Galeria", "/gallery"],
            ].map(([label, id]) => {
              const isRoute = id.startsWith("/");
              return (
                <li key={id}>
                  {isRoute ? (
                    <Link to={id} className="text-muted-foreground transition-colors hover:text-primary">
                      {label}
                    </Link>
                  ) : (
                    <a href={`#${id}`} className="text-muted-foreground transition-colors hover:text-primary">
                      {label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <img
            src={heroSwing}
            alt="Herói mascarado se balançando por teias entre arranha-céus à noite"
            width={1600}
            height={1000}
            className="h-[78vh] min-h-[460px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-70" />
          <div className="absolute inset-0 halftone opacity-40" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-5 pb-12">
              <p className="mb-3 inline-block comic-border bg-primary px-3 py-1 font-display text-lg tracking-widest text-primary-foreground">
                COM GRANDES PODERES...
              </p>
              <h1 className="font-display text-5xl leading-none text-outline text-web sm:text-7xl md:text-8xl">
                O HOMEM-ARANHA
              </h1>
              <p className="mt-4 max-w-xl text-base text-web/90 sm:text-lg">
                O herói mais amigo da vizinhança: um garoto de Queens, uma picada radioativa
                e uma cidade inteira pendurada em fios de teia.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#personagens"
                  className="comic-border bg-primary px-6 py-3 font-display text-xl tracking-wider text-primary-foreground transition-transform hover:-translate-y-1"
                >
                  Explorar personagens
                </a>
                <Link
                  to="/gallery"
                  className="comic-border bg-secondary px-6 py-3 font-display text-xl tracking-wider text-secondary-foreground transition-transform hover:-translate-y-1"
                >
                  Entrar na galeria
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PERSONAGENS — chamada + destaques */}
        <section id="personagens" className="mx-auto max-w-6xl px-5 py-20">
          <div className="text-center">
            <h2 className="font-display text-4xl tracking-wide text-primary sm:text-5xl">
              Explore o Universo
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
              Heróis, vilões e todos que fazem de Nova York o palco das maiores aventuras.
              Clique em qualquer card para saber mais.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { nome: "Homem-Aranha", tag: "Peter Parker", imagem: mask, cor: "bg-primary" },
              { nome: "Duende Verde", tag: "Norman Osborn", imagem: greenGoblin, cor: "bg-secondary" },
              { nome: "Venom", tag: "Simbionte", imagem: venom, cor: "bg-muted" },
            ].map((p) => (
              <article key={p.nome} className="comic-border group overflow-hidden bg-card transition-transform hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.imagem}
                    alt={`Ilustração de ${p.nome}`}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground ${p.cor}`}>
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-display text-3xl tracking-wide text-foreground">{p.nome}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="comic-border inline-flex items-center gap-2 bg-primary px-8 py-4 font-display text-xl tracking-wider text-primary-foreground transition-transform hover:-translate-y-1"
            >
              Ver galeria completa
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* ORIGEM */}
        <section id="origem" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-primary sm:text-5xl">A Origem</h2>
            <div className="mt-5 space-y-4 text-lg text-muted-foreground">
              <p>
                Peter Parker era um estudante tímido do Brooklyn Visions quando uma aranha
                alterada geneticamente o picou durante uma excursão científica.
              </p>
              <p>
                Na noite seguinte, ele já escalava paredes. Usou os poderes para ganhar
                dinheiro numa luta de ringue — e deixou um ladrão escapar por indiferença.
                Esse mesmo ladrão matou o Tio Ben.
              </p>
              <p className="border-l-4 border-primary pl-4 font-display text-2xl leading-snug text-foreground">
                “Com grandes poderes vêm grandes responsabilidades.”
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={rooftop}
              alt="Herói agachado na borda de um prédio olhando a cidade ao entardecer"
              width={1200}
              height={1400}
              loading="lazy"
              className="comic-border w-full object-cover"
            />
            <span className="absolute -bottom-4 -left-4 comic-border bg-card px-4 py-2 font-display text-xl text-primary">
              QUEENS, NY
            </span>
          </div>
        </section>

        {/* PODERES */}
        <section
          id="poderes"
          className="relative border-y-2 border-ink/60 py-20"
          style={{ backgroundImage: `url(${webTexture})`, backgroundSize: "520px" }}
        >
          <div className="absolute inset-0 bg-background/85" />
          <div className="relative mx-auto max-w-6xl px-5">
            <h2 className="font-display text-4xl tracking-wide text-primary sm:text-5xl">Poderes</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {poderes.map((p) => (
                <article
                  key={p.num}
                  className="comic-border group bg-card p-5 transition-transform hover:-translate-y-2"
                >
                  <span className="font-display text-4xl text-secondary">{p.num}</span>
                  <h3 className="mt-2 font-display text-2xl tracking-wide text-foreground">{p.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MÁSCARA / FRASE */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr]">
          <img
            src={mask}
            alt="Close da máscara vermelha com grandes lentes brancas"
            width={1200}
            height={1200}
            loading="lazy"
            className="comic-border w-full object-cover"
          />
          <div>
            <h2 className="font-display text-4xl tracking-wide text-primary sm:text-5xl">
              Qualquer um pode usar a máscara
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A máscara esconde o rosto justamente para que qualquer pessoa possa se ver
              nela. Peter, Miles, Gwen, Miguel — o traje muda, o princípio não: quem pode
              ajudar, ajuda.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                ["1962", "Estreia"],
                ["60+", "Anos de história"],
                ["∞", "Universos"],
              ].map(([n, l]) => (
                <div key={l} className="comic-border bg-secondary/20 px-2 py-4">
                  <p className="font-display text-3xl text-primary">{n}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VILÕES COM IMAGENS */}
        <section id="viloes" className="border-y-2 border-ink/60 bg-card/40 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-4xl tracking-wide text-primary sm:text-5xl">Galeria de Vilões</h2>
            <p className="mt-2 text-muted-foreground">O melhor elenco de antagonistas dos quadrinhos.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {viloes.map((v) => (
                <article key={v.nome} className="comic-border group overflow-hidden bg-background transition-transform hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={v.imagem}
                      alt={`Ilustração do vilão ${v.nome}`}
                      width={800}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-secondary">{v.tag}</span>
                    <h3 className="mt-1 font-display text-3xl tracking-wide text-foreground">{v.nome}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{v.texto}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/gallery"
                className="comic-border inline-flex items-center gap-2 bg-secondary px-8 py-4 font-display text-xl tracking-wider text-secondary-foreground transition-transform hover:-translate-y-1"
              >
                Abrir galeria completa
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="mx-auto max-w-4xl px-5 py-20">
          <h2 className="font-display text-4xl tracking-wide text-primary sm:text-5xl">Linha do Tempo</h2>
          <ol className="mt-8 space-y-6 border-l-4 border-primary pl-6">
            {timeline.map((t) => (
              <li key={t.ano} className="relative">
                <span className="absolute -left-[2.15rem] top-1 h-4 w-4 rounded-full border-2 border-ink bg-primary" />
                <p className="font-display text-3xl text-secondary">{t.ano}</p>
                <p className="text-muted-foreground">{t.texto}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="border-t-2 border-ink/60 bg-ink py-8">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="font-display text-3xl tracking-widest text-primary">TEIA URBANA</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Fã-site sem fins lucrativos. Personagens e histórias pertencem a seus criadores.
          </p>
        </div>
      </footer>
    </div>
  );
}
