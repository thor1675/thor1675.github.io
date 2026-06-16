import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 用に静的エクスポートする
  output: "export",
  // GitHub Pages には Next.js の画像最適化サーバーがないので無効化
  images: {
    unoptimized: true,
  },
  // URL の末尾にスラッシュをつける（フォルダベースの静的配信に最適）
  trailingSlash: true,
};

export default nextConfig;
