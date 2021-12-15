export interface BbsContent {

  id: number;
  author: string;
  postDate: string;
  title: string;
  subtitle: string;
  content: string;
  comments: number;

}

export const bbspost = [
  {
    id: 1,
    author: 'ユーザー 1',
    postDate:'2021年11月15日',
    title: 'Oktaの効果的な使い方',
    subtitle: 'Lifecycle Managementでの、効果的なユーザープロビジョニング',
    content: 'プロビジョニングには、情報技術（IT）システム内のリソースに対するアクセス権の作成、更新、および削除が含まれます。プロビジョニングとは、従業員と社外ユーザー両方のアイデンティティについて、すべての面に関係するオンボーディング、異動、サポート、およびオフボーディングを対象とするライフサイクル管理の一部をなす概念です。ユーザーのアイデンティティがさまざまな段階を通る流れは、ユーザーのライフサイクル状態の変化と呼ばれます。そのようなイベントが発生すると、その結果としてさまざまなアクションが必要となります。リソースへのアクセスが、ビジネスポリシーとセキュリティポリシーに準拠することを確保するためです。 従業員の雇用に伴う最初のアクションの 1 つは、人事部門が当該従業員について新規レコードを作成することです。企業によって違いはありますが、次に実行されるアクションは、人事部門、IT 部門、当該従業員の管理者が連携して行う、従業員が必要とするすべてのアプリやアカウントに対するアクセス権の付与です。会社のセキュリティ要件の説明と適用も合わせて実施されます。従業員が昇進したり、職種が変わったり、さまざまなソフトウェアツールを導入/削除したりする際にも、アクセス要件が変化します。企業が事業の再構築や合併買収に伴って、新たな従業員を採用するという状況も考えられます。外注先やパートナーにアプリのアクセス権を一時的または恒久的に付与する必要も発生するかもしれません。諸事情により従業員が離職する場合は、さまざまな部門でプロセスが実行される可能性があります。ユーザーアイデンティティの変化がどのような理由で生じた場合でも、最終的にその管理は IT 部門の担当になります。1 人の IT 管理者が 1 件のプロビジョニングまたはプロビジョニング解除要求を処理するのに、平均で 30 分かかります。これには、パスワードリセット依頼や常に変化する多様な従業員用デバイスの設定要求のヘルプデスクコールは含まれていません。プロビジョニングおよびユーザーライフサイクル管理の自動化を導入すれば、IT 部門などの貴重な時間を節約し、本来なくてもよい不満を軽減できるのです。',
    comments: '2',
  },
  {
    id: 2,
    author: 'ユーザー2',
    postDate:'2021年2月8日',
    title: 'Okta Integration Network（OIN）のメリット',
    subtitle: 'シームレスな顧客エクスペリエンスを構築',
    content: 'ユーザーエクスペリエンスをパーソナライズし、お客様の安全を維持しながら実運用までの時間を短縮します。以下のような統合が可能です。API ゲートウェイ - 迅速なアプリケーション開発と一元化されたアイデンティティ主導型 API セキュリティを実現します。アイデンティティプルーフィング - リスクベースの認証により、なりすましから保護します。',
    comments: '6',
  },
  {
    id: 3,
    author: 'ユーザー3',
    postDate:'2021年7月26日',
    title: '統合された単一のビューで各ユーザーを管理',
    subtitle: 'シームレスな顧客エクスペリエンスを構築',
    content: '複数のアイデンティティソースを単一ビューで管理多くの企業は、請負業者、パートナー、顧客、買収した企業の従業員など、さまざまなタイプのユーザーを含む複数のアイデンティティソースを使用しています。Okta Universal Directoryは、ADとLDAPディレクトリの統合、そしてWorkdayなどの人事システム、G SuiteなどのSaaSアプリ、CSVファイル、サードパーティアイデンティティプロバイダー向けに即座に利用可能な接続により、これらのグループすべてに対する一元的ビューを提供します。',
    comments: '5',
  },
]
