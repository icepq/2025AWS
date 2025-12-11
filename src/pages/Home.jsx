import React from 'react';
import { useNavigate } from 'react-router-dom'; // フックをインポート
import MenuCard from '../components/MenuCard';

const IMAGES = {
    info: "https://placehold.jp/150x150.png?text=Info",
    community: "https://placehold.jp/150x150.png?text=Comm",
    safety: "https://placehold.jp/150x150.png?text=Safe",
    ai: "https://placehold.jp/150x150.png?text=AI",
};

const Home = () => {
    const navigate = useNavigate(); // ページ遷移用の関数

    return (
        <>
            <div className="hero-image"></div>

            <div className="hero-text">
                <h1>AmaLife for Fukuoka</h1>
                <p>あなたの街の生活サポート</p>
            </div>

            <div className="menu-grid">
                <MenuCard
                    title="基本情報"
                    description="行政に関するカレンダー、手続き、生活サポートに関する情報"
                    imageSrc={IMAGES.info}
                    onClick={() => navigate('/info')}
                />
                <MenuCard
                    title="コミュニティ"
                    description="イベントの案内、相談窓口など"
                    imageSrc={IMAGES.community}
                    onClick={() => navigate('/community')}
                />
                <MenuCard
                    title="安心安全サポート"
                    description="健康医療のサポート、災害時の情報、通知など"
                    imageSrc={IMAGES.safety}
                    onClick={() => navigate('/safety')}
                />
                <MenuCard
                    title="AIサポート（仮）"
                    description="、チャットボット"
                    imageSrc={IMAGES.ai}
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