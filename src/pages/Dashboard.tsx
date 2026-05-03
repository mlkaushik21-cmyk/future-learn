import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Video, Award, ShieldCheck } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<string>('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const snap = await getDoc(doc(db, 'users', currentUser.uid));
        const userRole = snap.data()?.role || 'student';
        setRole(userRole);
      } else {
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (!user) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Dashboard</h1>

      {/* Welcome Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-8 flex items-center gap-4">
        <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-inner">
          {user.email?.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {role === 'admin' ? '👑 Welcome Admin!' : '🎓 Welcome Student!'}
          </h2>
          <p className="text-gray-500 font-medium">{user.email}</p>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full mt-1 inline-block
            ${role === 'admin' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
            {role.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Role-based Quick Links */}
      {role === 'admin' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <button onClick={() => navigate('/admin')}
            className="bg-indigo-600 text-white p-6 rounded-2xl shadow hover:bg-indigo-700 transition text-left">
            <ShieldCheck size={32} className="mb-2" />
            <p className="text-lg font-bold">Admin Panel</p>
            <p className="text-indigo-200 text-sm">Notes, Courses, Tests add karo</p>
          </button>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <BookOpen size={32} className="text-indigo-400 mb-2" />
            <p className="text-lg font-bold text-gray-900">Total Content</p>
            <p className="text-2xl font-bold text-indigo-600">--</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button onClick={() => navigate('/student')}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4 hover:border-indigo-400 transition text-left">
            <div className="bg-blue-100 p-3 rounded-xl text-blue-600"><BookOpen size={28} /></div>
            <div><p className="text-gray-500 text-sm font-semibold">My Courses</p><p className="text-sm text-indigo-500 font-medium">View →</p></div>
          </button>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl text-green-600"><Video size={28} /></div>
            <div><p className="text-gray-500 text-sm font-semibold">Live Classes</p><p className="text-2xl font-bold text-gray-900">0</p></div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="bg-yellow-100 p-3 rounded-xl text-yellow-600"><Award size={28} /></div>
            <div><p className="text-gray-500 text-sm font-semibold">Test Scores</p><p className="text-2xl font-bold text-gray-900">--</p></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Dashboard;