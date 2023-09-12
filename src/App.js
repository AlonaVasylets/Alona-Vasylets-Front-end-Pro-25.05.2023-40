import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './Users';
import Albums from './Albums';
import Photos from './Photos';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/albums/:userId" element={<Albums />} />
      <Route path="/photos/:albumId" element={<Photos />} />
    </Routes>
  );
}

export default App;
