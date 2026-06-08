import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { IoLogInOutline, IoLockClosedOutline, IoMailOutline } from 'react-icons/io5';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-md bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-premium glassmorphism">
        
        {/* Title */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-600 to-teal-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-md mx-auto mb-4">
            G
          </div>
          <h2 className="text-2xl font-semibold text-slate-800">Welcome Back</h2>
          <p className="text-slate-500 text-sm mt-1">Access your health reports and consult prescriptions.</p>
        </div>

        {success && (
          <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl text-sm mb-6 border border-emerald-100 font-medium">
            Authentication placeholder: successfully parsed credentials!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="e.g. pat@domain.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                className="rounded text-primary-600 focus:ring-primary-500 border-slate-300 w-4 h-4 cursor-pointer"
              />
              Remember Me
            </label>
            <a href="#" className="text-primary-600 hover:underline font-semibold">
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full justify-center shadow-lg"
            icon={<IoLogInOutline className="text-xl" />}
          >
            Sign In
          </Button>
        </form>

        <div className="text-center mt-8 pt-6 border-t border-slate-50 text-sm text-slate-500">
          New patient?{' '}
          <Link to="/appointment" className="text-primary-600 hover:underline font-semibold">
            Book appointment slot
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;
