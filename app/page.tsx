import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      {/* Under construction バナー */}
      <div className="mb-10 inline-flex items-center gap-2 px-3 py-1 border border-amber-300 bg-amber-50 text-amber-800 text-xs font-medium rounded-full">
        🚧 Site under construction — 現在作成中
      </div>

      <p className="text-xs text-zinc-500 mb-4 tracking-[0.2em] uppercase">
        Personal Site
      </p>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
        Ryosei Takagi
      </h1>
      <p className="text-lg text-zinc-500 mb-6">
        髙城 嶺青
        <span className="ml-2 text-zinc-400">/ Thor</span>
      </p>

      <p className="text-base text-zinc-500 mb-10">
        Hosei University, Faculty of Science and Engineering, Department of
        Applied Informatics (B3)
      </p>

      <div className="prose prose-zinc max-w-none mb-10 text-zinc-700 leading-relaxed space-y-3">
        <p>
          法政大学 理工学部 応用情報工学科の 3 年生。
          AIやエージェントメモリ、ソフトウェア開発に関心があります。
        </p>
        <p>
          このサイトでは、取り組んでいる研究・プロジェクトや趣味などを記録していく予定です。
        </p>
        <p className="text-sm text-zinc-500">
          現在デザインと内容を整備中です。完成までしばらくお待ちください。
        </p>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a
          href="https://github.com/thor1675"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <Link href="/about" className="text-blue-600 hover:underline">
          About
        </Link>
        <Link href="/projects" className="text-blue-600 hover:underline">
          Projects
        </Link>
        <Link href="/experience" className="text-blue-600 hover:underline">
          Experience
        </Link>
      </div>
    </section>
  );
}
