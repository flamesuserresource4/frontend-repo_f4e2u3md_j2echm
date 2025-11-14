import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Services, Work, Contact } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="relative bg-[radial-gradient(1250px_650px_at_50%_-200px,#4338CA_10%,#8B5CF6_35%,#EC4899_65%,#0B1020_100%)]">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Work />
      <Services />
      <Contact />
      <footer className="py-10 text-center text-sm text-zinc-500 bg-white">
        © {new Date().getFullYear()} Radnaa Clone — Built with love.
      </footer>
    </div>
  );
}

export default App;
