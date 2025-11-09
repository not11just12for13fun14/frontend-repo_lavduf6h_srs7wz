import { LogIn } from 'lucide-react';

function Navbar({ onLogin }) {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">VB</div>
          <span className="font-semibold text-gray-800 tracking-tight">Vibe Portal</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#modules" className="hover:text-gray-900">Modules</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <button
          onClick={() => onLogin('login')}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow"
        >
          <LogIn size={18} />
          Sign in
        </button>
      </div>
    </header>
  );
}

export default Navbar;
