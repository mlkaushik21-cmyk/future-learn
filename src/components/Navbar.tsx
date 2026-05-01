import React, { useState, useEffect } from 'react';
import { Menu, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button className="p-2 mr-2 text-gray-600 lg:hidden hover:bg-gray-100 rounded-md"><Menu size={24} /></button>
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-lg text-white font-black text-xl italic shadow-md">FL</div>
              <span className="font-bold text-2xl text-gray-900 tracking-tight">Future Learn</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden sm:flex items-center gap-4">
                <Link to="/dashboard" className="text-indigo-600 hover:text-indigo-800 font-bold px-3 py-2">My Dashboard</Link>
                <div className="bg-green-50 text-green-700 px-3 py-1.5 rounded-lg font-medium border border-green-200">{user.email}</div>
                <button onClick={handleLogout} className="text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg font-medium transition flex items-center gap-2"><LogOut size={18} /><span>Logout</span></button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-4">
                <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium">Log In</Link>
                <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition flex items-center gap-2"><User size={18} /><span>Sign Up</span></Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
