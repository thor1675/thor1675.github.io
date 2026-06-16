type Project = {
  title: string;
  period: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "World Cup Showcase",
    period: "2026.6 –",
    description:
      "FIFA ワールドカップの歴史・強豪国・次回大会（2026 北中米共催）を集約した個人ファンサイト。Server / Client Components のハイブリッド構成、動的ルーティング ([year] / [country])、GitHub API 連携など、Next.js の主要機能を実装しながら学習。",
    tech: [
      "Next.js 16",
      "App Router",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub API",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thor1675/world-cup-showcase",
      },
    ],
  },
  {
    title: "thor1675.github.io（このサイト）",
    period: "2026.6 –",
    description:
      "個人ポートフォリオサイト。研究活動・プロジェクトを記録するためのハブとして構築。Next.js の静的エクスポート機能を用いて GitHub Pages にデプロイ。",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "GitHub Pages"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thor1675/thor1675.github.io",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Projects</h1>
      <p className="text-zinc-500 text-sm mb-10">これまでの制作物</p>

      <div className="space-y-12">
        {projects.map((p) => (
          <article key={p.title} className="border-l-2 border-zinc-200 pl-6">
            <h2 className="text-xl font-bold text-zinc-900 mb-1">{p.title}</h2>
            <p className="text-xs text-zinc-500 mb-3 tracking-wider">
              {p.period}
            </p>
            <p className="text-zinc-700 leading-relaxed mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
