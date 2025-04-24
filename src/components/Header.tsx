
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-whistleblower-primary text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8" />
          <Link to="/" className="text-xl font-bold">
            Anonymous Whistleblower
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-whistleblower-accent transition-colors">
            Home
          </Link>
          <Link to="/report" className="hover:text-whistleblower-accent transition-colors">
            Submit Report
          </Link>
          <Link to="/track" className="hover:text-whistleblower-accent transition-colors">
            Track Report
          </Link>
          <Link to="/resources" className="hover:text-whistleblower-accent transition-colors">
            Resources
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="bg-transparent border-white text-white hover:bg-white hover:text-whistleblower-primary">
            <Lock className="mr-2 h-4 w-4" />
            Secure Portal
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
