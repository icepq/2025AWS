import React from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
    const navigate = useNavigate();

    return (
        <div className="chat-screen">
            <h2 className="chat-title">AIチャットボット</h2>

            <button className="back-button" onClick={() => navigate(-1)}>
                {/* navigate(-1) はブラウザの「戻る」と同じ動作 */}
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

export default Chat;