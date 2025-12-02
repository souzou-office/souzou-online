import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui/custom-ui";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Smartphone, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-700">
            <ShieldCheck className="h-6 w-6" />
            <span>完全オンライン会社設立</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#details" className="hover:text-blue-600 transition-colors">サービス詳細</a>
            <a href="#plans" className="hover:text-blue-600 transition-colors">料金プラン</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">よくある質問</a>
          </nav>
          <Button variant="default" size="sm" className="hidden md:inline-flex">
            申し込む
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
          <div className="container relative z-10 text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1 text-blue-300 bg-blue-900/50 border-blue-800">
              <span className="mr-2">✨</span> 申請まで完全代行・電話対応なし・効率重視
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
              完全オンライン会社設立
            </h1>
            
            <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-lg font-medium flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                司法書士による確実な手続き
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                マイナンバーカード活用
              </div>
              
              <Button variant="cta" size="xl" className="w-full sm:w-auto px-12 py-8 text-xl shadow-2xl shadow-amber-500/20 mt-4">
                プランを確認して申し込む
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section id="details" className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                当サービスの詳細
              </h2>
              <p className="text-slate-600">
                デジタル技術を活用し、効率的かつ確実な設立手続きを実現します。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card 1: 完全デジタル化の仕組み */}
              <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-700">完全デジタル化の仕組み</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      マイナンバーカードによる電子署名
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed pl-4 border-l border-slate-100 ml-0.5">
                      紙の定款への印鑑押印は一切不要。マイナンバーカードで確実に本人確認・署名を行います。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      オンライン申請システム活用
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed pl-4 border-l border-slate-100 ml-0.5">
                      法務局の登記・供託オンライン申請システムを使用し、完全オンラインで申請します。
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2: 効率化の具体例 */}
              <Card className="border-l-4 border-l-emerald-500 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Zap className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl text-emerald-700">効率化の具体例</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      面談・電話対応なし（ライトプラン）
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed pl-4 border-l border-slate-100 ml-0.5">
                      必要な情報はすべてフォームとLINEで確認。時間の無駄を徹底排除。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      定型化されたプロセス
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed pl-4 border-l border-slate-100 ml-0.5">
                      よくある設立パターンを定型化し、スピードと品質を両立。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      司法書士による直接処理
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed pl-4 border-l border-slate-100 ml-0.5">
                      仲介業者を挟まず、国家資格者が直接手続きを行うため安心かつ迅速。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Plans Section (Placeholder based on context) */}
        <section id="plans" className="py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                選べる料金プラン
              </h2>
              <p className="text-slate-600">
                お客様のニーズに合わせて最適なプランをお選びいただけます。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Light Plan */}
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-300 group-hover:bg-slate-400 transition-colors" />
                <CardHeader>
                  <CardTitle className="text-xl text-slate-700">ライトプラン</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-slate-900">¥9,800</span>
                    <span className="text-slate-500 text-sm"> + 実費</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">とにかく安く、早く設立したい方向け</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      電子定款作成
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      登記申請代行
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      チャットサポート
                    </li>
                    <li className="flex items-center gap-2 text-slate-400">
                      <span className="w-4 h-4 border border-slate-300 rounded-full flex items-center justify-center text-[10px]">✕</span>
                      電話・面談相談
                    </li>
                  </ul>
                  <Button className="w-full mt-8" variant="outline">
                    このプランを選ぶ
                  </Button>
                </CardContent>
              </Card>

              {/* Standard Plan */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden transform md:-translate-y-4 z-10">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500" />
                <div className="absolute top-4 right-4 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded">人気No.1</div>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">スタンダード</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">¥29,800</span>
                    <span className="text-slate-500 text-sm"> + 実費</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">不安な点を相談しながら進めたい方向け</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center gap-2 font-bold text-slate-800">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      ライトプランの全機能
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      電話・Zoom相談（30分）
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      印鑑発注代行
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      設立後の届出サポート
                    </li>
                  </ul>
                  <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                    このプランを選ぶ
                  </Button>
                </CardContent>
              </Card>

              {/* Full Support Plan */}
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-300 group-hover:bg-slate-400 transition-colors" />
                <CardHeader>
                  <CardTitle className="text-xl text-slate-700">フルサポート</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-slate-900">¥49,800</span>
                    <span className="text-slate-500 text-sm"> + 実費</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">税務顧問も含めて丸投げしたい方向け</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center gap-2 font-bold text-slate-800">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      スタンダードの全機能
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      税理士紹介・面談
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      創業融資サポート
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      助成金診断
                    </li>
                  </ul>
                  <Button className="w-full mt-8" variant="outline">
                    このプランを選ぶ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              会社設立を、もっとスマートに。
            </h2>
            <p className="text-blue-200 mb-10 max-w-2xl mx-auto text-lg">
              面倒な手続きはプロにお任せ。あなたは事業の準備に集中してください。
            </p>
            <Button variant="cta" size="xl" className="bg-amber-500 hover:bg-amber-600 text-white shadow-xl border-none">
              今すぐ申し込む
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 font-bold text-xl text-white mb-4">
            <ShieldCheck className="h-6 w-6" />
            <span>完全オンライン会社設立</span>
          </div>
          <p className="text-sm mb-8">
            司法書士法人監修・運営
          </p>
          <div className="text-xs text-slate-600">
            © 2025 Online Company Setup Service. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
