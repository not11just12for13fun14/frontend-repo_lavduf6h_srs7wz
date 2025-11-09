import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Privacy from './components/Privacy';
import Footer from './components/Footer';
import AuthPanels from './components/AuthPanels';

function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar onLogin={() => setAuthOpen(true)} />
      <main className="flex-1">
        <Hero />
        <Modules />
        <Privacy />
      </main>
      <Footer />
      {authOpen && <AuthPanels mode="login" onClose={() => setAuthOpen(false)} />}
    </div>
  );
}

export default App;
