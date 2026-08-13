import { createFileRoute, Link } from "@tanstack/react-router";
import greenGoblin from "@/assets/villains/green-goblin.jpg";
import doctorOctopus from "@/assets/villains/doctor-octopus.jpg";
import venom from "@/assets/villains/venom.jpg";
import sandman from "@/assets/villains/sandman.jpg";
import lizard from "@/assets/villains/lizard.jpg";
import mysterio from "@/assets/villains/mysterio.jpg";
import webTexture from "@/assets/web-texture.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeria de Vilões | Teia Urbana" },
      {
        name: "description",
        content:
          "Galeria completa dos vilões do Homem-Aranha: Duende Verde, Doutor Octopus, Venom, Homem-Areia, Lagarto e Mysterio.",
      },
      {
        property: "og:title",
        content: "Galeria de Vilões | Teia Urbana",
      },
      {
        property: "og:description",
        content:
          "Conheça os vilões mais icônicos do Homem-Aranha em um visual de quadrinhos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

const galeria = [
  {
    nome: "Duende Verde",
    tag: "Norman Osborn",
    texto:
      "O primeiro grande inimigo do Aranha. Armado com um planador high-tech, bombas em formato de abóbora e uma mente instável, ele representa a sombra de poder sem responsabilidade.",
    imagem: greenGoblin,
    cor: "bg-primary",
  },
  {
    nome: "Doutor Octopus",
    tag: "Otto Octavius",
    texto:
      "Quatro braços mecânicos controlados por uma interface neural. O cérebro por trás dos tentáculos é brilhante — e perigosamente egocêntrico.",
    imagem: doctorOctopus,
    cor: "bg-secondary",
  },
  {
    nome: "Venom",
    tag: "Simbionte",
    texto:
      "Um traje alienígena vivo que se fundiu ao DNA do herói antes de encontrar um novo hospedeiro. Conhece todos os segredos do Aranha.",
    imagem: venom,
    cor: "bg-muted",
  },
  {
    nome: "Homem-Areia",
    tag: "Flint Marko",
    texto:
      "Após um acidente com partículas radioativas, seu corpo virou areia viva. Quanto mais espalhado, mais difícil de deter.",
    imagem: sandman,
    cor: "bg-primary",
  },
  {
    nome: "Lagarto",
    tag: "Curt Connors",
    texto:
      "Um cientista que tentava regenerar membros usando DNA de répteis. A cura funcionou — mas transformou o homem em fera.",
    imagem: lizard,
    cor: "bg-secondary",
  },
  {
    nome: "Mysterio",
    tag: "Quentin Beck",
    texto:
      "Mestre das ilusões e efeitos especiais. Seus truques confundem olhos e câmeras, forçando o Aranha a confiar apenas no sentido aranha.",
    imagem: mysterio,
    cor: "bg-muted",
  },
];

function Gallery() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 border-b-2 border-ink/60 bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="font-display text-2xl tracking-wide text-primary">
            TEIA<span className="text-secondary">URBANA</span>
          </Link>
          <ul className="hidden gap-6 text-sm font-semibold uppercase tracking-widest md:flex">
            {[
              ["Início", "/"],
              ["Origem", "/#origem"],
              ["Poderes", "/#poderes"],
              ["Vilões", "/#viloes"],
            ].map(([label, id]) => (
              <li key={id}>
                <Link to={id} className="text-muted-foreground transition-colors hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main
        className="relative border-b-2 border-ink/60 py-20"
        style={{ backgroundImage: `url(${webTexture})`, backgroundSize: "520px" }}
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="mb-3 inline-block comic-border bg-primary px-3 py-1 font-display text-lg tracking-widest text-primary-foreground">
              GALERIA COMPLETA
            </p>
            <h1 className="font-display text-5xl leading-none text-outline text-web sm:text-7xl">
              OS VILÕES
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Cada um deles testou o herói de um jeito diferente. Conheça os antagonistas
              que fizeram história nas páginas e nas telas.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galeria.map((v) => (
              <article
                key={v.nome}
                className="comic-border group overflow-hidden bg-card transition-transform hover:-translate-y-2"
              >
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
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground ${v.cor}`}
                  >
                    {v.tag}
                  </span>
                  <h2 className="mt-2 font-display text-3xl tracking-wide text-foreground">
                    {v.nome}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.texto}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/"
              className="comic-border inline-flex items-center gap-2 bg-primary px-8 py-4 font-display text-xl tracking-wider text-primary-foreground transition-transform hover:-translate-y-1"
            >
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-ink py-8">
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
