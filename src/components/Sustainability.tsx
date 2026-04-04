export default function Sustainability() {
  const impacts = [
    {
      metric: "電子廃棄物",
      value: "削減",
      description:
        "リファービッシュされたデバイスは、埋立地に廃棄される電子廃棄物を1台分減らし、有害物質による汚染を低減します。",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
      ),
    },
    {
      metric: "CO2排出量",
      value: "削減",
      description:
        "デバイスのライフサイクルを延長することで、新品製造と比較してカーボンフットプリントを大幅に削減します。",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
      ),
    },
    {
      metric: "資源の保全",
      value: "最大化",
      description:
        "リユースにより、各デバイスの製造に投入されたレアアース、金属、エネルギーを有効活用します。",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32 hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-light/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-light rounded-full" />
            <span className="text-green-light text-sm font-semibold uppercase tracking-wider">サステナビリティ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-green-light">よりグリーンな</span>未来のためのテクノロジー
          </h2>
          <p className="text-lg text-gray-200">
            事業の枠を超え、電子機器のライフサイクルを延長することで、
            より持続可能な社会の実現に貢献しています。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((item) => (
            <div
              key={item.metric}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 bg-green-primary/20 rounded-2xl flex items-center justify-center text-green-light mb-6">
                {item.icon}
              </div>
              <div className="text-sm font-bold text-green-light mb-1">{item.value}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.metric}</h3>
              <p className="text-gray-200 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
