export default function Products() {
  const products = [
    {
      name: "ノートPC",
      volume: "100,000+ / 年",
      description:
        "ビジネスグレードおよびコンシューマー向けノートPC。主要ブランドを完全テスト、アップグレード、優れた状態に復元。",
      brands: ["Dell", "Lenovo", "HP", "Apple"],
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
    },
    {
      name: "スマートフォン",
      volume: "20,000+ / 年",
      description:
        "主要ブランドのスマートフォン。バッテリー健全性を確認し、完全に機能する状態でお届けします。",
      brands: ["Apple", "Samsung", "Google", "Xiaomi"],
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
      ),
    },
    {
      name: "デスクトップ",
      volume: "30,000+ / 年",
      description:
        "ワークステーションおよびビジネスデスクトップ。お客様の仕様に合わせて構成し、必要に応じてコンポーネントをアップグレード。",
      brands: ["Dell", "HP", "Lenovo", "Fujitsu"],
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" /></svg>
      ),
    },
    {
      name: "サーバー",
      volume: "5,000+ / 年",
      description:
        "エンタープライズグレードのラックおよびタワーサーバー。RAM、ストレージ、プロセッサのカスタムオプションで再構成。",
      brands: ["Dell", "HP Enterprise", "Lenovo", "Supermicro"],
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
      ),
    },
  ];

  return (
    <section id="products" className="py-24 sm:py-32 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-primary rounded-full" />
            <span className="text-green-primary text-sm font-semibold uppercase tracking-wider">製品</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">リファービッシュ</span>する製品
          </h2>
          <p className="text-lg text-gray-600">
            ノートPCからエンタープライズサーバーまで、IT機器のフルスペクトラムを
            丁寧かつ精密に取り扱います。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl border border-gray-100 p-8 card-hover group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center text-green-primary group-hover:from-green-primary group-hover:to-green-dark group-hover:text-white transition-all duration-300">
                  {product.icon}
                </div>
                <span className="text-sm font-bold text-green-primary bg-green-50 px-3 py-1.5 rounded-full">
                  {product.volume}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.brands.map((brand) => (
                  <span
                    key={brand}
                    className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
