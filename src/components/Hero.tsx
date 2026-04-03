import Image from "next/image";

const products = [
  { name: "ノートPC", src: "/products/laptop.png" },
  { name: "スマートフォン", src: "/products/phone.png" },
  { name: "デスクトップ", src: "/products/desktop.png" },
  { name: "サーバー", src: "/products/server.png" },
];

export default function Hero() {
  return (
    <section className="relative hero-gradient min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-light/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="w-2 h-2 bg-green-light rounded-full animate-pulse" />
              <span className="text-green-100 text-sm font-medium">循環型エレクトロニクス経済をリードする</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              リサイクル。
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-light to-emerald-300">
                リバイブ。
              </span>
              <br />
              リユース。
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              私たちは世界中の中古電子機器をリサイクル、リファービッシュ、リマーケティングしています。
              調達から再製造まで、電子廃棄物を削減し価値を創出する高品質な再生デバイスをお届けします。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-green-900 bg-gradient-to-r from-green-light to-emerald-400 rounded-full hover:shadow-lg hover:shadow-green-primary/25 transition-all"
              >
                詳しく見る
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all"
              >
                お問い合わせ
              </a>
            </div>
          </div>

          {/* Right: Product images grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="relative group overflow-hidden rounded-2xl border border-white/15 aspect-square flex flex-col"
              >
                <div className="relative flex-1 m-4 mb-0">
                  <Image
                    src={product.src}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 250px, 0px"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-4 text-white font-semibold text-sm tracking-wide">
                  {product.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
