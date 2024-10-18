import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import MainPage from './components/MainPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Background />} />
            <Route path="/main" element={<MainPage />} />
        </Routes>
    );
}

export default App;
