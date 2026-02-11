import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Resume & Contact' },
];

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('about');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hide sidebar on project details page (AFTER all hooks)
    if (location.pathname !== '/') return null;

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Offset for fixed header
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex fixed left-0 top-0 h-screen w-64 glass-card m-6 flex-col justify-between p-8 z-40"
        >
            <div>
                <motion.h1
                    className="text-3xl font-bold mb-2 heading-gradient"
                    whileHover={{ scale: 1.05 }}
                >
                    Portfolio
                </motion.h1>
                <p className="text-gray-400 text-sm mb-12">Welcome to my space</p>

                <nav className="space-y-2">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 focus-visible-custom ${activeSection === item.id
                                ? 'bg-primary/20 text-primary border-l-4 border-primary'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                            whileHover={{ x: 8 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </nav>
            </div>

            <div className="text-gray-500 text-xs">
                <p>&copy; 2026 Portfolio</p>
                <p className="mt-1">Built with React & ❤️</p>
            </div>
        </motion.aside>
    );
};

export default Sidebar;
