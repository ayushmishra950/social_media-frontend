import React, { useEffect } from 'react';
import ChatSection from '../components/chatSection/ChatSection';
import Navbar from '../components/navbar/Navbar';
import FooterNav from '../components/footer/FooterNav';
import { useNavigate } from 'react-router-dom';

const ChatPage = () => {
  const token = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

 useEffect(() => {
  if (!token || !token.token) {
    navigate('/login');
  }
}, [navigate]);

  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto">
          <ChatSection />
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default ChatPage; 