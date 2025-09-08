import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'EN' | 'ZH-TW' | 'JA' | 'KO';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  EN: {
    // Header
    'header.wallet': 'Wallet',
    'header.language': 'Language',
    
    // Navigation
    'nav.home': 'Home',
    'nav.team': 'Team',
    'nav.assets': 'Assets',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.close': 'Close',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    
    // Home Page
    'home.title': 'Fractal dApp',
    'home.subtitle': 'Decentralized Finance Platform',
    'home.aiFund': 'AI Fund',
    'home.stake': 'Stake',
    'home.viewDetails': 'View Details',
    'home.passiveIncome': 'Passive Income',
    'home.activeIncome': 'Active Income',
    'home.miningIncome': 'Mining Income',
    'home.todayEarnings': 'Today\'s Earnings',
    'home.accumulatedEarnings': 'Accumulated Earnings',
    
    // Team Page
    'team.title': 'Team',
    'team.referralStats': 'Referral Statistics',
    'team.directReferrals': 'Direct Referrals',
    'team.teamUsers': 'Team Users',
    'team.directPerformance': 'Direct Performance',
    'team.teamPerformance': 'Team Performance',
    'team.referralList': 'Referral List',
    'team.uid': 'UID',
    'team.address': 'Address',
    'team.performance': 'Performance',
    
    // Assets Page
    'assets.title': 'Assets',
    'assets.usdt': 'USDT',
    'assets.ftl': 'FTL TOKEN',
    'assets.availableBalance': 'Available Balance',
    'assets.deposit': 'Deposit',
    'assets.withdraw': 'Withdraw',
    'assets.records': 'Records',
    
    // Investment Records
    'investment.title': 'Investment Records',
    'investment.orderNumber': 'Order Number',
    'investment.amount': 'Amount',
    'investment.status': 'Status',
    'investment.maturityDate': 'Maturity Date',
    'investment.action': 'Action',
    'investment.active': 'Active',
    'investment.ended': 'Ended',
    'investment.suspended': 'Suspended',
    'investment.withdraw': 'Withdraw',
    'investment.reinvest': 'Reinvest',
    
    // FTL Swap
    'swap.title': 'FTL Swap',
    'swap.from': 'From',
    'swap.to': 'To',
    'swap.amount': 'Amount',
    'swap.swap': 'Swap',
    'swap.records': 'Swap Records',
    'swap.orderId': 'Order ID',
    'swap.date': 'Date',
    'swap.swapAmount': 'Swap Amount',
    'swap.price': 'Price',
    
    // Earnings
    'earnings.title': 'My Earnings',
    'earnings.passiveIncome': 'Passive Income',
    'earnings.activeIncome': 'Active Income',
    'earnings.miningIncome': 'Mining Income',
    'earnings.todayEarnings': 'Today\'s Earnings',
    'earnings.accumulatedEarnings': 'Accumulated Earnings',
    'earnings.viewRecords': 'View Records',
    
    // Records
    'records.title': 'Records',
    'records.all': 'All',
    'records.in': 'In',
    'records.out': 'Out',
    'records.date': 'Date',
    'records.amount': 'Amount',
    'records.type': 'Type',
    'records.orderId': 'Order ID',
    'records.passiveIncome': 'Passive Income',
    'records.activeIncome': 'Active Income',
    'records.extract': 'Extract',
    'records.fee': 'Fee',
    
    // Modals
    'modal.stake': 'Stake',
    'modal.amount': 'Amount',
    'modal.paymentMethod': 'Payment Method',
    'modal.usdt': 'USDT',
    'modal.ftl': 'FTL',
    'modal.confirm': 'Confirm',
    'modal.cancel': 'Cancel',
    'modal.success': 'Success',
    'modal.error': 'Error',
    'modal.stakeAIFund': 'Stake AI Fund',
    'modal.bindingRegistration': 'Binding Referral',
    'modal.latestNews': 'Latest News',
    
    // Form
    'form.amountToStake': 'Amount to Stake (USDT)',
    'form.minimumStake': 'Minimum Stake $100',
    'form.usdtBalance': 'USDT Balance',
    'form.ftlBalance': 'FTL Balance',
    'form.paymentMethod': 'Payment Method',
    'form.100USDT': '100% USDT',
    'form.50USDT50FTL': '50% USDT + 50% FTL',
    'form.paymentBreakdown': 'Payment Breakdown',
    'form.usdtAmount': 'USDT Amount',
    'form.ftlAmount': 'FTL Amount',
    'form.referralAddress': 'Referral Address',
    'form.enterReferralAddress': 'Enter your referral address',
    'form.registering': 'Registering...',
    'form.register': 'Register',
    
    // News
    'news.newAIFundLaunch': 'New AI Fund Launch',
    'news.newAIFundDescription': 'We are excited to announce the launch of our revolutionary 360° AI Fund! This new investment opportunity offers enhanced staking rewards with up to 25% APY.',
    'news.systemMaintenance': 'System Maintenance',
    'news.systemMaintenanceDescription': 'Scheduled maintenance will be performed on our trading system on January 20th, 2025 from 02:00 to 04:00 UTC.',
    'news.securityUpdate': 'Security Update',
    'news.securityUpdateDescription': 'We have implemented additional security measures to protect your assets. Please ensure your account is secured with two-factor authentication.',
    
    // Main Banner
    'banner.welcomeToFractal': 'Welcome to Fractal',
    'banner.communityPlatform': 'Community Platform',
    'banner.userId': 'User ID',
    'banner.currentRank': 'Current Rank',
    'banner.walletAddress': 'Wallet Address',
    
    // Shortcuts Menu
    'shortcuts.quickActions': 'Quick Actions',
    'shortcuts.viewAll': 'View All',
    'shortcuts.myEarnings': 'My Earnings',
    'shortcuts.myEarningsDesc': 'View your total earnings',
    'shortcuts.invitationLink': 'Invitation Link',
    'shortcuts.invitationLinkDesc': 'Share your referral link',
    'shortcuts.ftlSwap': 'FTL Swap',
    'shortcuts.ftlSwapDesc': 'Exchange tokens instantly',
    'shortcuts.securePassword': 'Secure Password',
    'shortcuts.securePasswordDesc': 'Manage your security settings',
    'shortcuts.announcement': 'Announcement',
    'shortcuts.announcementDesc': 'View latest announcements',
    
    // Sub Banner
    'subbanner.quickStart': 'Quick Start',
    'subbanner.quickStartDesc': 'Get started with staking in just a few clicks. No complex setup required.',
    'subbanner.startNow': 'Start Now',
    'subbanner.community': 'Community',
    'subbanner.communityDesc': 'Join our growing community of DeFi enthusiasts and earn together.',
    'subbanner.joinNow': 'Join Now',
    
    // DAO Mining Data
    'dao.title': 'DAO Mining Data',
    'dao.miningPoolStats': 'Mining Pool Stats',
    'dao.todaysActivity': 'Today\'s Activity',
    'dao.totalMiningPool': 'Total Mining Pool',
    'dao.poolRemaining': 'Pool Remaining',
    'dao.totalMined': 'Total Mined',
    'dao.totalDestroyed': 'Total Destroyed',
    'dao.circulatingSupply': 'Circulating Supply',
    'dao.todaysHashPower': 'Today\'s Hash Power',
    'dao.todaysEmission': 'Today\'s Emission',
    'dao.todaysDistribution': 'Today\'s Distribution',
    'dao.todaysDestroy': 'Today\'s Destroy',
    
    // Buttons
    'button.stake': 'Stake',
    'button.extract': 'Extract',
    'button.mine': 'Mine',
    'button.transfer': 'Transfer',
    'button.deposit': 'Deposit',
    'button.withdraw': 'Withdraw',
    'button.records': 'Records',
    'button.viewDetails': 'View Details',
    'button.copy': 'Copy',
    'button.share': 'Share',
    'button.readMore': 'Read More',
    'button.bindingRegistration': 'Binding Registration',
    'button.newsPopup': 'News Popup',
    'button.cancel': 'Cancel',
    'button.stakeNow': 'Stake Now',
    'button.close': 'Close',
  },
  'ZH-TW': {
    // Header
    'header.wallet': '錢包',
    'header.language': '語言',
    
    // Navigation
    'nav.home': '首頁',
    'nav.team': '團隊',
    'nav.assets': '資產',
    
    // Common
    'common.loading': '載入中...',
    'common.error': '錯誤',
    'common.success': '成功',
    'common.cancel': '取消',
    'common.confirm': '確認',
    'common.close': '關閉',
    'common.save': '儲存',
    'common.edit': '編輯',
    'common.delete': '刪除',
    'common.back': '返回',
    'common.next': '下一步',
    'common.previous': '上一步',
    
    // Home Page
    'home.title': 'Fractal dApp',
    'home.subtitle': '去中心化金融平台',
    'home.aiFund': 'AI 基金',
    'home.stake': '質押',
    'home.viewDetails': '查看詳情',
    'home.passiveIncome': '被動收入',
    'home.activeIncome': '主動收入',
    'home.miningIncome': '挖礦收入',
    'home.todayEarnings': '今日收益',
    'home.accumulatedEarnings': '累計收益',
    
    // Team Page
    'team.title': '團隊',
    'team.referralStats': '推薦統計',
    'team.directReferrals': '直接推薦',
    'team.teamUsers': '團隊用戶',
    'team.directPerformance': '直接業績',
    'team.teamPerformance': '團隊業績',
    'team.referralList': '推薦列表',
    'team.uid': '用戶ID',
    'team.address': '地址',
    'team.performance': '業績',
    
    // Assets Page
    'assets.title': '資產',
    'assets.usdt': 'USDT',
    'assets.ftl': 'FTL 代幣',
    'assets.availableBalance': '可用餘額',
    'assets.deposit': '充值',
    'assets.withdraw': '提現',
    'assets.records': '記錄',
    
    // Investment Records
    'investment.title': '投資記錄',
    'investment.orderNumber': '訂單號',
    'investment.amount': '金額',
    'investment.status': '狀態',
    'investment.maturityDate': '到期日期',
    'investment.action': '操作',
    'investment.active': '進行中',
    'investment.ended': '已結束',
    'investment.suspended': '已暫停',
    'investment.withdraw': '提現',
    'investment.reinvest': '重新投資',
    
    // FTL Swap
    'swap.title': 'FTL閃兌',
    'swap.from': '從',
    'swap.to': '到',
    'swap.amount': '數量',
    'swap.swap': '交換',
    'swap.records': '交換記錄',
    'swap.orderId': '訂單ID',
    'swap.date': '日期',
    'swap.swapAmount': '交換數量',
    'swap.price': '價格',
    
    // Earnings
    'earnings.title': '我的收益',
    'earnings.passiveIncome': '被動收入',
    'earnings.activeIncome': '主動收入',
    'earnings.miningIncome': '挖礦收入',
    'earnings.todayEarnings': '今日收益',
    'earnings.accumulatedEarnings': '累計收益',
    'earnings.viewRecords': '查看記錄',
    
    // Records
    'records.title': '記錄',
    'records.all': '全部',
    'records.in': '收入',
    'records.out': '支出',
    'records.date': '日期',
    'records.amount': '金額',
    'records.type': '類型',
    'records.orderId': '訂單ID',
    'records.passiveIncome': '被動收入',
    'records.activeIncome': '主動收入',
    'records.extract': '提取',
    'records.fee': '手續費',
    
    // Modals
    'modal.stake': '質押',
    'modal.amount': '數量',
    'modal.paymentMethod': '支付方式',
    'modal.usdt': 'USDT',
    'modal.ftl': 'FTL',
    'modal.confirm': '確認',
    'modal.cancel': '取消',
    'modal.success': '成功',
    'modal.error': '錯誤',
    'modal.stakeAIFund': '質押AI基金',
    'modal.bindingRegistration': '綁定推薦',
    'modal.latestNews': '最新消息',
    
    // Form
    'form.amountToStake': '質押數量 (USDT)',
    'form.minimumStake': '最低質押 $100',
    'form.usdtBalance': 'USDT餘額',
    'form.ftlBalance': 'FTL餘額',
    'form.paymentMethod': '支付方式',
    'form.100USDT': '100% USDT',
    'form.50USDT50FTL': '50% USDT + 50% FTL',
    'form.paymentBreakdown': '支付明細',
    'form.usdtAmount': 'USDT數量',
    'form.ftlAmount': 'FTL數量',
    'form.referralAddress': '推薦地址',
    'form.enterReferralAddress': '輸入您的推薦地址',
    'form.registering': '註冊中...',
    'form.register': '註冊',
    
    // News
    'news.newAIFundLaunch': '新AI基金啟動',
    'news.newAIFundDescription': '我們很高興宣布推出革命性的360° AI基金！這個新的投資機會提供增強的質押獎勵，年化收益率高達25%。',
    'news.systemMaintenance': '系統維護',
    'news.systemMaintenanceDescription': '我們將於2025年1月20日02:00至04:00 UTC對交易系統進行定期維護。',
    'news.securityUpdate': '安全更新',
    'news.securityUpdateDescription': '我們已實施額外的安全措施來保護您的資產。請確保您的帳戶已啟用雙重身份驗證。',
    
    // Main Banner
    'banner.welcomeToFractal': '歡迎來到 Fractal',
    'banner.communityPlatform': '社區平台',
    'banner.userId': '用戶ID',
    'banner.currentRank': '當前等級',
    'banner.walletAddress': '錢包地址',
    
    // Shortcuts Menu
    'shortcuts.quickActions': '主選單欄',
    'shortcuts.viewAll': '查看全部',
    'shortcuts.myEarnings': '我的收益',
    'shortcuts.myEarningsDesc': '查看您的總收益',
    'shortcuts.invitationLink': '邀請連結',
    'shortcuts.invitationLinkDesc': '分享您的推薦連結',
    'shortcuts.ftlSwap': 'FTL閃兌',
    'shortcuts.ftlSwapDesc': '即時閃兌代幣',
    'shortcuts.securePassword': '安全密碼',
    'shortcuts.securePasswordDesc': '管理您的安全設定',
    'shortcuts.announcement': '公告',
    'shortcuts.announcementDesc': '查看最新公告',
    
    // Sub Banner
    'subbanner.quickStart': '快速開始',
    'subbanner.quickStartDesc': '只需幾次點擊即可開始質押。無需複雜設定。',
    'subbanner.startNow': '立即開始',
    'subbanner.community': '社區',
    'subbanner.communityDesc': '加入我們不斷成長的 DeFi 愛好者社區，一起賺取收益。',
    'subbanner.joinNow': '立即加入',
    
    // DAO Mining Data
    'dao.title': 'DAO 挖礦數據',
    'dao.miningPoolStats': '挖礦池統計',
    'dao.todaysActivity': '今日活動',
    'dao.totalMiningPool': '總挖礦池',
    'dao.poolRemaining': '剩餘池量',
    'dao.totalMined': '總挖礦量',
    'dao.totalDestroyed': '總銷毀量',
    'dao.circulatingSupply': '流通供應量',
    'dao.todaysHashPower': '今日算力',
    'dao.todaysEmission': '今日發行',
    'dao.todaysDistribution': '今日分配',
    'dao.todaysDestroy': '今日銷毀',
    
    // Buttons
    'button.stake': '質押',
    'button.extract': '提取',
    'button.mine': '挖礦',
    'button.transfer': '轉帳',
    'button.deposit': '充值',
    'button.withdraw': '提現',
    'button.records': '記錄',
    'button.viewDetails': '查看詳情',
    'button.copy': '複製',
    'button.share': '分享',
    'button.readMore': '閱讀更多',
    'button.bindingRegistration': '綁定註冊',
    'button.newsPopup': '新聞彈窗',
    'button.cancel': '取消',
    'button.stakeNow': '立即質押',
    'button.close': '關閉',
  },
  JA: {
    // Header
    'header.wallet': 'ウォレット',
    'header.language': '言語',
    
    // Navigation
    'nav.home': 'ホーム',
    'nav.team': 'チーム',
    'nav.assets': 'アセット',
    
    // Common
    'common.loading': '読み込み中...',
    'common.error': 'エラー',
    'common.success': '成功',
    'common.cancel': 'キャンセル',
    'common.confirm': '確認',
    'common.close': '閉じる',
    'common.save': '保存',
    'common.edit': '編集',
    'common.delete': '削除',
    'common.back': '戻る',
    'common.next': '次へ',
    'common.previous': '前へ',
    
    // Home Page
    'home.title': 'Fractal dApp',
    'home.subtitle': '分散型金融プラットフォーム',
    'home.aiFund': 'AI ファンド',
    'home.stake': 'ステーキング',
    'home.viewDetails': '詳細を見る',
    'home.passiveIncome': 'パッシブ収入',
    'home.activeIncome': 'アクティブ収入',
    'home.miningIncome': 'マイニング収入',
    'home.todayEarnings': '今日の収益',
    'home.accumulatedEarnings': '累積収益',
    
    // Team Page
    'team.title': 'チーム',
    'team.referralStats': '紹介統計',
    'team.directReferrals': '直接紹介',
    'team.teamUsers': 'チームユーザー',
    'team.directPerformance': '直接パフォーマンス',
    'team.teamPerformance': 'チームパフォーマンス',
    'team.referralList': '紹介リスト',
    'team.uid': 'UID',
    'team.address': 'アドレス',
    'team.performance': 'パフォーマンス',
    
    // Assets Page
    'assets.title': 'アセット',
    'assets.usdt': 'USDT',
    'assets.ftl': 'FTL トークン',
    'assets.availableBalance': '利用可能残高',
    'assets.deposit': '入金',
    'assets.withdraw': '出金',
    'assets.records': '記録',
    
    // Investment Records
    'investment.title': '投資記録',
    'investment.orderNumber': '注文番号',
    'investment.amount': '金額',
    'investment.status': 'ステータス',
    'investment.maturityDate': '満期日',
    'investment.action': 'アクション',
    'investment.active': 'アクティブ',
    'investment.ended': '終了',
    'investment.suspended': '停止',
    'investment.withdraw': '出金',
    'investment.reinvest': '再投資',
    
    // FTL Swap
    'swap.title': 'FTL スワップ',
    'swap.from': 'から',
    'swap.to': 'へ',
    'swap.amount': '数量',
    'swap.swap': 'スワップ',
    'swap.records': 'スワップ記録',
    'swap.orderId': '注文ID',
    'swap.date': '日付',
    'swap.swapAmount': 'スワップ数量',
    'swap.price': '価格',
    
    // Earnings
    'earnings.title': '私の収益',
    'earnings.passiveIncome': 'パッシブ収入',
    'earnings.activeIncome': 'アクティブ収入',
    'earnings.miningIncome': 'マイニング収入',
    'earnings.todayEarnings': '今日の収益',
    'earnings.accumulatedEarnings': '累積収益',
    'earnings.viewRecords': '記録を見る',
    
    // Records
    'records.title': '記録',
    'records.all': 'すべて',
    'records.in': '入金',
    'records.out': '出金',
    'records.date': '日付',
    'records.amount': '金額',
    'records.type': 'タイプ',
    'records.orderId': '注文ID',
    'records.passiveIncome': 'パッシブ収入',
    'records.activeIncome': 'アクティブ収入',
    'records.extract': '抽出',
    'records.fee': '手数料',
    
    // Modals
    'modal.stake': 'ステーキング',
    'modal.amount': '数量',
    'modal.paymentMethod': '支払い方法',
    'modal.usdt': 'USDT',
    'modal.ftl': 'FTL',
    'modal.confirm': '確認',
    'modal.cancel': 'キャンセル',
    'modal.success': '成功',
    'modal.error': 'エラー',
    'modal.stakeAIFund': 'AIファンドステーキング',
    'modal.bindingRegistration': 'バインディング紹介',
    'modal.latestNews': '最新ニュース',
    
    // Form
    'form.amountToStake': 'ステーキング数量 (USDT)',
    'form.minimumStake': '最低ステーキング $100',
    'form.usdtBalance': 'USDT残高',
    'form.ftlBalance': 'FTL残高',
    'form.paymentMethod': '支払い方法',
    'form.100USDT': '100% USDT',
    'form.50USDT50FTL': '50% USDT + 50% FTL',
    'form.paymentBreakdown': '支払い内訳',
    'form.usdtAmount': 'USDT数量',
    'form.ftlAmount': 'FTL数量',
    'form.referralAddress': '紹介アドレス',
    'form.enterReferralAddress': '紹介アドレスを入力してください',
    'form.registering': '登録中...',
    'form.register': '登録',
    
    // News
    'news.newAIFundLaunch': '新AIファンドローンチ',
    'news.newAIFundDescription': '革新的な360° AIファンドのローンチをお知らせします！この新しい投資機会は最大25%のAPYで強化されたステーキング報酬を提供します。',
    'news.systemMaintenance': 'システムメンテナンス',
    'news.systemMaintenanceDescription': '2025年1月20日02:00から04:00 UTCまで、取引システムの定期メンテナンスを実施します。',
    'news.securityUpdate': 'セキュリティアップデート',
    'news.securityUpdateDescription': '資産を保護するための追加のセキュリティ対策を実装しました。アカウントが二要素認証で保護されていることを確認してください。',
    
    // Main Banner
    'banner.welcomeToFractal': 'Fractalへようこそ',
    'banner.communityPlatform': 'コミュニティプラットフォーム',
    'banner.userId': 'ユーザーID',
    'banner.currentRank': '現在のランク',
    'banner.walletAddress': 'ウォレットアドレス',
    
    // Shortcuts Menu
    'shortcuts.quickActions': 'クイックアクション',
    'shortcuts.viewAll': 'すべて表示',
    'shortcuts.myEarnings': 'マイ収益',
    'shortcuts.myEarningsDesc': '総収益を表示',
    'shortcuts.invitationLink': '招待リンク',
    'shortcuts.invitationLinkDesc': '紹介リンクを共有',
    'shortcuts.ftlSwap': 'FTLスワップ',
    'shortcuts.ftlSwapDesc': 'トークンを即座に交換',
    'shortcuts.securePassword': 'セキュアパスワード',
    'shortcuts.securePasswordDesc': 'セキュリティ設定を管理',
    'shortcuts.announcement': 'お知らせ',
    'shortcuts.announcementDesc': '最新のお知らせを表示',
    
    // Sub Banner
    'subbanner.quickStart': 'クイックスタート',
    'subbanner.quickStartDesc': '数回のクリックでステーキングを開始。複雑な設定は不要です。',
    'subbanner.startNow': '今すぐ開始',
    'subbanner.community': 'コミュニティ',
    'subbanner.communityDesc': '成長するDeFi愛好家コミュニティに参加し、一緒に収益を得ましょう。',
    'subbanner.joinNow': '今すぐ参加',
    
    // DAO Mining Data
    'dao.title': 'DAOマイニングデータ',
    'dao.miningPoolStats': 'マイニングプール統計',
    'dao.todaysActivity': '今日のアクティビティ',
    'dao.totalMiningPool': '総マイニングプール',
    'dao.poolRemaining': 'プール残高',
    'dao.totalMined': '総マイニング量',
    'dao.totalDestroyed': '総破棄量',
    'dao.circulatingSupply': '流通供給量',
    'dao.todaysHashPower': '今日のハッシュパワー',
    'dao.todaysEmission': '今日のエミッション',
    'dao.todaysDistribution': '今日の分配',
    'dao.todaysDestroy': '今日の破棄',
    
    // Buttons
    'button.stake': 'ステーキング',
    'button.extract': '抽出',
    'button.mine': 'マイニング',
    'button.transfer': '転送',
    'button.deposit': '入金',
    'button.withdraw': '出金',
    'button.records': '記録',
    'button.viewDetails': '詳細を見る',
    'button.copy': 'コピー',
    'button.share': '共有',
    'button.readMore': '続きを読む',
    'button.bindingRegistration': 'バインディング登録',
    'button.newsPopup': 'ニュースポップアップ',
    'button.cancel': 'キャンセル',
    'button.stakeNow': '今すぐステーキング',
    'button.close': '閉じる',
  },
  KO: {
    // Header
    'header.wallet': '지갑',
    'header.language': '언어',
    
    // Navigation
    'nav.home': '홈',
    'nav.team': '팀',
    'nav.assets': '자산',
    
    // Common
    'common.loading': '로딩 중...',
    'common.error': '오류',
    'common.success': '성공',
    'common.cancel': '취소',
    'common.confirm': '확인',
    'common.close': '닫기',
    'common.save': '저장',
    'common.edit': '편집',
    'common.delete': '삭제',
    'common.back': '뒤로',
    'common.next': '다음',
    'common.previous': '이전',
    
    // Home Page
    'home.title': 'Fractal dApp',
    'home.subtitle': '탈중앙화 금융 플랫폼',
    'home.aiFund': 'AI 펀드',
    'home.stake': '스테이킹',
    'home.viewDetails': '세부사항 보기',
    'home.passiveIncome': '패시브 수입',
    'home.activeIncome': '액티브 수입',
    'home.miningIncome': '마이닝 수입',
    'home.todayEarnings': '오늘의 수익',
    'home.accumulatedEarnings': '누적 수익',
    
    // Team Page
    'team.title': '팀',
    'team.referralStats': '추천 통계',
    'team.directReferrals': '직접 추천',
    'team.teamUsers': '팀 사용자',
    'team.directPerformance': '직접 성과',
    'team.teamPerformance': '팀 성과',
    'team.referralList': '추천 목록',
    'team.uid': 'UID',
    'team.address': '주소',
    'team.performance': '성과',
    
    // Assets Page
    'assets.title': '자산',
    'assets.usdt': 'USDT',
    'assets.ftl': 'FTL 토큰',
    'assets.availableBalance': '사용 가능 잔액',
    'assets.deposit': '입금',
    'assets.withdraw': '출금',
    'assets.records': '기록',
    
    // Investment Records
    'investment.title': '투자 기록',
    'investment.orderNumber': '주문 번호',
    'investment.amount': '금액',
    'investment.status': '상태',
    'investment.maturityDate': '만료일',
    'investment.action': '작업',
    'investment.active': '활성',
    'investment.ended': '종료',
    'investment.suspended': '일시정지',
    'investment.withdraw': '출금',
    'investment.reinvest': '재투자',
    
    // FTL Swap
    'swap.title': 'FTL 스왑',
    'swap.from': '에서',
    'swap.to': '로',
    'swap.amount': '수량',
    'swap.swap': '스왑',
    'swap.records': '스왑 기록',
    'swap.orderId': '주문 ID',
    'swap.date': '날짜',
    'swap.swapAmount': '스왑 수량',
    'swap.price': '가격',
    
    // Earnings
    'earnings.title': '내 수익',
    'earnings.passiveIncome': '패시브 수입',
    'earnings.activeIncome': '액티브 수입',
    'earnings.miningIncome': '마이닝 수입',
    'earnings.todayEarnings': '오늘의 수익',
    'earnings.accumulatedEarnings': '누적 수익',
    'earnings.viewRecords': '기록 보기',
    
    // Records
    'records.title': '기록',
    'records.all': '전체',
    'records.in': '입금',
    'records.out': '출금',
    'records.date': '날짜',
    'records.amount': '금액',
    'records.type': '유형',
    'records.orderId': '주문 ID',
    'records.passiveIncome': '패시브 수입',
    'records.activeIncome': '액티브 수입',
    'records.extract': '추출',
    'records.fee': '수수료',
    
    // Modals
    'modal.stake': '스테이킹',
    'modal.amount': '수량',
    'modal.paymentMethod': '결제 방법',
    'modal.usdt': 'USDT',
    'modal.ftl': 'FTL',
    'modal.confirm': '확인',
    'modal.cancel': '취소',
    'modal.success': '성공',
    'modal.error': '오류',
    'modal.stakeAIFund': 'AI 펀드 스테이킹',
    'modal.bindingRegistration': '바인딩 추천',
    'modal.latestNews': '최신 뉴스',
    
    // Form
    'form.amountToStake': '스테이킹 수량 (USDT)',
    'form.minimumStake': '최소 스테이킹 $100',
    'form.usdtBalance': 'USDT 잔액',
    'form.ftlBalance': 'FTL 잔액',
    'form.paymentMethod': '결제 방법',
    'form.100USDT': '100% USDT',
    'form.50USDT50FTL': '50% USDT + 50% FTL',
    'form.paymentBreakdown': '결제 내역',
    'form.usdtAmount': 'USDT 수량',
    'form.ftlAmount': 'FTL 수량',
    'form.referralAddress': '추천 주소',
    'form.enterReferralAddress': '추천 주소를 입력하세요',
    'form.registering': '등록 중...',
    'form.register': '등록',
    
    // News
    'news.newAIFundLaunch': '새 AI 펀드 런칭',
    'news.newAIFundDescription': '혁신적인 360° AI 펀드의 런칭을 발표합니다! 이 새로운 투자 기회는 최대 25% APY의 향상된 스테이킹 보상을 제공합니다.',
    'news.systemMaintenance': '시스템 유지보수',
    'news.systemMaintenanceDescription': '2025년 1월 20일 02:00부터 04:00 UTC까지 거래 시스템의 정기 유지보수를 수행합니다.',
    'news.securityUpdate': '보안 업데이트',
    'news.securityUpdateDescription': '자산을 보호하기 위한 추가 보안 조치를 구현했습니다. 계정이 이중 인증으로 보호되어 있는지 확인하세요.',
    
    // Main Banner
    'banner.welcomeToFractal': 'Fractal에 오신 것을 환영합니다',
    'banner.communityPlatform': '커뮤니티 플랫폼',
    'banner.userId': '사용자 ID',
    'banner.currentRank': '현재 순위',
    'banner.walletAddress': '지갑 주소',
    
    // Shortcuts Menu
    'shortcuts.quickActions': '빠른 작업',
    'shortcuts.viewAll': '모두 보기',
    'shortcuts.myEarnings': '내 수익',
    'shortcuts.myEarningsDesc': '총 수익 보기',
    'shortcuts.invitationLink': '초대 링크',
    'shortcuts.invitationLinkDesc': '추천 링크 공유',
    'shortcuts.ftlSwap': 'FTL 스왑',
    'shortcuts.ftlSwapDesc': '토큰 즉시 교환',
    'shortcuts.securePassword': '보안 비밀번호',
    'shortcuts.securePasswordDesc': '보안 설정 관리',
    'shortcuts.announcement': '공지사항',
    'shortcuts.announcementDesc': '최신 공지사항 보기',
    
    // Sub Banner
    'subbanner.quickStart': '빠른 시작',
    'subbanner.quickStartDesc': '몇 번의 클릭으로 스테이킹을 시작하세요. 복잡한 설정이 필요하지 않습니다.',
    'subbanner.startNow': '지금 시작',
    'subbanner.community': '커뮤니티',
    'subbanner.communityDesc': '성장하는 DeFi 애호가 커뮤니티에 참여하여 함께 수익을 얻으세요.',
    'subbanner.joinNow': '지금 참여',
    
    // DAO Mining Data
    'dao.title': 'DAO 마이닝 데이터',
    'dao.miningPoolStats': '마이닝 풀 통계',
    'dao.todaysActivity': '오늘의 활동',
    'dao.totalMiningPool': '총 마이닝 풀',
    'dao.poolRemaining': '풀 잔여량',
    'dao.totalMined': '총 마이닝량',
    'dao.totalDestroyed': '총 소각량',
    'dao.circulatingSupply': '유통 공급량',
    'dao.todaysHashPower': '오늘의 해시 파워',
    'dao.todaysEmission': '오늘의 발행',
    'dao.todaysDistribution': '오늘의 배분',
    'dao.todaysDestroy': '오늘의 소각',
    
    // Buttons
    'button.stake': '스테이킹',
    'button.extract': '추출',
    'button.mine': '마이닝',
    'button.transfer': '전송',
    'button.deposit': '입금',
    'button.withdraw': '출금',
    'button.records': '기록',
    'button.viewDetails': '세부사항 보기',
    'button.copy': '복사',
    'button.share': '공유',
    'button.readMore': '더 읽기',
    'button.bindingRegistration': '바인딩 등록',
    'button.newsPopup': '뉴스 팝업',
    'button.cancel': '취소',
    'button.stakeNow': '지금 스테이킹',
    'button.close': '닫기',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
