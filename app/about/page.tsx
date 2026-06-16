export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">About</h1>
      <p className="text-zinc-500 text-sm mb-10">自己紹介と興味分野</p>

      <div className="space-y-10 text-zinc-700 leading-relaxed">
        <div>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Bio</h2>
          <p>
            Ryosei Takagi（髙城 嶺青）— あだ名は Thor。
            法政大学 理工学部 応用情報工学科の 3 年生。
            2026 年 5 月より彌冨研究室に所属し、AI エージェントの記憶機構（Agent Memory）に関する研究を準備中です。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">
            Research Interests
          </h2>
          <ul className="space-y-2 list-disc list-inside marker:text-zinc-400">
            <li>
              <span className="font-semibold text-zinc-900">Agent Memory</span>{" "}
              — エージェントが「自分の過去」をどう記憶し、参照し、忘れるか
            </li>
            <li>
              <span className="font-semibold text-zinc-900">LLM 評価</span> —
              長期文脈・対話タスクにおけるベンチマーク設計
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                Software Engineering
              </span>{" "}
              — Web 開発、研究プロトタイプ、開発者向けツール
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Hobbies</h2>
          <p>
            サッカー観戦が好きで、特に FIFA ワールドカップを毎回楽しみにしている。
            その延長として、Next.js の学習も兼ねて
            <a
              href="https://github.com/thor1675/world-cup-showcase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {" "}
              World Cup Showcase
            </a>{" "}
            というファンサイトを制作しました（Projects ページ参照）。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Contact</h2>
          <p>
            連絡は{" "}
            <a
              href="https://github.com/thor1675"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub (@thor1675)
            </a>{" "}
            まで。
          </p>
        </div>
      </div>
    </section>
  );
}
