import React from 'react';
import { useNavigate } from 'react-router-dom';

const Info = () => {
    const navigate = useNavigate();
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>基本情報ページ</h2>
            <p>準備中...</p>
            <button onClick={() => navigate('/')}>ホームに戻る</button>
        </div>
    );
};
export default Info;