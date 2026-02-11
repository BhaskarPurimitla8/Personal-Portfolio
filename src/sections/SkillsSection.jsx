import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const skillsData = {
    'Frontend': ['HTML5', 'CSS3', 'React.js'],
    'Backend': ['Python(Programming)', 'SQL(Queries & Joins)'],
    'Frameworks': ['Flask (Python Framework)', 'Scrum (Agile Framework)'],
    'Data & Analytics': ['Power BI', 'MS Excel', 'Pandas', 'NumPy', 'Matplotlib', 'Data Analysis'],
    'AI & ML': ['Prompt Engineering(LLMs)', 'LLM Training & Fine-Tuning', 'Data Annotation & Labeling', 'Machine Learning Fundamentals'],
    'Tools & Others': ['Git', 'VS Code', 'Google Colab', 'n8n (Workflow Automation)', 'Figma', 'Antigravity']
};

const SkillsSection = () => {
    return (
        <SectionWrapper id="skills" className="min-h-screen">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">Skills & Technologies</h2>
                    <p className="text-gray-400 text-lg">Tools I use to bring ideas to life</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className="glass-card-hover p-8"
                        >
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
                                {category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 
                             text-white rounded-lg border border-primary/30 
                             hover:border-primary hover:glow-primary transition-all duration-300 
                             cursor-default font-medium text-sm"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default SkillsSection;
