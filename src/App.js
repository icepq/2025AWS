// App.js
import React, { useState } from 'react';
import './App.css';

// --- 画像URL定数（後でここを実際の画像パスに書き換えてください） ---
const IMAGES = {
  info: "https://placehold.jp/150x150.png?text=Info",       // 基本情報アイコン
  community: "https://placehold.jp/150x150.png?text=Comm",  // コミュニティアイコン
  safety: "https://placehold.jp/150x150.png?text=Safe",     // 安心安全アイコン
  ai: "https://placehold.jp/150x150.png?text=AI",           // AIアイコン
};

// --- サブコンポーネント ---

const Header = () => (
  <header className="header">
    <div className="logo">AmaLife</div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">AmaLife</div>
    <div className="social-links">
      {/* SNSアイコンも画像にする場合はimgタグに置き換えてください */}
      <span>Instagram</span>
      <span>LinkedIn</span>
      <span>X (Twitter)</span>
    </div>
  </footer>
);

// ホーム画面
const HomeScreen = ({ onNavigate }) => {
  return (
    <>
      {/* ヒーローセクション（CSSで背景画像指定） */}
      <div className="hero-image"></div>

      <div className="hero-text">
        <h1>AmaLife for Fukuoka</h1>
        <p>あなたの街の生活サポート</p>
      </div>

      {/* メニューグリッド */}
      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-text">
            <h3>基本情報</h3>
            <p>行政に関するカレンダー、手続き、生活サポートに関する情報</p>
          </div>
          {/* ダミー画像 */}
          <img src={IMAGES.info} alt="基本情報" className="card-image" />
        </div>

        <div className="menu-card">
          <div className="card-text">
            <h3>コミュニティ</h3>
            <p>イベントの案内、相談窓口など</p>
          </div>
          {/* ダミー画像 */}
          <img src={IMAGES.community} alt="コミュニティ" className="card-image" />
        </div>

        <div className="menu-card">
          <div className="card-text">
            <h3>安心安全サポート</h3>
            <p>健康医療のサポート、災害時の情報、通知など</p>
          </div>
          {/* ダミー画像 */}
          <img src={IMAGES.safety} alt="安心安全" className="card-image" />
        </div>

        {/* クリックでチャット画面へ */}
        <div className="menu-card" onClick={() => onNavigate('chat')}>
          <div className="card-text">
            <h3>AIサポート（仮）</h3>
            <p>、チャットボット</p>
          </div>
          {/* ダミー画像 */}
          <img src={IMAGES.ai} alt="AIサポート" className="card-image" />
        </div>
      </div>

      {/* LINEバナー */}
      <div className="line-banner">
        <div className="line-icon-box">LINE</div>
        <div className="line-text">
          <h3>LINEでいつでもサポート</h3>
          <p>友達追加しておくとあなたの街の情報をすぐに確認できるよ</p>
          <a href="#" className="line-link">Call to action →</a>
        </div>
      </div>
    </>
  );
};

// AIチャット画面
const ChatScreen = ({ onBack }) => {
  return (
    <div className="chat-screen">
      <h2 className="chat-title">AIチャットボット</h2>

      <button className="back-button" onClick={onBack}>
        {/* アイコンの代わりにテキスト矢印を使用 */}
        ← 戻る
      </button>

      <input
        type="text"
        className="chat-input"
        placeholder="質問してください"
      />
    </div>
  );
};

// --- メイン App ---

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <div className="app-container">
      <Header />

      <main style={{ flex: 1 }}>
        {currentScreen === 'home' ? (
          <HomeScreen onNavigate={setCurrentScreen} />
        ) : (
          <ChatScreen onBack={() => setCurrentScreen('home')} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;