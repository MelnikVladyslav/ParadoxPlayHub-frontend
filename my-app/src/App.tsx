import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import React from 'react';
import SignIn from './Pages/SignInSignUp/SignIn';
import Library from './Pages/Library/Library';
import GameP from './Pages/Game/GameP';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/library" element={<Library />} />
        <Route path="/game/:gameId" element={<GameP />} />
      </Routes>
    </Router>
  );
}

export default App;
