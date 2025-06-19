import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/profile';
import { ChatProvider } from './context/ChatContext';
import RegisterForm from './components/login/RegisterForm';
import Otp from './components/login/Otp';
import Login from './components/login/Login';
import Password_change from './components/password_change/Password_change';

function App() {
  return (
    <Router>
      <ChatProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/change" element={<Password_change />} />

        </Routes>
      </ChatProvider>
    </Router>
  );
}

export default App;
