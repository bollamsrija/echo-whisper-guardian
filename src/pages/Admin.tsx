
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminLogin from '@/components/AdminLogin';
import AdminDashboard from '@/components/AdminDashboard';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminUser, setAdminUser] = useState<{username: string; role: string} | null>(null);

  const handleLogin = (username: string, role: string) => {
    setIsLoggedIn(true);
    setAdminUser({ username, role });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAdminUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {isLoggedIn && adminUser ? (
            <AdminDashboard user={adminUser} onLogout={handleLogout} />
          ) : (
            <AdminLogin onLogin={handleLogin} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
