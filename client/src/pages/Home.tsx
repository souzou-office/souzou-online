import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui/custom-ui";
import { AlertTriangle, ArrowRight, Check, CheckCircle2, CreditCard, FileText, ShieldCheck, Smartphone, X, Zap, CircleDollarSign, Landmark, PenTool, Clock, MessageSquare, Phone, Shield, Users } from "lucide-react";

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
        <section className="relative w-full bg-white overflow-hidden py-16 md:py-24 lg:py-32">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 max-w-6xl mx-auto">
              
              {/* Left Column: Text Content */}
              <div className="w-full lg:w-5/12 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-bold text-sm mb-8 shadow-sm">
                  <span className="bg-sky-500 text-white text-xs px-1.5 py-0.5 rounded-full">✓</span>
                  司法書士による確実な手続き
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
                  完全オンライン<br/>
                  <span className="text-sky-600">会社設立</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                  申請まで完全代行・電話対応なし<br/>
                  効率重視のスマートな起業体験
                </p>
                
                <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6">
                  <Button 
                    size="xl" 
                    className="w-full sm:w-auto px-12 py-8 text-xl bg-red-500 hover:bg-red-600 text-white shadow-xl shadow-red-500/20 rounded-full transition-all hover:-translate-y-1 font-bold border-4 border-red-100"
                    onClick={() => window.location.href='#plans'}
                  >
                    プランを確認して申し込む
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center lg:justify-start justify-center gap-6 text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    最短3日で設立
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    全国対応
                  </span>
                </div>
              </div>

              {/* Right Column: Hero Image */}
              <div className="w-full lg:w-7/12 flex justify-center lg:justify-end relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                
                <img 
                  src="/hero-person-ref.png" 
                  alt="会社設立の手続きをする男性のイラスト" 
                  className="w-full max-w-2xl object-contain drop-shadow-xl transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              
            </div>
          </div>
        </section>

        {/* Service Details Section (New) */}
        <section id="service-details" className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                当サービスの詳細
              </h2>
              <p className="text-slate-600">
                完全デジタル化と効率化により、これまでにないスムーズな設立体験を提供します。
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* 完全デジタル化の仕組み */}
              <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <PenTool className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">完全デジタル化の仕組み</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-sky-100 p-2 rounded-full mt-1">
                        <CreditCard className="h-5 w-5 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg mb-2">マイナンバーカードによる電子署名</h4>
                        <p className="text-slate-600 leading-relaxed">
                          紙の定款への印鑑押印は一切不要。マイナンバーカードで確実に本人確認・署名を行います。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-sky-100 p-2 rounded-full mt-1">
                        <Smartphone className="h-5 w-5 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg mb-2">オンライン申請システム活用</h4>
                        <p className="text-slate-600 leading-relaxed">
                          法務局の登記・供託オンライン申請システムを使用し、完全オンラインで申請します。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-sky-100 p-2 rounded-full mt-1">
                        <FileText className="h-5 w-5 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg mb-2">書類の郵送・持参は一切なし</h4>
                        <p className="text-slate-600 leading-relaxed">
                          すべてデジタルデータで完結するため、書類のやり取りは発生しません。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 効率化の具体例 */}
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Zap className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">効率化の具体例</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 p-2 rounded-full mt-1">
                        <Smartphone className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg mb-2">面談・電話対応なし（ライトプラン）</h4>
                        <p className="text-slate-600 leading-relaxed">
                          必要な情報はすべてフォームとLINEで確認。時間の無駄を徹底排除。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 p-2 rounded-full mt-1">
                        <CheckCircle2 className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg mb-2">定型化されたプロセス</h4>
                        <p className="text-slate-600 leading-relaxed">
                          よくある設立パターンを定型化し、スピードと品質を両立。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 p-2 rounded-full mt-1">
                        <ShieldCheck className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg mb-2">司法書士による直接処理</h4>
                        <p className="text-slate-600 leading-relaxed">
                          中間業者を省き、司法書士が直接すべての手続きを代行します。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                当サービスが選ばれる理由
              </h2>
              <p className="text-slate-600">
                徹底的な効率化とデジタル活用により、他社にはない価値を提供します。
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {/* 1. 効率重視の仕組み */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800">効率重視の仕組み</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-600 text-sm">
                  <p>
                    電話対応なし・完全オンライン化により、無駄を排除した効率的な手続きを実現
                  </p>
                </CardContent>
              </Card>

              {/* 2. 明確な料金体系 */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <CircleDollarSign className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800">明確な料金体系</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-600 text-sm">
                  <p>
                    3つのプランでニーズに応じた価格設定。追加料金なしの安心価格
                  </p>
                </CardContent>
              </Card>

              {/* 3. 司法書士の確実性 */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Landmark className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800">司法書士の確実性</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-600 text-sm">
                  <p>
                    2000件以上の中小企業相談実績。確実で安心の手続きをお約束
                  </p>
                </CardContent>
              </Card>

              {/* 4. 完全デジタル対応 */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="h-8 w-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800">完全デジタル対応</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-600 text-sm">
                  <p>
                    マイナンバーカード活用・オンライン申請で、書類のやり取りは一切なし
                  </p>
                </CardContent>
              </Card>
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

            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                      <th className="p-4 md:p-6 font-bold text-center w-1/5">サービス</th>
                      <th className="p-4 md:p-6 font-bold text-center w-1/5 bg-sky-100/50 text-sky-800 relative border-x border-sky-100">
                        当サービス
                        <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-bl">RECOMMENDED</div>
                      </th>
                      <th className="p-4 md:p-6 font-bold text-center w-1/5 text-slate-500">書類作成サービス</th>
                      <th className="p-4 md:p-6 font-bold text-center w-1/5 text-slate-500">格安代行業者</th>
                      <th className="p-4 md:p-6 font-bold text-center w-1/5 text-slate-500">一般的な司法書士</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700 text-sm md:text-base">
                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="p-4 md:p-5 font-bold text-center bg-slate-50/50">価格</td>
                      <td className="p-4 md:p-5 text-center font-bold text-red-500 bg-sky-50/30 text-lg border-x border-sky-50">49,800円〜</td>
                      <td className="p-4 md:p-5 text-center text-slate-500">無料〜</td>
                      <td className="p-4 md:p-5 text-center text-slate-500">1万円以下</td>
                      <td className="p-4 md:p-5 text-center text-slate-500">10万円〜</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="p-4 md:p-5 font-bold text-center bg-slate-50/50">申請方法</td>
                      <td className="p-4 md:p-5 text-center font-bold text-sky-600 bg-sky-50/30 border-x border-sky-50">完全オンライン申請</td>
                      <td className="p-4 md:p-5 text-center text-slate-500">自分で申請</td>
                      <td className="p-4 md:p-5 text-center text-slate-500">紙での申請</td>
                      <td className="p-4 md:p-5 text-center text-slate-500">オンライン</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="p-4 md:p-5 font-bold text-center bg-slate-50/50">顧客の作業</td>
                      <td className="p-4 md:p-5 text-center font-bold text-sky-600 bg-sky-50/30 border-x border-sky-50">情報入力のみ</td>
                      <td className="p-4 md:p-5 text-center text-slate-500">自分で書類作成・申請</td>
                      <td className="p-4 md:p-5 text-center text-slate-500">書類印刷・法務局訪問</td>
                      <td className="p-4 md:p-5 text-center text-slate-500">面談・書類確認</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 md:p-5 font-bold text-center bg-slate-50/50">完了まで</td>
                      <td className="p-4 md:p-5 text-center font-bold text-sky-600 bg-sky-50/30 border-x border-sky-50">申請まで完全代行</td>
                      <td className="p-4 md:p-5 text-center text-slate-500">サポートのみ</td>
                      <td className="p-4 md:p-5 text-center text-slate-500">書類作成まで</td>
                      <td className="p-4 md:p-5 text-center text-slate-500">申請まで代行</td>
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
                  <CardTitle className="text-xl text-red-600">対応できないこと</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> 電話・対面での相談</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> 複雑な定款の作成</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> 現物出資のある設立</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> 外国人が発起人の場合</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> 許認可申請の代行</li>
                  </ul>
                </CardContent>
              </Card>

              {/* 必要なもの (Blue) */}
              <Card className="border-t-4 border-t-sky-400 shadow-md hover:shadow-lg transition-all bg-white border-x border-b border-slate-100">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-sky-500" />
                  </div>
                  <CardTitle className="text-xl text-sky-600">お客様にご用意いただくもの</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span> マイナンバーカード（発起人全員）</li>
                    <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span> ICカードリーダーまたはスマホ</li>
                    <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span> 個人の印鑑証明書</li>
                    <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span> 資本金の払込証明</li>
                    <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span> 会社の実印</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans" className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                選べる3つの料金プラン
              </h2>
              <p className="text-slate-600">
                お客様のニーズに合わせて最適なプランをお選びいただけます。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Light Plan */}
              <Card className="border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-300 group-hover:bg-slate-400 transition-colors"></div>
                <CardHeader className="text-center pb-2 pt-8">
                  <CardTitle className="text-2xl text-slate-700 mb-2">ライトプラン</CardTitle>
                  <div className="text-4xl font-bold text-slate-900 mb-1">
                    49,800<span className="text-lg font-normal text-slate-500">円</span>
                  </div>
                  <p className="text-sm text-slate-500">（税込 54,780円）</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-600">定款作成・認証</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-600">登記書類作成</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-600">登記申請代行</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-400">
                      <X className="h-5 w-5 shrink-0" />
                      <span className="line-through">税務届出</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-400">
                      <X className="h-5 w-5 shrink-0" />
                      <span className="line-through">社保届出</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white">
                    このプランで申し込む
                  </Button>
                </CardContent>
              </Card>

              {/* Standard Plan (Recommended) */}
              <Card className="border-2 border-sky-500 shadow-xl relative overflow-hidden transform md:-translate-y-4 z-10">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-sky-500"></div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  人気No.1
                </div>
                <CardHeader className="text-center pb-2 pt-10">
                  <CardTitle className="text-2xl text-sky-600 mb-2">ミドルプラン</CardTitle>
                  <div className="text-5xl font-bold text-slate-900 mb-1">
                    99,800<span className="text-lg font-normal text-slate-500">円</span>
                  </div>
                  <p className="text-sm text-slate-500">（税込 109,780円）</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sky-500 shrink-0" />
                      <span className="text-slate-700 font-medium">ライトプランの内容全て</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sky-500 shrink-0" />
                      <span className="text-slate-700 font-medium">税務署への届出</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sky-500 shrink-0" />
                      <span className="text-slate-700 font-medium">都道府県税事務所への届出</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sky-500 shrink-0" />
                      <span className="text-slate-700 font-medium">市町村への届出</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-400">
                      <X className="h-5 w-5 shrink-0" />
                      <span className="line-through">社保届出</span>
                    </li>
                  </ul>
                  <Button size="lg" className="w-full bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/20 font-bold">
                    このプランで申し込む
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-300 group-hover:bg-slate-400 transition-colors"></div>
                <CardHeader className="text-center pb-2 pt-8">
                  <CardTitle className="text-2xl text-slate-700 mb-2">カスタマイズプラン</CardTitle>
                  <div className="text-4xl font-bold text-slate-900 mb-1">
                    500,000<span className="text-lg font-normal text-slate-500">円〜</span>
                  </div>
                  <p className="text-sm text-slate-500">（税込 550,000円〜）</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-600">ミドルの内容全て</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-600">年金事務所への届出</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-600">労働基準監督署への届出</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-600">ハローワークへの届出</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-600">事業計画書作成サポート</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white">
                    お問い合わせ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Flow Section */}
        <section id="flow" className="py-24 bg-slate-50/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                ご利用の流れ
              </h2>
              <p className="text-slate-600">
                たったの4ステップで会社設立が完了します。
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block"></div>

                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8 mb-16">
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-12">
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 w-full max-w-md relative">
                      <div className="absolute top-6 right-6 text-6xl font-bold text-slate-100 -z-10">01</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Smartphone className="h-6 w-6 text-sky-500" />
                        フォームから申し込み
                      </h3>
                      <p className="text-slate-600">
                        Webサイトの申し込みフォームから、会社名や資本金などの基本情報を入力します。所要時間は約10分です。
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-sky-500 border-4 border-white shadow-sm flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                    1
                  </div>
                  <div className="w-full md:w-1/2 md:pl-12"></div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8 mb-16">
                  <div className="w-full md:w-1/2 md:pr-12"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-sky-500 border-4 border-white shadow-sm flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                    2
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-12">
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 w-full max-w-md relative">
                      <div className="absolute top-6 right-6 text-6xl font-bold text-slate-100 -z-10">02</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <CreditCard className="h-6 w-6 text-sky-500" />
                        費用のお支払い
                      </h3>
                      <p className="text-slate-600">
                        クレジットカードまたは銀行振込で費用をお支払いいただきます。入金確認後、すぐに手続きを開始します。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8 mb-16">
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-12">
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 w-full max-w-md relative">
                      <div className="absolute top-6 right-6 text-6xl font-bold text-slate-100 -z-10">03</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <ShieldCheck className="h-6 w-6 text-sky-500" />
                        電子署名
                      </h3>
                      <p className="text-slate-600">
                        作成された定款などの書類を確認し、マイナンバーカードを使って電子署名を行います。スマホだけで完結します。
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-sky-500 border-4 border-white shadow-sm flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                    3
                  </div>
                  <div className="w-full md:w-1/2 md:pl-12"></div>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2 md:pr-12"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 border-4 border-white shadow-sm flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                    <Check className="h-6 w-6" />
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-12">
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100 w-full max-w-md relative">
                      <div className="absolute top-6 right-6 text-6xl font-bold text-emerald-50 -z-10">04</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Zap className="h-6 w-6 text-emerald-500" />
                        登記完了
                      </h3>
                      <p className="text-slate-600">
                        司法書士が法務局へ申請を行います。申請から最短3日〜1週間程度で登記が完了し、会社設立となります。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05] pointer-events-none"></div>
          <div className="container text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              まずは無料相談から始めませんか？
            </h2>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
              会社設立に関する疑問や不安を、専門家が解消します。<br/>
              無理な勧誘は一切ありませんので、お気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="w-full sm:w-auto px-10 py-6 text-lg bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full shadow-lg shadow-sky-500/20">
                プランを確認して申し込む
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <img src="/logo.png" alt="司法書士法人そうぞう" className="h-10 w-auto object-contain mb-6" />
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                完全オンラインで会社設立をサポート。<br/>
                効率的でスマートな起業体験を提供します。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#difference" className="hover:text-sky-500">他社との違い</a></li>
                <li><a href="#details" className="hover:text-sky-500">サービス詳細</a></li>
                <li><a href="#plans" className="hover:text-sky-500">料金プラン</a></li>
                <li><a href="#flow" className="hover:text-sky-500">ご利用の流れ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">会社情報</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-sky-500">運営会社</a></li>
                <li><a href="#" className="hover:text-sky-500">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-sky-500">特定商取引法に基づく表記</a></li>
                <li><a href="#" className="hover:text-sky-500">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} 司法書士法人そうぞう All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
