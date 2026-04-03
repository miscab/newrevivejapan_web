export default function GlobalPresence() {
  const sourceRegions = [
    { name: "オーストラリア", flag: "AU" },
    { name: "カナダ", flag: "CA" },
    { name: "中国", flag: "CN" },
    { name: "ヨーロッパ", flag: "EU" },
    { name: "日本", flag: "JP" },
    { name: "マレーシア", flag: "MY" },
    { name: "シンガポール", flag: "SG" },
    { name: "韓国", flag: "KR" },
    { name: "イギリス", flag: "GB" },
    { name: "アメリカ", flag: "US" },
  ];

  const operatingCountries = [
    { name: "中国", role: "調達・販売" },
    { name: "インドネシア", role: "再製造・販売" },
    { name: "日本", role: "調達・販売" },
    { name: "フィリピン", role: "再製造・販売" },
    { name: "アメリカ", role: "調達・販売" },
  ];

  return (
    <section id="global" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-primary rounded-full" />
            <span className="text-green-primary text-sm font-semibold uppercase tracking-wider">グローバル展開</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            世界規模の<span className="gradient-text">ネットワーク</span>
          </h2>
          <p className="text-lg text-gray-600">
            グローバルなサプライチェーンにより、調達市場と再製造拠点、
            そして世界中のお客様をつなぎます。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sourcing Regions */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">調達地域</h3>
                <p className="text-sm text-gray-500">デバイスを調達する地域</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {sourceRegions.map((region) => (
                <div
                  key={region.name}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors"
                >
                  <span className="text-2xl">{getFlagEmoji(region.flag)}</span>
                  <span className="font-medium text-gray-700">{region.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operating Countries */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">事業拠点</h3>
                <p className="text-sm text-gray-500">再製造と販売を行う拠点</p>
              </div>
            </div>
            <div className="space-y-4">
              {operatingCountries.map((country) => (
                <div
                  key={country.name}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors"
                >
                  <span className="font-medium text-gray-700">{country.name}</span>
                  <span className="text-sm text-green-primary font-medium bg-green-50 px-3 py-1 rounded-full">
                    {country.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flow diagram */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-100 p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
            <div className="px-6 py-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-600 font-semibold">調達市場</p>
              <p className="text-xs text-gray-500 mt-1">米国、EU、英国、豪州、日本、中国 他</p>
            </div>
            <svg className="w-6 h-6 text-gray-300 rotate-90 sm:rotate-0 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="px-6 py-4 bg-green-50 rounded-xl">
              <p className="text-sm text-green-primary font-semibold">再製造センター</p>
              <p className="text-xs text-gray-500 mt-1">テスト・修理・アップグレード</p>
            </div>
            <svg className="w-6 h-6 text-gray-300 rotate-90 sm:rotate-0 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="px-6 py-4 bg-amber-50 rounded-xl">
              <p className="text-sm text-amber-600 font-semibold">販売市場</p>
              <p className="text-xs text-gray-500 mt-1">需要のあるすべての市場へ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getFlagEmoji(code: string): string {
  const flags: Record<string, string> = {
    US: "\u{1F1FA}\u{1F1F8}",
    EU: "\u{1F1EA}\u{1F1FA}",
    GB: "\u{1F1EC}\u{1F1E7}",
    AU: "\u{1F1E6}\u{1F1FA}",
    JP: "\u{1F1EF}\u{1F1F5}",
    CA: "\u{1F1E8}\u{1F1E6}",
    CN: "\u{1F1E8}\u{1F1F3}",
    KR: "\u{1F1F0}\u{1F1F7}",
    MY: "\u{1F1F2}\u{1F1FE}",
    SG: "\u{1F1F8}\u{1F1EC}",
  };
  return flags[code] || "\u{1F30D}";
}
