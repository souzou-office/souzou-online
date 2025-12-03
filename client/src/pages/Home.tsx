import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui/custom-ui";
import { AlertTriangle, ArrowRight, Check, CheckCircle2, ChevronRight, CreditCard, FileText, HelpCircle, Info, LayoutDashboard, ShieldCheck, Smartphone, UserCheck, X, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7F9] font-sans text-slate-800">
      {/* Header - Administrative Style */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="司法書士法人そうぞう" className="h-8 w-auto" />
            <div className="hidden md:block h-6 w-px bg-slate-300"></div>
            <span className="hidden md:block text-sm font-bold text-slate-600">完全オンライン会社設立サービス</span>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#faq" className="hidden md:flex items-center gap-1 text-slate-600 hover:text-blue-700 hover:underline">
              <HelpCircle className="h-4 w-4" />
              よくある質問
            </a>
            <a href="#contact" className="hidden md:flex items-center gap-1 text-slate-600 hover:text-blue-700 hover:underline">
              <Info className="h-4 w-4" />
              お問い合わせ
            </a>
            <Button variant="outline" size="sm" className="bg-blue-600 text-white border-none hover:bg-blue-700 shadow-sm">
              ログイン
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pb-20">
        {/* Hero Area - Functional & Clean */}
        <section className="bg-white border-b border-slate-200 pb-12 pt-10 md:pt-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  マイナンバーカード対応
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                  法人設立の手続きを<br />
                  <span className="text-blue-600">オンラインで完結</span>
                </h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                  司法書士が完全代行。法務局への出頭も、書類の郵送も不要。<br />
                  マイナンバーカードがあれば、最短3日で会社が作れます。
                </p>
                
                {/* Primary Action Buttons - Card Style */}
                <div className="grid gap-4 mt-8">
                  <button 
                    onClick={() => window.location.href='#plans'}
                    className="group relative flex items-center justify-between w-full p-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-all hover:shadow-lg text-left border border-blue-700"
                  >
                    <div>
                      <div className="text-sm font-medium opacity-90 mb-1">まずはここから</div>
                      <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
                        <LayoutDashboard className="h-6 w-6" />
                        プランを確認して申し込む
                      </div>
                    </div>
                    <ChevronRight className="h-8 w-8 opacity-80 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => window.location.href='#details'}
                      className="flex items-center justify-center gap-2 p-4 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all font-bold shadow-sm"
                    >
                      <FileText className="h-5 w-5 text-slate-500" />
                      サービス詳細・条件
                    </button>
                    <button 
                      onClick={() => window.location.href='#flow'}
                      className="flex items-center justify-center gap-2 p-4 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all font-bold shadow-sm"
                    >
                      <CheckCircle2 className="h-5 w-5 text-slate-500" />
                      設立までの流れ
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side Illustration - Minimal & Tech */}
              <div className="hidden md:flex justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white rounded-full blur-3xl opacity-50"></div>
                <img 
                  src="/hero-new-abstract-2.png" 
                  alt="Online Registration" 
                  className="relative z-10 w-full max-w-md object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Information / News Style Section */}
        <section className="py-8 container">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              <h2 className="font-bold text-slate-800">サービスの特徴・お知らせ</h2>
            </div>
            <div className="divide-y divide-slate-100">
              <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:items-start hover:bg-slate-50/50 transition-colors">
                <span className="shrink-0 inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">重要</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">マイナンバーカードが必須です</h3>
                  <p className="text-sm text-slate-600">
                    当サービスは完全オンライン化により低価格・高速度を実現しているため、発起人・取締役全員のマイナンバーカードと署名用パスワードが必要です。
                  </p>
                </div>
              </div>
              <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:items-start hover:bg-slate-50/50 transition-colors">
                <span className="shrink-0 inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">メリット</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">定款印紙代 0円（電子定款対応）</h3>
                  <p className="text-sm text-slate-600">
                    紙の定款で必要な4万円の収入印紙代がかかりません。電子定款作成手数料はプラン料金に含まれています。
                  </p>
                </div>
              </div>
              <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:items-start hover:bg-slate-50/50 transition-colors">
                <span className="shrink-0 inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded">安心</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">司法書士による完全代行</h3>
                  <p className="text-sm text-slate-600">
                    システムによる自動生成ではなく、国家資格者である司法書士が書類作成から申請まで責任を持って行います。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plans Grid - Dashboard Style */}
        <section id="plans" className="py-12 container">
          <div className="flex items-center gap-2 mb-6">
            <LayoutDashboard className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">料金プラン選択</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Light Plan */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden">
              <div className="bg-slate-50 p-4 border-b border-slate-100 text-center">
                <h3 className="font-bold text-slate-700">ライトプラン</h3>
                <div className="text-xs text-slate-500 mt-1">コスト重視の方へ</div>
              </div>
              <div className="p-6 text-center border-b border-slate-100">
                <div className="text-3xl font-bold text-slate-900">¥30,000</div>
                <div className="text-xs text-slate-400 mt-1">（税込）</div>
              </div>
              <div className="p-6 flex-1">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-500" /> 設立登記申請代行</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-500" /> 電子定款作成（印紙代0円）</li>
                  <li className="flex items-center gap-2 text-slate-400"><X className="h-4 w-4" /> 設立日指定不可</li>
                  <li className="flex items-center gap-2 text-slate-400"><X className="h-4 w-4" /> 事前相談なし</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white" onClick={() => window.open('https://forms.google.com/ライトプラン申込フォーム', '_blank')}>
                  選択する
                </Button>
              </div>
            </div>

            {/* Middle Plan - Highlighted */}
            <div className="bg-white rounded-xl border-2 border-blue-500 shadow-md flex flex-col overflow-hidden relative transform md:-translate-y-2">
              <div className="absolute top-0 inset-x-0 h-1 bg-blue-500"></div>
              <div className="absolute top-3 right-3 bg-yellow-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded">推奨</div>
              <div className="bg-blue-50 p-4 border-b border-blue-100 text-center">
                <h3 className="font-bold text-blue-800">ミドルプラン</h3>
                <div className="text-xs text-blue-600 mt-1">標準的なサポート</div>
              </div>
              <div className="p-6 text-center border-b border-slate-100">
                <div className="text-4xl font-bold text-blue-600">¥100,000</div>
                <div className="text-xs text-slate-400 mt-1">（税込）</div>
              </div>
              <div className="p-6 flex-1">
                <ul className="space-y-3 text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> ライトプランの全内容</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> 設立日指定可能</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> オンライン面談（1回）</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> 税務・社保届出サポート</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 border-t border-blue-100">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm" onClick={() => window.open('https://forms.google.com/ミドルプラン申込フォーム', '_blank')}>
                  選択する
                </Button>
              </div>
            </div>

            {/* High Plan */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden">
              <div className="bg-slate-50 p-4 border-b border-slate-100 text-center">
                <h3 className="font-bold text-slate-700">高額プラン</h3>
                <div className="text-xs text-slate-500 mt-1">フルサポート</div>
              </div>
              <div className="p-6 text-center border-b border-slate-100">
                <div className="text-3xl font-bold text-slate-900">¥500,000<span className="text-sm font-normal">〜</span></div>
                <div className="text-xs text-slate-400 mt-1">（税込）</div>
              </div>
              <div className="p-6 flex-1">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-500" /> ミドルプランの全内容</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-500" /> 定款フルカスタマイズ</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-500" /> 事業計画書作成支援</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-500" /> 投資契約書作成支援</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white" onClick={() => window.open('https://forms.google.com/高額プラン申込フォーム', '_blank')}>
                  選択する
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table - Data Grid Style */}
        <section id="difference" className="py-12 container">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <h2 className="font-bold text-slate-800">他社サービスとの比較</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3 font-medium">比較項目</th>
                    <th className="px-6 py-3 font-bold text-blue-700 bg-blue-50/50">当サービス</th>
                    <th className="px-6 py-3 font-medium">一般的な事務所</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">費用</td>
                    <td className="px-6 py-4 text-blue-700 font-bold bg-blue-50/30">3万円〜</td>
                    <td className="px-6 py-4 text-slate-500">10万円〜</td>
                  </tr>
                  <tr className="bg-white hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">来所・面談</td>
                    <td className="px-6 py-4 text-blue-700 font-bold bg-blue-50/30">不要（完全オンライン）</td>
                    <td className="px-6 py-4 text-slate-500">必須（複数回）</td>
                  </tr>
                  <tr className="bg-white hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">印鑑証明書</td>
                    <td className="px-6 py-4 text-blue-700 font-bold bg-blue-50/30">不要（マイナンバーカード）</td>
                    <td className="px-6 py-4 text-slate-500">必須</td>
                  </tr>
                  <tr className="bg-white hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">対応スピード</td>
                    <td className="px-6 py-4 text-blue-700 font-bold bg-blue-50/30">最短3日</td>
                    <td className="px-6 py-4 text-slate-500">2週間〜</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Footer - Official Style */}
        <footer className="bg-slate-800 text-slate-300 py-12 mt-12">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-2">
                <div className="flex items-center gap-2 mb-4 text-white font-bold text-lg">
                  <img src="/logo.png" alt="司法書士法人そうぞう" className="h-8 w-auto brightness-0 invert" />
                  司法書士法人そうぞう
                </div>
                <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                  福岡市を拠点に、全国の会社設立を完全オンラインで支援する司法書士法人です。
                  最新のテクノロジーと法律の専門知識を融合させ、起業家の皆様をサポートします。
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 text-sm">サービス</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#plans" className="hover:text-white transition-colors">料金プラン</a></li>
                  <li><a href="#details" className="hover:text-white transition-colors">サービス詳細</a></li>
                  <li><a href="#flow" className="hover:text-white transition-colors">設立の流れ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 text-sm">サポート</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">よくある質問</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-8 text-center text-xs text-slate-500">
              © 2025 Sozo Judicial Scrivener Corporation. All Rights Reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
