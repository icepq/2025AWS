import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// 各ページのインポート
import Home from './pages/Home';
import Chat from './pages/Chat';
import Info from './pages/Info';
import Community from './pages/Community';
import Safety from './pages/Safety';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/info" element={<Info />} />
            <Route path="/community" element={<Community />} />
            <Route path="/safety" element={<Safety />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;