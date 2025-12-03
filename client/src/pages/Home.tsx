import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui/custom-ui";
import { AlertTriangle, ArrowRight, Check, CheckCircle2, CreditCard, FileText, ShieldCheck, Smartphone, X, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-700">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="司法書士法人そうぞう" className="h-10 md:h-12 w-auto object-contain" />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6 text-sm font-medium text-slate-600">
              <a href="#difference" className="hover:text-sky-500 transition-colors">他社との違い</a>
              <a href="#details" className="hover:text-sky-500 transition-colors">サービス詳細</a>
              <a href="#plans" className="hover:text-sky-500 transition-colors">料金プラン</a>
              <a href="#flow" className="hover:text-sky-500 transition-colors">流れ</a>
            </nav>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="border-sky-500 text-sky-600 hover:bg-sky-50">
                申請質問
              </Button>
              <Button variant="default" size="sm" className="bg-sky-500 hover:bg-sky-600 text-white shadow-md">
                通知定款情報の変更
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Full Image with Overlay Button */}
        <section className="relative w-full bg-slate-50 overflow-hidden">
          <div className="container-fluid relative py-0 flex flex-col items-center">
            <div className="relative w-full">
              <img 
                src="/hero-full.png" 
                alt="完全オンライン会社設立 - 申請まで完全代行・電話対応なし・効率重視" 
                className="w-full h-auto object-cover md:object-contain min-h-[600px] md:min-h-0" 
              />
              
              {/* Overlay CTA Button - Positioned absolutely on desktop, relatively on mobile */}
              <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-full text-center hidden md:block">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="px-16 py-8 text-xl bg-red-500 hover:bg-red-600 text-white shadow-xl shadow-red-500/30 rounded-full transition-transform hover:-translate-y-1 border-4 border-white/30 backdrop-blur-sm" 
                  onClick={() => window.location.href='#plans'}
                >
                  プランを確認して申し込む
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Mobile CTA Button (Visible only on mobile) */}
            <div className="mt-6 md:hidden w-full px-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full py-6 text-lg bg-red-500 hover:bg-red-600 text-white shadow-lg rounded-full" 
                onClick={() => window.location.href='#plans'}
              >
                プランを確認して申し込む
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Difference Section (Comparison Table) */}
        <section id="difference" className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                他社サービスとの違い
              </h2>
              <p className="text-slate-600">
                徹底的な効率化により、高品質なサービスを低価格で提供します。
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                      <th className="p-6 font-bold text-center w-1/4">比較項目</th>
                      <th className="p-6 font-bold text-center w-1/3 bg-sky-100/50 text-sky-800 relative border-x border-sky-100">
                        当サービス
                        <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-bl">RECOMMENDED</div>
                      </th>
                      <th className="p-6 font-bold text-center w-1/3 text-slate-500">一般的な事務所</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="p-5 font-bold text-center bg-slate-50/50">費用</td>
                      <td className="p-5 text-center font-bold text-red-500 bg-sky-50/30 text-lg border-x border-sky-50">3万円〜</td>
                      <td className="p-5 text-center text-slate-500">10万円〜</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="p-5 font-bold text-center bg-slate-50/50">来所・面談</td>
                      <td className="p-5 text-center font-bold text-sky-600 bg-sky-50/30 border-x border-sky-50">一切不要（完全オンライン）</td>
                      <td className="p-5 text-center text-slate-500">必須（複数回）</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="p-5 font-bold text-center bg-slate-50/50">印鑑証明書</td>
                      <td className="p-5 text-center font-bold text-sky-600 bg-sky-50/30 border-x border-sky-50">不要（マイナンバーカード）</td>
                      <td className="p-5 text-center text-slate-500">必須（取得の手間あり）</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="p-5 font-bold text-center bg-slate-50/50">対応スピード</td>
                      <td className="p-5 text-center font-bold text-sky-600 bg-sky-50/30 border-x border-sky-50">最短3日</td>
                      <td className="p-5 text-center text-slate-500">2週間〜1ヶ月</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-5 font-bold text-center bg-slate-50/50">定款印紙代</td>
                      <td className="p-5 text-center font-bold text-sky-600 bg-sky-50/30 border-x border-sky-50">0円（電子定款）</td>
                      <td className="p-5 text-center text-slate-500">4万円（紙の場合）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details (Can/Cannot/Need) */}
        <section id="details" className="py-24 bg-slate-50/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                サービスの詳細・条件
              </h2>
              <p className="text-slate-600">
                事前に必ずご確認ください。効率化のため、いくつかの条件がございます。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* 代行すること (Green) */}
              <Card className="border-t-4 border-t-emerald-400 shadow-md hover:shadow-lg transition-all bg-white border-x border-b border-slate-100">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-emerald-500" />
                  </div>
                  <CardTitle className="text-xl text-emerald-600">代行すること</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span> 定款作成・電子認証</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span> 設立登記申請</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span> 各種証明書取得</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span> 税務・社保届出（ミドル・高額）</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span> 事業計画書作成（高額のみ）</li>
                  </ul>
                </CardContent>
              </Card>

              {/* 対応できないこと (Red) */}
              <Card className="border-t-4 border-t-red-400 shadow-md hover:shadow-lg transition-all bg-white border-x border-b border-slate-100">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <X className="h-8 w-8 text-red-500" />
                  </div>
                  <CardTitle className="text-xl text-red-500">対応できないこと</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2"><span className="text-red-400 font-bold">•</span> 紙での書類作成</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 font-bold">•</span> マイナンバーカード未所持</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 font-bold">•</span> 電話相談（ライトのみ）</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 font-bold">•</span> 許認可申請</li>
                    <li className="flex items-start gap-2"><span className="text-red-400 font-bold">•</span> 融資申込み代行</li>
                  </ul>
                </CardContent>
              </Card>

              {/* 必要なもの (Blue) */}
              <Card className="border-t-4 border-t-sky-400 shadow-md hover:shadow-lg transition-all bg-white border-x border-b border-slate-100">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-sky-500" />
                  </div>
                  <CardTitle className="text-xl text-sky-500">必要なもの</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span> マイナンバーカード</li>
                    <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span> カードリーダー/スマホ</li>
                    <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span> 会社基本情報</li>
                    <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span> 資本金払込み</li>
                    <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span> 印鑑証明書（プランにより）</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Important Alert */}
            <div className="max-w-4xl mx-auto mt-12 bg-amber-50 border border-amber-200 p-6 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="p-3 bg-amber-100 rounded-full shrink-0">
                <AlertTriangle className="h-8 w-8 text-amber-500" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-amber-800 mb-1">重要ポイント</h4>
                <p className="text-amber-700 font-medium">
                  マイナンバーカード必須 • 効率化のため制約あり • 許認可業種は事前相談
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans" className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                料金プラン
              </h2>
              <p className="text-slate-600">
                ニーズに合わせて3つのプランをご用意。すべて完全デジタル対応です。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Light Plan */}
              <Card className="border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group flex flex-col bg-white">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-300 group-hover:bg-slate-400 transition-colors" />
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-slate-700">ライトプラン</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-sm align-top text-slate-500">¥</span>
                    <span className="text-4xl font-bold text-slate-900">30,000</span>
                  </div>
                  <div className="text-sm text-slate-500 font-medium bg-slate-50 py-1 px-3 rounded-full inline-block border border-slate-100">
                    効率重視・コスト最優先
                  </div>
                  <p className="text-sm text-slate-500 mt-3 font-bold">とにかく安く設立したい方</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 text-sm text-slate-600 mb-8 flex-1">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0" /> 完全非対面（電話・紙不可）</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0" /> マイナンバーカード署名</li>
                    <li className="flex items-center gap-2 text-slate-400 line-through decoration-slate-300"><X className="h-4 w-4 text-red-300 shrink-0" /> 定款カスタマイズ</li>
                    <li className="flex items-center gap-2 text-slate-400 line-through decoration-slate-300"><X className="h-4 w-4 text-red-300 shrink-0" /> 設立日指定</li>
                    <li className="flex items-center gap-2 text-slate-400 line-through decoration-slate-300"><X className="h-4 w-4 text-red-300 shrink-0" /> オンライン説明</li>
                    <li className="flex items-center gap-2 text-slate-400 line-through decoration-slate-300"><X className="h-4 w-4 text-red-300 shrink-0" /> 各種届出代行</li>
                  </ul>
                  <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white" onClick={() => window.open('https://forms.google.com/ライトプラン申込フォーム', '_blank')}>
                    ライトプラン申し込み
                  </Button>
                </CardContent>
              </Card>

              {/* Middle Plan */}
              <Card className="border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden transform md:-translate-y-4 z-10 flex flex-col bg-white">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-red-500" />
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">人気</div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-red-600 font-bold">ミドルプラン</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-sm align-top text-slate-500">¥</span>
                    <span className="text-5xl font-bold text-slate-900">100,000</span>
                  </div>
                  <div className="text-sm text-red-600 font-medium bg-red-50 py-1 px-3 rounded-full inline-block border border-red-100">
                    バランス重視・最低限の柔軟性
                  </div>
                  <p className="text-sm text-slate-500 mt-3 font-bold">標準的なサポートをお求めの方</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 text-sm text-slate-600 mb-8 flex-1">
                    <li className="flex items-center gap-2 font-bold text-slate-800"><Check className="h-4 w-4 text-red-500 shrink-0" /> 電話対応可・紙不可</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-red-500 shrink-0" /> マイナンバーカード署名</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-red-500 shrink-0" /> 定款簡易調整</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-red-500 shrink-0" /> 設立日指定</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-red-500 shrink-0" /> オンライン説明（1回）</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-red-500 shrink-0" /> 社保・税務届出代行</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-red-500 shrink-0" /> 銀行口座開設サポート</li>
                  </ul>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white shadow-lg py-6 text-lg" onClick={() => window.open('https://forms.google.com/ミドルプラン申込フォーム', '_blank')}>
                    ミドルプラン申し込み
                  </Button>
                </CardContent>
              </Card>

              {/* High Plan */}
              <Card className="border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group flex flex-col bg-white">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-300 group-hover:bg-slate-400 transition-colors" />
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-slate-700">高額プラン</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-sm align-top text-slate-500">¥</span>
                    <span className="text-4xl font-bold text-slate-900">500,000</span>
                    <span className="text-sm text-slate-500">〜</span>
                  </div>
                  <div className="text-sm text-slate-500 font-medium bg-slate-50 py-1 px-3 rounded-full inline-block border border-slate-100">
                    フルサポート・投資家対応
                  </div>
                  <p className="text-sm text-slate-500 mt-3 font-bold">出資受け入れ・本格起業の方</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 text-sm text-slate-600 mb-8 flex-1">
                    <li className="flex items-center gap-2 font-bold text-slate-800"><Check className="h-4 w-4 text-emerald-500 shrink-0" /> 上記ミドルプランの全内容</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0" /> 定款自由設計・特殊登記</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0" /> オンライン説明（複数回）</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0" /> 事業計画書作成支援</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0" /> 株主間契約書作成</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 shrink-0" /> 各種専門家との連携サポート</li>
                  </ul>
                  <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white" onClick={() => window.open('https://forms.google.com/高額プラン申込フォーム', '_blank')}>
                    高額プラン申し込み
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-600 mb-2">ご不明点やプラン選択のご相談</p>
              <p className="text-slate-400 text-sm">LINEにてお気軽にお問い合わせください</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="flow" className="py-24 bg-slate-50/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                設立完了までの流れ
              </h2>
              <p className="text-slate-600">
                わずか5ステップで完了。面倒な手続きはすべてお任せください。
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                { step: 1, title: "申込フォーム入力", desc: "会社情報・代表者情報・希望プランを入力します" },
                { step: 2, title: "内容確認・調整", desc: "LINEにて詳細確認。必要に応じて内容調整を行います" },
                { step: 3, title: "電子署名", desc: "マイナンバーカードで定款等に署名。印鑑不要です" },
                { step: 4, title: "法務局申請", desc: "司法書士が法務局へオンライン申請。完全代行します" },
                { step: 5, title: "設立完了", desc: "登記完了後、各種書類をお渡し。会社設立完了です" },
              ].map((item, index) => (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-sky-500 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg group-hover:bg-red-500 transition-colors relative z-10">
                    {item.step}
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 -z-0" />
                  )}
                  <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">
                選ばれる理由
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white border border-slate-100 p-8 rounded-2xl text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="font-bold text-lg mb-3 text-slate-800">効率重視の仕組み</h4>
                <p className="text-slate-600 text-sm leading-relaxed">電話対応なし・完全オンライン化により、無駄を排除した効率的な手続きを実現</p>
              </div>
              <div className="bg-white border border-slate-100 p-8 rounded-2xl text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="font-bold text-lg mb-3 text-slate-800">明確な料金体系</h4>
                <p className="text-slate-600 text-sm leading-relaxed">3つのプランでニーズに応じた価格設定。追加料金なしの安心価格</p>
              </div>
              <div className="bg-white border border-slate-100 p-8 rounded-2xl text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🏛️</div>
                <h4 className="font-bold text-lg mb-3 text-slate-800">司法書士の確実性</h4>
                <p className="text-slate-600 text-sm leading-relaxed">2000件以上の中小企業相談実績。確実で安心の手続きをお約束</p>
              </div>
              <div className="bg-white border border-slate-100 p-8 rounded-2xl text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="font-bold text-lg mb-3 text-slate-800">完全デジタル対応</h4>
                <p className="text-slate-600 text-sm leading-relaxed">マイナンバーカード活用・オンライン申請で、書類のやり取りは一切なし</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-slate-50 text-center">
          <div className="container">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              あなたのニーズに合うプランで<br />会社設立を始めませんか？
            </h3>
            <p className="text-xl text-slate-600 mb-10">
              効率重視・確実・リーズナブルな会社設立サービス
            </p>
            <div className="flex justify-center">
              <Button variant="cta" size="xl" className="px-12 py-8 text-xl bg-red-500 hover:bg-red-600 text-white shadow-xl rounded-full" onClick={() => window.location.href='#plans'}>
                プランを選んで申し込む
              </Button>
            </div>
            <p className="mt-6 text-slate-400 text-sm">
              ※申込フォーム送信後、LINEにて詳細確認のご連絡をいたします
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white text-slate-500 py-12 border-t border-slate-200">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 font-bold text-xl text-slate-800 mb-4">
            <img src="/logo.png" alt="司法書士法人そうぞう" className="h-8 w-auto opacity-80" />
          </div>
          <p className="text-sm mb-8">
            司法書士法人そうぞう
          </p>
          <div className="text-xs text-slate-400">
            © 2025 司法書士法人そうぞう. All rights reserved.<br />
            福岡市 | 司法書士 | 会社設立専門
          </div>
        </div>
      </footer>
    </div>
  );
}
