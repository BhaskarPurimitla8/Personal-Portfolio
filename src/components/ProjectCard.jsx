import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-6 cursor-pointer group transition-all duration-300 hover:glow-primary"
            onClick={() => navigate(`/projects/${project.id}`)}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <motion.div
                whileHover={{ rotateX: 5, rotateY: 5 }}
                transition={{ duration: 0.3 }}
            >
                <h3 className="text-2xl font-bold mb-3 heading-gradient group-hover:scale-105 transition-transform">
                    {project.name}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-2">
                    {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary-light rounded-full border border-primary/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="text-primary text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Details
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        →
                    </motion.span>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
