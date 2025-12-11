import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const API_URL =
    "https://oulh7dodri.execute-api.ap-northeast-1.amazonaws.com/chat";

const Chat = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // メッセージ末尾にスクロール
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        // ユーザーメッセージを追加
        const userMessage = {
            id: Date.now(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            // APIを呼び出し
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ query: inputValue })
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();

            // AIの応答を追加
            const aiMessage = {
                id: Date.now() + 1,
                text: data.answer || 'エラーが発生しました',
                sender: 'ai',
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error calling API:', error);
            // エラーメッセージを表示
            const errorMessage = {
                id: Date.now() + 1,
                text: 'すみません。エラーが発生しました。もう一度試してください。',
                sender: 'ai',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="chat-screen">
            <div className="chat-header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    ← 戻る
                </button>
                <h2 className="chat-title">AIチャットボット</h2>
            </div>

            <div className="chat-messages">
                {messages.length === 0 && (
                    <div className="chat-empty">
                        <p>福岡の生活についてわからないことを質問</p>
                    </div>
                )}

                {messages.map(message => (
                    <div key={message.id} className={`message message-${message.sender}`}>
                        {message.sender === 'ai' && (
                            <div className="message-avatar">🤖</div>
                        )}
                        <div className="message-content">
                            <div className="message-text">
                                {message.sender === 'ai' ? (
                                    <ReactMarkdown>{message.text}</ReactMarkdown>
                                ) : (
                                    <p>{message.text}</p>
                                )}
                            </div>
                            <span className="message-time">
                                {message.timestamp.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                        {message.sender === 'user' && (
                            <div className="message-avatar">👤</div>
                        )}
                    </div>
                ))}

                {isLoading && (
                    <div className="message message-ai">
                        <div className="message-avatar">🤖</div>
                        <div className="message-content">
                            <div className="loading-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div className="chat-input-area">
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="chat-input"
                    placeholder={`質問を入力してください\n(例：箱崎のゴミ出しスケジュールは？)`}
                    disabled={isLoading}
                    rows={3}
                />
                <button
                    className="chat-send-button"
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputValue.trim()}
                >
                    {isLoading ? '送信中...' : '送信'}
                </button>
            </div>
        </div>
    );
};

export default Chat;