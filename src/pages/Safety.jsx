import React from 'react';
import { useNavigate } from 'react-router-dom';

const Safety = () => {
    const navigate = useNavigate();
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>安心安全サポートページ</h2>
            <p>準備中...</p>
            <button onClick={() => navigate('/')}>ホームに戻る</button>
        </div>
    );
};
export default Safety;