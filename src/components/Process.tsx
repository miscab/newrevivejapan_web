export default function Process() {
  const steps = [
    {
      step: "01",
      title: "グローバル調達",
      description:
        "アメリカ、ヨーロッパ、イギリス、オーストラリア、日本、中国の企業、キャリア、IT資産管理者から中古電子機器を調達します。",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
      ),
    },
    {
      step: "02",
      title: "検査・テスト",
      description:
        "すべてのデバイスは、再製造センターで包括的な診断テスト、データ消去、品質評価を受けます。",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
      ),
    },
    {
      step: "03",
      title: "再製造",
      description:
        "熟練した技術者が、各市場の厳格な品質基準を満たすよう、修理、構成のアップグレード、外観の復元を行います。",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
    },
    {
      step: "04",
      title: "リマーケティング",
      description:
        "リファービッシュされたデバイスはグレード分けされ、最も需要のある市場に、プレミアム品質かつ競争力のある価格で流通されます。",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-primary/10 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-light rounded-full" />
            <span className="text-green-light text-sm font-semibold uppercase tracking-wider">プロセス</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            調達から市場まで
          </h2>
          <p className="text-lg text-gray-400">
            エンドツーエンドの再製造プロセスにより、すべてのデバイスがお客様に届く前に
            最高の品質基準を満たすことを保証します。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-green-primary/50 to-transparent" />
              )}
              <div className="relative bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-green-primary/50 transition-all duration-300 group-hover:bg-gray-800">
                <div className="text-5xl font-bold text-gray-800 group-hover:text-green-primary/20 transition-colors absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="w-14 h-14 bg-green-primary/10 rounded-2xl flex items-center justify-center text-green-light mb-6 group-hover:bg-green-primary/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
