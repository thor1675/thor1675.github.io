type Entry = {
  role: string;
  org: string;
  period: string;
  description?: string;
};

const entries: Entry[] = [
  {
    role: "学部生 (B3)",
    org: "法政大学 理工学部 応用情報工学科",
    period: "2024.4 – Present",
  },
  {
    role: "インターン",
    org: "東大松尾研究室発のAI コンサル系スタートアップ",
    period: "2025.5 – Present",
    description:
      "AI を用いた業務課題解決のプロジェクトに参画。要件整理から実装まで幅広く担当。",
  },
  {
    role: "所属",
    org: "彌冨研究室",
    period: "2026.5 – Present",
    description:
      "AI エージェントの記憶機構（Agent Memory）に関する研究を準備中。長期文脈・対話タスクにおける評価ベンチマークの設計に関心。",
  },
];

export default function ExperiencePage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Experience</h1>
      <p className="text-zinc-500 text-sm mb-10">学歴・研究・実務経験</p>

      <div className="space-y-10">
        {entries.map((e) => (
          <div key={e.role + e.org} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8">
            <p className="text-xs text-zinc-500 tracking-wider mt-1">
              {e.period}
            </p>
            <div>
              <p className="font-semibold text-zinc-900">{e.org}</p>
              <p className="text-sm text-zinc-600 mb-2">{e.role}</p>
              {e.description && (
                <p className="text-sm text-zinc-700 leading-relaxed">
                  {e.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
