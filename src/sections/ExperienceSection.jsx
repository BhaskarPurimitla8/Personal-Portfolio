import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';

const ExperienceSection = () => {
    return (
        <SectionWrapper id="experience" className="min-h-screen">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">Experience</h2>
                    <p className="text-gray-400 text-lg">My professional journey</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass-card-hover p-8 relative"
                >
                    {/* Experience Badge */}
                    <div className="absolute top-6 right-6">
                        <span className="px-4 py-2 bg-primary/20 text-primary-light rounded-full border border-primary/30 text-sm font-medium">
                            1+ Year Experience
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                <FiBriefcase className="w-8 h-8 text-primary" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            {/* Role */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Associate Data Analyst
                            </h3>

                            {/* Company & Location */}
                            <div className="flex flex-wrap items-center gap-4 mb-3 text-gray-400">
                                <span className="text-lg font-medium text-primary">
                                    <span className="hl">Glucksort Private Limited</span>
                                </span>
                                <span className="flex items-center gap-1 text-sm">
                                    <FiMapPin className="w-4 h-4" />
                                    Mangalagiri
                                </span>
                            </div>

                            {/* Date Range */}
                            <div className="flex items-center gap-2 mb-6 text-gray-400">
                                <FiCalendar className="w-4 h-4" />
                                <span className="text-sm font-medium">Oct 2024 – Present</span>
                            </div>

                            {/* Responsibilities */}
                            <ul className="space-y-3">
                                {[
                                    {
                                        text: 'Cleaned, processed, and analyzed datasets using ',
                                        highlights: ['Python', 'Pandas', 'NumPy']
                                    },
                                    {
                                        text: 'Built and maintained ',
                                        highlights: ['KPI dashboards'],
                                        midText: ' using ',
                                        highlights2: ['Power BI'],
                                        endText: ' to track performance metrics'
                                    },
                                    {
                                        text: 'Performed analysis and reporting using ',
                                        highlights: ['SQL'],
                                        midText: ' and ',
                                        highlights2: ['Excel']
                                    },
                                    {
                                        text: 'Identified trends and delivered actionable insights to support data-driven decisions.',
                                        highlights: []
                                    }
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-3 text-gray-300"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                                        <span>
                                            {item.text}
                                            {item.highlights && item.highlights.length > 0 && (
                                                <>
                                                    <span className="hl">{item.highlights[0]}</span>
                                                    {item.highlights[1] && (
                                                        <>
                                                            {' ('}
                                                            <span className="hl">{item.highlights[1]}</span>
                                                            {item.highlights[2] && (
                                                                <>
                                                                    {', '}
                                                                    <span className="hl">{item.highlights[2]}</span>
                                                                </>
                                                            )}
                                                            {')'}
                                                        </>
                                                    )}
                                                </>
                                            )}
                                            {item.midText}
                                            {item.highlights2 && item.highlights2.length > 0 && (
                                                <span className="hl">{item.highlights2[0]}</span>
                                            )}
                                            {item.endText}
                                            {!item.highlights || item.highlights.length === 0 ? '.' : '.'}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default ExperienceSection;
