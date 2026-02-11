import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Resume & Contact' },
];

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hide mobile menu on project details page (AFTER all hooks)
    if (location.pathname !== '/') return null;

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Hamburger Button */}
            <motion.button
                className="lg:hidden fixed top-6 right-6 z-50 glass-card p-3 focus-visible-custom"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <FiX className="w-6 h-6 text-primary" />
                ) : (
                    <FiMenu className="w-6 h-6 text-primary" />
                )}
            </motion.button>

            {/* Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="lg:hidden fixed right-0 top-0 h-screen w-80 glass-card m-4 rounded-2xl p-8 z-50 overflow-y-auto"
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold heading-gradient mb-2">Navigation</h2>
                                    <p className="text-gray-400 text-sm">Jump to section</p>
                                </div>

                                <nav className="flex-1 space-y-3">
                                    {navItems.map((item, index) => (
                                        <motion.button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 focus-visible-custom ${activeSection === item.id
                                                ? 'bg-primary/20 text-primary border-l-4 border-primary'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                }`}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ x: 8 }}
                                        >
                                            {item.label}
                                        </motion.button>
                                    ))}
                                </nav>

                                <div className="mt-8 text-gray-500 text-xs">
                                    <p>&copy; 2026 Portfolio</p>
                                    <p className="mt-1">Built with React & ❤️</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileMenu;
