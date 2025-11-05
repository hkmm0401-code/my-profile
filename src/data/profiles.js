export const profiles = {
  webDeveloper: {
    hero: {
      name: '久積奎吾',
      occupation: 'フルスタック Web デベロッパー',
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com', icon: 'github' },
        { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' }
      ]
    },
    about: {
      paragraphs: [
        'こんにちは！久積奎吾と申します。Web開発に情熱を持つフルスタックデベロッパーです。',
        'フロントエンドとバックエンドの両方で豊富な経験があり、特にモダンなJavaScriptフレームワーク（Vue.js、React）とNode.jsを使用した開発を得意としています。',
        'ユーザー体験を重視したインタラクティブなWebアプリケーションの構築に取り組んでおり、常に最新の技術トレンドをキャッチアップし、より良いソリューションを提供することを心がけています。'
      ],
      infoCards: [
        { icon: '📍', title: '所在地', value: '東京都' },
        { icon: '💼', title: '職業', value: 'Web デベロッパー' },
        { icon: '🎓', title: '学歴', value: '情報工学専攻' }
      ]
    },
    skills: [
      {
        category: 'フロントエンド',
        items: [
          { name: 'Vue.js', level: 90 },
          { name: 'React', level: 85 },
          { name: 'JavaScript / TypeScript', level: 88 },
          { name: 'HTML / CSS', level: 95 }
        ]
      },
      {
        category: 'バックエンド',
        items: [
          { name: 'Node.js', level: 85 },
          { name: 'Python', level: 80 },
          { name: 'Spring Boot', level: 78 },
          { name: 'Database (SQL/NoSQL)', level: 75 }
        ]
      },
      {
        category: 'その他',
        items: [
          { name: 'Git / GitHub', level: 90 },
          { name: 'Docker', level: 70 },
          { name: 'CI/CD', level: 75 }
        ]
      }
    ],
    portfolio: [
      {
        id: 1,
        title: 'Eコマースサイト',
        description: 'Vue.js と Node.js を使用したフルスタックのEコマースアプリケーション。ショッピングカート、決済機能を実装。',
        image: 'https://via.placeholder.com/400x250',
        tags: ['Vue.js', 'Node.js', 'MongoDB'],
        demoUrl: 'https://example.com/demo1',
        sourceUrl: 'https://github.com',
        demoLabel: 'デモ',
        sourceLabel: 'GitHub'
      },
      {
        id: 2,
        title: 'タスク管理アプリ',
        description: 'React と Firebase を使用したリアルタイムタスク管理アプリケーション。ドラッグ&ドロップ機能付き。',
        image: 'https://via.placeholder.com/400x250',
        tags: ['React', 'Firebase', 'Material-UI'],
        demoUrl: 'https://example.com/demo2',
        sourceUrl: 'https://github.com',
        demoLabel: 'デモ',
        sourceLabel: 'GitHub'
      },
      {
        id: 3,
        title: 'ブログプラットフォーム',
        description: 'Next.js と TypeScript で構築したモダンなブログプラットフォーム。SEO最適化とMarkdownサポート。',
        image: 'https://via.placeholder.com/400x250',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        demoUrl: 'https://example.com/demo3',
        sourceUrl: 'https://github.com',
        demoLabel: 'デモ',
        sourceLabel: 'GitHub'
      },
      {
        id: 4,
        title: 'データビジュアライゼーション',
        description: 'D3.js を使用したインタラクティブなデータ可視化ダッシュボード。リアルタイムデータ更新対応。',
        image: 'https://via.placeholder.com/400x250',
        tags: ['Vue.js', 'D3.js', 'WebSocket'],
        demoUrl: 'https://example.com/demo4',
        sourceUrl: 'https://github.com',
        demoLabel: 'デモ',
        sourceLabel: 'GitHub'
      }
    ]
  },
  soundEngineer: {
    hero: {
      name: '久積奎吾',
      occupation: '音響エンジニア (フリーランス)',
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com', icon: 'github' },
        { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
        { name: 'Bluesky', url: 'https://bsky.app/profile/zuming.bsky.social', icon: 'bluesky' }
      ]
    },
    about: {
      paragraphs: [
        'こんにちは！久積奎吾と申します。音響に情熱を持つ音響エンジニアです。',
        '音響技術専門学校を卒業後、レコーディングスタジオで5年間勤務し、様々なアーティストの録音、ミキシング、マスタリングを担当してきました。',
        '現在はフリーランスとして独立し、レコーディング、ライブPA、音響デザインなど幅広い音響制作に携わっています。常にクライアントのビジョンを実現し、最高の音質を追求することを心がけています。'
      ],
      infoCards: [
        { icon: '📍', title: '所在地', value: '東京都' },
        { icon: '💼', title: '職業', value: '音響エンジニア' },
        { icon: '🎓', title: '学歴', value: '音響技術専門学校卒業' }
      ]
    },
    skills: [
      {
        category: 'レコーディング',
        items: [
          { name: 'Pro Tools', level: 95 },
          { name: 'Logic Pro', level: 90 },
          { name: 'Ableton Live', level: 85 },
          { name: 'マイクロフォン技術', level: 90 }
        ]
      },
      {
        category: 'ミキシング・マスタリング',
        items: [
          { name: 'ミキシング', level: 92 },
          { name: 'マスタリング', level: 88 },
          { name: 'アナログ機材', level: 85 },
          { name: 'プラグイン処理', level: 90 }
        ]
      },
      {
        category: 'その他',
        items: [
          { name: 'ライブPA', level: 87 },
          { name: '音響デザイン', level: 83 },
          { name: '音響機材メンテナンス', level: 80 }
        ]
      }
    ],
    portfolio: [
      {
        id: 1,
        title: 'インディーバンドアルバム制作',
        description: '新人インディーバンドのデビューアルバムをフルプロデュース。レコーディング、ミキシング、マスタリングまで全工程を担当。',
        image: 'https://via.placeholder.com/400x250',
        tags: ['レコーディング', 'ミキシング', 'マスタリング'],
        demoUrl: 'https://example.com/demo1',
        sourceUrl: 'https://soundcloud.com',
        demoLabel: '詳細',
        sourceLabel: 'サンプル視聴'
      },
      {
        id: 2,
        title: 'ライブイベント音響',
        description: '大型音楽フェスティバルのメインステージPA担当。500人規模の会場で最高の音響環境を提供。',
        image: 'https://via.placeholder.com/400x250',
        tags: ['ライブPA', '音響設計', 'イベント'],
        demoUrl: 'https://example.com/demo2',
        sourceUrl: 'https://soundcloud.com',
        demoLabel: '詳細',
        sourceLabel: 'サンプル視聴'
      },
      {
        id: 3,
        title: 'ポッドキャスト制作',
        description: '人気ポッドキャストシリーズの音響制作。録音、編集、マスタリングまで一貫して担当。',
        image: 'https://via.placeholder.com/400x250',
        tags: ['録音', '編集', 'ポッドキャスト'],
        demoUrl: 'https://example.com/demo3',
        sourceUrl: 'https://soundcloud.com',
        demoLabel: '詳細',
        sourceLabel: 'サンプル視聴'
      },
      {
        id: 4,
        title: '映像作品音響デザイン',
        description: '短編映画の音響デザインとミキシング。効果音の制作からファイナルミックスまで担当。',
        image: 'https://via.placeholder.com/400x250',
        tags: ['音響デザイン', '効果音', '映像音響'],
        demoUrl: 'https://example.com/demo4',
        sourceUrl: 'https://soundcloud.com',
        demoLabel: '詳細',
        sourceLabel: 'サンプル視聴'
      }
    ]
  }
}
