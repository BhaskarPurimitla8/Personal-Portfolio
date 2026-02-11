import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiBookOpen, FiAward } from 'react-icons/fi';

const educationData = [
    {
        id: 1,
        institution: 'Bapatla Engineering College (Acharya Nagarjuna University)',
        degree: 'B.Tech (Honors) in Information Technology',
        duration: '2020 – 2024',
        score: 'CGPA: 8.53',
        description: [
            'Built strong foundations in programming, software engineering, DSA, and database concepts.',
            'Worked with HTML, CSS, SQL, and React to develop responsive web applications and practical projects.'
        ],
        skills: ['DSA', 'Python', 'SQL', 'React', 'HTML', 'CSS']
    },
    {
        id: 2,
        institution: 'Sri Chaitanya Junior College',
        degree: 'Intermediate (MPC)',
        duration: '2018 – 2020',
        score: 'CGPA: 9.94',
        description: [
            'Focused on Mathematics, Physics, and Chemistry with a strong emphasis on problem-solving and analytical thinking.',
            'Developed disciplined study habits and a solid quantitative foundation supporting technical and data-driven work.'
        ],
        skills: ['Mathematics', 'Physics', 'Chemistry', 'Problem Solving']
    },
    {
        id: 3,
        institution: 'Viswa Bharathi High School',
        degree: 'Primary Education (General)',
        duration: '2018',
        score: 'CGPA: 9.8',
        description: [
            'Built a strong academic foundation with consistent performance and active participation in school activities.',
            'Developed core communication, teamwork, and learning skills that support continuous growth.'
        ],
        skills: ['Communication', 'Teamwork', 'Foundation']
    }
];

const EducationSection = () => {
    return (
        <SectionWrapper id="education" className="min-h-screen">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">Education</h2>
                    <p className="text-gray-400 text-lg">My academic journey</p>
                </motion.div>

                <div className="space-y-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card-hover p-8 relative"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                        {index === 0 ? (
                                            <FiAward className="w-8 h-8 text-primary" />
                                        ) : index === 1 ? (
                                            <FiBookOpen className="w-8 h-8 text-secondary" />
                                        ) : (
                                            <FiBookOpen className="w-8 h-8 text-accent" />
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                                            <p className="text-primary font-medium">{edu.institution}</p>
                                        </div>
                                        <div className="flex flex-col items-start md:items-end gap-2 mt-2 md:mt-0">
                                            <span className="text-gray-400 text-sm">{edu.duration}</span>
                                            <span className="px-3 py-1 text-xs bg-primary/20 text-primary-light rounded-full border border-primary/30 font-medium">
                                                {edu.score}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2 mb-4">
                                        {edu.description.map((line, idx) => (
                                            <p key={idx} className="text-gray-300 text-sm leading-relaxed">
                                                {line}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Skills/Subjects */}
                                    <div className="flex flex-wrap gap-2">
                                        {edu.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-xs bg-accent/20 text-accent-light rounded-full border border-accent/30"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Timeline connector (except for last item) */}
                            {index < educationData.length - 1 && (
                                <div className="hidden md:block absolute left-14 top-24 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default EducationSection;
