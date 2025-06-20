import React, { useEffect } from 'react';
import Main from '../../components/profile/Main';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import FooterNav from '../../components/footer/FooterNav';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
   const token = sessionStorage.getItem('user');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || token.token == 1) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="w-full relative">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <div className="flex-1 md:ml-64 relative">
          <div className="max-w-4xl mx-auto px-4">
            {/* Footer */}
            <div className="mb-4">
              <FooterNav />
            </div>
            <div className="flex justify-center">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 
