import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">AmaLife</div>
            <div className="social-links">
                {/* 画像にする場合はimgタグを使用 */}
                <span>Instagram</span>
                <span>LinkedIn</span>
                <span>X (Twitter)</span>
            </div>
        </footer>
    );
};

export default Footer;