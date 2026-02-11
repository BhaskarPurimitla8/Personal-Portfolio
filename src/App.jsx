import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Animated Background - Always visible */}
        <AnimatedBackground />

        {/* Sidebar - Desktop navigation (hidden on project pages) */}
        <Sidebar />

        {/* Mobile Menu - Mobile navigation (hidden on project pages) */}
        <MobileMenu />

        {/* Main Content */}
        <main className="lg:ml-80 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
          </Routes>
        </main>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
