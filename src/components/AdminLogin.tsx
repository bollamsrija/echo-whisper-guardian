
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Shield } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (username: string, role: string) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const { toast } = useToast();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Missing information",
        description: "Please enter both username and password.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Mock authentication - in a real app, this would verify against the database
    setTimeout(() => {
      setLoading(false);
      
      // For demo purposes, accept any login with "admin" as username
      if (username.toLowerCase() === 'admin' && password === 'admin123') {
        toast({
          title: "Login successful",
          description: "Welcome to the admin panel.",
        });
        onLogin(username, 'admin');
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password.",
          variant: "destructive",
        });
      }
      
      // For demo, clear password field
      setPassword('');
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center justify-center mb-6">
          <Shield className="h-10 w-10 text-whistleblower-primary" />
        </div>
        <h1 className="text-2xl font-bold text-center text-whistleblower-primary mb-6">
          Admin Login
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input 
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-whistleblower-primary hover:bg-whistleblower-primary/90"
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">For demo: username = admin, password = admin123</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
