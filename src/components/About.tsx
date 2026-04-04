export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-green-primary rounded-full" />
              <span className="text-green-primary text-sm font-semibold uppercase tracking-wider">会社概要</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              電子機器の{" "}
              <span className="gradient-text">循環型経済</span>を{" "}
              推進する
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              New Revive Japanは、中古電子機器のリサイクル、リファービッシュ、リマーケティングにおけるグローバルリーダーです。
              日本、インドネシア、フィリピン、中国での事業を通じて、テクノロジーに新たな命を吹き込みながら電子廃棄物の削減に貢献しています。
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              アメリカ、ヨーロッパ、イギリス、オーストラリア、日本、中国からデバイスを調達し、
              最先端の再製造センターで高品質な市場対応製品へと生まれ変わらせます。
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">品質保証</h4>
                  <p className="text-sm text-gray-500">厳格なテストと品質基準</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">グローバル展開</h4>
                  <p className="text-sm text-gray-500">世界規模での調達と販売</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 sm:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm card-hover">
                  <div className="w-12 h-12 bg-green-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <h4 className="font-bold text-2xl text-gray-900">5</h4>
                  <p className="text-sm text-gray-500 mt-1">事業展開国</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm card-hover">
                  <div className="w-12 h-12 bg-green-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
                  </div>
                  <h4 className="font-bold text-2xl text-gray-900">6+</h4>
                  <p className="text-sm text-gray-500 mt-1">調達地域</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm card-hover">
                  <div className="w-12 h-12 bg-green-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                  </div>
                  <h4 className="font-bold text-2xl text-gray-900">155K+</h4>
                  <p className="text-sm text-gray-500 mt-1">年間処理台数</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm card-hover">
                  <div className="w-12 h-12 bg-green-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h4 className="font-bold text-2xl text-gray-900">10+</h4>
                  <p className="text-sm text-gray-500 mt-1">年以上の実績</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-green-primary/5 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
