// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../components/MenuCard';

// --- ローカル画像のインポート ---
// 写真のデータ元https://pictomuseum.com/
import heroImg from '../assets/hero.jpg';     // メインビジュアル
import infoImg from '../assets/info.png';      // 基本情報
import communityImg from '../assets/community.png'; // コミュニティ
import safetyImg from '../assets/safety.png';    // 安心安全
import aiImg from '../assets/ai.png';        // AIサポート

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* ヒーローセクション：インラインスタイルで背景画像を設定 */}
            <div
                className="hero-image"
                style={{ backgroundImage: `url(${heroImg})` }}
            ></div>

            <div className="hero-text">
                <h1>AmaLife for Fukuoka</h1>
                <p>あなたの街の生活サポート</p>
            </div>

            <div className="menu-grid">
                <MenuCard
                    title="基本情報"
                    description="行政に関するカレンダー、手続き、生活サポートに関する情報"
                    imageSrc={infoImg} // インポートした変数を使用
                    onClick={() => navigate('/info')}
                />
                <MenuCard
                    title="コミュニティ"
                    description="イベントの案内、相談窓口など"
                    imageSrc={communityImg} // インポートした変数を使用
                    onClick={() => navigate('/community')}
                />
                <MenuCard
                    title="安心安全サポート"
                    description="健康医療のサポート、災害時の情報、通知など"
                    imageSrc={safetyImg} // インポートした変数を使用
                    onClick={() => navigate('/safety')}
                />
                <MenuCard
                    title="AIサポート"
                    description="AIによるチャットボット"
                    imageSrc={aiImg} // インポートした変数を使用
                    onClick={() => navigate('/chat')}
                />
            </div>

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

export default Home;