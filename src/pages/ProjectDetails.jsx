import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === projectId);

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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.screenshots.map((screenshot, index) => (
                                    <img
                                        key={index}
                                        src={screenshot}
                                        alt={`${project.name} screenshot ${index + 1}`}
                                        className="rounded-lg border border-white/10"
                                    />
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
        </div>
    );
};

export default ProjectDetails;
