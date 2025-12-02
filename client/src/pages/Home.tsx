import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui/custom-ui";
import { ArrowRight, CheckCircle2, Clock, FileText, ShieldCheck, Smartphone, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-700">
            <ShieldCheck className="h-6 w-6" />
            <span>会社設立クラウド</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">特徴</a>
            <a href="#process" className="hover:text-blue-600 transition-colors">流れ</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">料金</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">よくある質問</a>
          </nav>
          <Button variant="default" size="sm" className="hidden md:inline-flex">
            無料で始める
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge variant="secondary" className="px-4 py-1 text-blue-700 bg-blue-50 border-blue-100">
                  <span className="mr-2">✨</span> 累計設立実績 25,000社突破
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                  会社設立を、<br />
                  <span className="text-gradient">もっとスマートに。</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
                  ナビに沿って入力するだけ。専門知識不要で、最短90秒で書類作成から申請まで完結します。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="xl" className="w-full sm:w-auto group">
                    今すぐ無料で始める
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    資料をダウンロード
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-500 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>電子定款手数料 0円</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>マイナンバーカード対応</span>
                  </div>
                </div>
              </div>
              <div className="relative lg:h-[600px] w-full flex items-center justify-center">
                {/* Abstract UI Mockup */}
                <div className="relative w-full max-w-md aspect-[4/3] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-slate-50 border-b flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="p-8 space-y-6 mt-4">
                    <div className="h-8 w-3/4 bg-slate-100 rounded animate-pulse" />
                    <div className="space-y-3">
                      <div className="h-4 w-full bg-slate-50 rounded" />
                      <div className="h-4 w-5/6 bg-slate-50 rounded" />
                      <div className="h-4 w-4/6 bg-slate-50 rounded" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="h-24 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-blue-400" />
                      </div>
                      <div className="h-24 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center justify-center">
                        <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="h-10 w-full bg-blue-600 rounded-md shadow-lg shadow-blue-200" />
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 animate-bounce duration-[3000ms]">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">平均設立期間</p>
                      <p className="font-bold text-slate-900">最短 3日</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                選ばれる<span className="text-blue-600">3つの理由</span>
              </h2>
              <p className="text-slate-600">
                従来の会社設立における「面倒」「高い」「遅い」をテクノロジーで解決しました。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>完全オンライン完結</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    役所への訪問は一切不要。スマホやPCから必要な情報を入力するだけで、すべての手続きが完了します。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle>圧倒的なスピード</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    自動生成技術により、書類作成時間を大幅に短縮。最短3日で会社設立が可能です。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle>安心の専門家監修</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    司法書士・税理士が監修したシステムで、法的に正しい書類を確実に作成できます。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                設立までの<span className="bg-yellow-200 px-2">3ステップ</span>
              </h2>
              <p className="text-slate-600">
                複雑な手続きを極限までシンプルにしました。
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
              
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div className="bg-white p-6 rounded-xl border border-slate-100 text-center group hover:border-blue-200 transition-colors">
                  <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">フォームに入力</h3>
                  <p className="text-slate-600 text-sm">
                    会社名や住所など、必要な情報をフォームに入力します。ガイド付きで迷いません。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-100 text-center group hover:border-blue-200 transition-colors">
                  <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">電子署名</h3>
                  <p className="text-slate-600 text-sm">
                    作成された書類にマイナンバーカードを使って電子署名を行います。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-100 text-center group hover:border-blue-200 transition-colors">
                  <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">登記申請完了</h3>
                  <p className="text-slate-600 text-sm">
                    あとは待つだけ。登記完了後、履歴事項全部証明書などの書類をお届けします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              まずは無料でアカウント作成
            </h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
              会社設立の準備を始めましょう。入力内容は途中保存されるので、スキマ時間に進められます。
            </p>
            <Button variant="cta" size="xl" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl">
              無料で会社設立をはじめる
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-6 text-sm text-blue-200">
              ※ 設立手続きが完了するまで料金は発生しません
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
                <ShieldCheck className="h-6 w-6" />
                <span>会社設立クラウド</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                テクノロジーの力で、起業のハードルを下げる。<br />
                私たちは挑戦するすべての人を応援します。
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">機能一覧</a></li>
                <li><a href="#" className="hover:text-white transition-colors">料金プラン</a></li>
                <li><a href="#" className="hover:text-white transition-colors">導入事例</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">ヘルプセンター</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            © 2025 Company Setup Cloud. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
