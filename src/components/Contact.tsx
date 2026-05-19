"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const res = await fetch("https://formspree.io/f/mgopnyog", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-green-primary rounded-full" />
              <span className="text-green-primary text-sm font-semibold uppercase tracking-wider">お問い合わせ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              お気軽に<span className="gradient-text">ご連絡</span>ください
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              高品質なリファービッシュ電子機器の調達、IT資産処分のパートナーシップ、
              またはサービスについてのご質問など、お気軽にお問い合わせください。
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">メール</h4>
                  <a
                    href="mailto:contact@newrevive.com"
                    className="text-green-primary hover:text-green-dark transition-colors font-medium"
                  >
                    contact@newrevive.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">電話番号</h4>
                  <a
                    href="tel:080-3310-0433"
                    className="text-green-primary hover:text-green-dark transition-colors font-medium"
                  >
                    080-3310-0433
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">所在地</h4>
                  <div className="text-gray-600 space-y-1">
                    <p><span className="inline-block w-14">本店</span>東京都港区北青山1丁目3番1号3F</p>
                    <p><span className="inline-block w-14">営業所</span>千葉県市川市市川3-40-8</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">古物商許可番号（千葉県市川営業所）</h4>
                  <span className="text-gray-600">千葉県公安委員会 第441050000141号</span>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0!2d139.7196!3d35.6726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b9b98e7a2ed%3A0x4e0a7c0f0e5b8a0a!2z5p2x5Lqs6YO95riv5Yy65YyX6Z2S5bGxMeS4geebru-8k-eVqu-8keWPtw!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="New Revive Japan 所在地"
              />
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-8 sm:p-12">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">メッセージを送る</h3>

              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">送信完了！</h4>
                  <p className="text-gray-500 mb-6">お問い合わせいただきありがとうございます。折り返しご連絡いたします。</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-sm text-green-primary font-medium hover:text-green-dark transition-colors"
                  >
                    別のメッセージを送る
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-primary/20 focus:border-green-primary transition-colors"
                      placeholder="お名前を入力してください"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-primary/20 focus:border-green-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      メッセージ
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-primary/20 focus:border-green-primary transition-colors resize-none"
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-sm text-red-500">送信に失敗しました。もう一度お試しください。</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 bg-green-primary text-white font-semibold rounded-xl hover:bg-green-dark transition-colors disabled:opacity-60"
                  >
                    {status === "sending" ? "送信中..." : "メッセージを送信"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
