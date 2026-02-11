import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import certifications from '../data/certifications';

const CertificationsSection = () => {
    const handleViewCertificate = (certificatePath, title) => {
        window.open(certificatePath, '_blank', 'noopener,noreferrer');
    };

    return (
        <SectionWrapper id="certifications" className="min-h-screen">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">
                        Certifications
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Professional certifications and completed courses
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300"
                        >
                            {/* Provider Logo */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg p-2">
                                    <img
                                        src={cert.providerLogo}
                                        alt={`${cert.provider} logo`}
                                        className="w-full h-full object-contain hover:opacity-80 transition-opacity"
                                    />
                                </div>
                                <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                                    {cert.completed}
                                </span>
                            </div>

                            {/* Certificate Title */}
                            <h3 className="text-xl font-bold mb-2 text-white">
                                {cert.title}
                            </h3>

                            {/* Provider Name */}
                            <p className="text-gray-400 text-sm mb-6">
                                {cert.provider}
                            </p>

                            {/* View Certificate Button */}
                            <motion.button
                                onClick={() => handleViewCertificate(cert.certificatePath, cert.title)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-4 py-3 bg-gradient-to-r from-primary to-secondary 
                                         rounded-lg font-medium flex items-center justify-center gap-2
                                         hover:from-primary/80 hover:to-secondary/80 transition-all
                                         focus-visible-custom"
                                aria-label={`View certificate for ${cert.title}`}
                            >
                                <FiExternalLink className="w-4 h-4" />
                                View Certificate
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CertificationsSection;
