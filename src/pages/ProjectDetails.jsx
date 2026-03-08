import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheckCircle, FiZoomIn, FiZoomOut, FiX, FiMaximize } from 'react-icons/fi';

const ScreenshotZoomModal = ({ src, alt, onClose }) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });
    const posStart = useRef({ x: 0, y: 0 });

    const zoomIn = () => setScale(prev => Math.min(prev + 0.3, 5));
    const zoomOut = () => setScale(prev => Math.max(prev - 0.3, 0.5));
    const resetZoom = () => { setScale(1); setPosition({ x: 0, y: 0 }); };

    const handleWheel = useCallback((e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            setScale(prev => Math.min(prev + 0.15, 5));
        } else {
            setScale(prev => Math.max(prev - 0.15, 0.5));
        }
    }, []);

    const handleMouseDown = (e) => {
        if (scale > 1) {
            setIsDragging(true);
            dragStart.current = { x: e.clientX, y: e.clientY };
            posStart.current = { ...position };
        }
    };

    const handleMouseMove = useCallback((e) => {
        if (isDragging) {
            setPosition({
                x: posStart.current.x + (e.clientX - dragStart.current.x),
                y: posStart.current.y + (e.clientY - dragStart.current.y),
            });
        }
    }, [isDragging]);

    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === '+' || e.key === '=') zoomIn();
            if (e.key === '-') zoomOut();
            if (e.key === '0') resetZoom();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {/* Controls */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-50">
                <button
                    onClick={zoomOut}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
                    title="Zoom Out (-)"
                >
                    <FiZoomOut className="w-5 h-5" />
                </button>
                <span className="text-white/80 text-sm font-medium min-w-[60px] text-center">
                    {Math.round(scale * 100)}%
                </span>
                <button
                    onClick={zoomIn}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
                    title="Zoom In (+)"
                >
                    <FiZoomIn className="w-5 h-5" />
                </button>
                <button
                    onClick={resetZoom}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
                    title="Reset (0)"
                >
                    <FiMaximize className="w-5 h-5" />
                </button>
                <button
                    onClick={onClose}
                    className="p-3 rounded-full bg-white/10 hover:bg-red-500/50 text-white transition-colors backdrop-blur-sm ml-2"
                    title="Close (Esc)"
                >
                    <FiX className="w-5 h-5" />
                </button>
            </div>

            {/* Zoom hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm z-50">
                Scroll to zoom • Drag to pan • Press Esc to close
            </div>

            {/* Image */}
            <div
                className="overflow-hidden w-full h-full flex items-center justify-center"
                onWheel={handleWheel}
            >
                <img
                    src={src}
                    alt={alt}
                    draggable={false}
                    onMouseDown={handleMouseDown}
                    className="max-w-none select-none"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                        transition: isDragging ? 'none' : 'transform 0.2s ease',
                        cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
                    }}
                />
            </div>
        </motion.div>
    );
};

const ProjectDetails = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === projectId);
    const [zoomImage, setZoomImage] = useState(null);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="glass-card p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                    <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 glass-card-hover focus-visible-custom"
                    >
                        <FiArrowLeft />
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20 px-6 md:px-12 lg:px-16">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/')}
                    className="mb-8 flex items-center gap-2 text-gray-400 hover:text-primary 
                   transition-colors focus-visible-custom"
                    whileHover={{ x: -5 }}
                >
                    <FiArrowLeft className="w-5 h-5" />
                    Back to Projects
                </motion.button>

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">
                        {project.name}
                    </h1>
                    <p className="text-xl text-gray-300 mb-6">{project.summary}</p>

                    <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-primary/20 text-primary-light rounded-full 
                         border border-primary/30 font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap gap-4 mb-12"
                >
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card-hover px-6 py-3 flex items-center gap-2 
                     focus-visible-custom group"
                    >
                        <FiGithub className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                        <span>View on GitHub</span>
                    </a>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card-hover px-6 py-3 flex items-center gap-2 
                       focus-visible-custom group bg-primary/10 hover:bg-primary/20"
                        >
                            <FiExternalLink className="w-5 h-5 text-primary group-hover:text-primary-light transition-colors" />
                            <span className="text-primary">Live Demo</span>
                        </a>
                    )}
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-8">
                    {/* Problem/Idea */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8"
                    >
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-primary">💡</span>
                            The Problem
                        </h2>
                        <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                    </motion.div>

                    {/* Skills Used */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-card p-8"
                    >
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-secondary">🛠️</span>
                            Technologies & Skills
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-secondary/20 text-secondary-light rounded-lg 
                           border border-secondary/30"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass-card p-8"
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-accent">🚀</span>
                            What I Built
                        </h2>
                        <ul className="space-y-3">
                            {project.features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.05 }}
                                    className="flex items-start gap-3 text-gray-300"
                                >
                                    <FiCheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Outcome */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass-card p-8 bg-gradient-to-br from-primary/5 to-secondary/5"
                    >
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-primary">🎯</span>
                            Outcome & Results
                        </h2>
                        <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
                    </motion.div>

                    {/* Screenshots Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="glass-card p-8"
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-primary">📸</span>
                            Screenshots
                        </h2>

                        {project.screenshots && project.screenshots.length > 0 ? (
                            <div className="grid grid-cols-1 gap-4">
                                {project.screenshots.map((screenshot, index) => (
                                    <div
                                        key={index}
                                        className="relative group cursor-pointer overflow-hidden rounded-lg border border-white/10 hover:border-primary/40 transition-colors"
                                        onClick={() => setZoomImage({ src: screenshot, alt: `${project.name} screenshot ${index + 1}` })}
                                    >
                                        <img
                                            src={screenshot}
                                            alt={`${project.name} screenshot ${index + 1}`}
                                            className="w-full rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full text-white text-sm backdrop-blur-sm">
                                                <FiZoomIn className="w-4 h-4" />
                                                Click to zoom
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-400">
                                <p>Screenshots will be added soon</p>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Bottom Navigation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-12 flex justify-center"
                >
                    <button
                        onClick={() => navigate('/')}
                        className="glass-card-hover px-8 py-4 flex items-center gap-2 
                     focus-visible-custom group"
                    >
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to All Projects</span>
                    </button>
                </motion.div>
            </div>

            {/* Screenshot Zoom Modal */}
            {zoomImage && (
                <ScreenshotZoomModal
                    src={zoomImage.src}
                    alt={zoomImage.alt}
                    onClose={() => setZoomImage(null)}
                />
            )}
        </div>
    );
};

export default ProjectDetails;
