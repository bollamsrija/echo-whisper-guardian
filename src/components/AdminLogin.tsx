
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Lock } from 'lucide-react';
import { authenticateAdmin } from '@/lib/localStorage';

interface AdminLoginProps {
  onLogin: (username: string, role: string) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const { toast } = useToast();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || !password.trim()) {
      toast({
        title: "Missing credentials",
        description: "Please enter both username and password.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const result = authenticateAdmin(username, password);
      
      if (result.authenticated && result.user) {
        toast({
          title: "Login successful",
          description: `Welcome back, ${result.user.username}!`,
        });
        onLogin(result.user.username, result.user.role);
      } else {
        toast({
          title: "Authentication failed",
          description: "Invalid username or password.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Login error",
        description: "An error occurred during login. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 max-w-md mx-auto">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <Lock className="h-6 w-6 text-whistleblower-primary mr-2" />
          <h1 className="text-2xl font-bold text-whistleblower-primary">Admin Login</h1>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Access the whistleblower management dashboard.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
        
        <div className="text-center text-sm text-gray-500">
          <p>For demo purposes: Username: <strong>admin</strong> / Password: <strong>admin123</strong></p>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
