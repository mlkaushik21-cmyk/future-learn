import { Search, Menu, User, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            <div className="hidden lg:flex ml-10 space-x-8">
              <Link to="/" className="text-gray-900 hover:text-indigo-600 font-medium px-3 py-2">Batches</Link>
              <Link to="/" className="text-gray-500 hover:text-indigo-600 font-medium px-3 py-2">Study Material</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium">Log In</Link>
              <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition flex items-center gap-2">
                <User size={18} />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;