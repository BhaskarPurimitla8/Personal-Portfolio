import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import profileImage from '../assets/profile.jpeg';

const AboutMeSection = () => {
    return (
        <SectionWrapper id="about" className="min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div
                        className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1"
                    >
                        <motion.div
                            className="w-full h-full rounded-full bg-background-start flex items-center justify-center overflow-hidden"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={profileImage}
                                alt="Bhaskar Purimitla profile photo"
                                className="w-36 h-36 rounded-full object-cover object-center shadow-lg hover:shadow-primary/30 transition-shadow duration-300"
                            />
                        </motion.div>
                    </div>

                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hi, I'm <span className="heading-gradient">Bhaskar Purimitla</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-400 mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Associate Data Analyst | Aspiring Software Engineer (Data & ML)
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4 text-primary text-sm"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span>📍 Hyderabad, Telangana, India</span>
                        <span>•</span>
                        <span>💼 Open to Opportunities</span>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="glass-card p-8 md:p-12"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-6 heading-gradient">About Me</h2>
                    <div className="text-gray-300 space-y-4 leading-relaxed">
                        <p>
                            I am an <span className="hl">Associate Data Analyst</span> with <span className="hl">1+ year</span> of professional <span className="hl">experience</span> and an <span className="hl">Aspiring Software Engineer</span> with
                            a strong focus on <span className="hl">Data Analysis</span> and <span className="hl">Machine Learning fundamentals</span>. I
                            turn raw data into clear <span className="hl">insights</span>, <span className="hl">dashboards</span>,
                            and <span className="hl">reports</span> that support better decisions and measurable results.
                        </p>
                        <p>
                            I have hands-on experience working with <span className="hl">Python</span>, <span className="hl">SQL</span>, <span className="hl">Power BI</span>,
                            and <span className="hl">Excel</span> for data analysis, along with exposure to <span className="hl">React</span> and web technologies
                            for building user-friendly interfaces. In my recent role, I worked on cleaning datasets and building <span className="hl">KPI dashboards</span> to
                            track performance. I'm detail-oriented, quick to learn, and eager to contribute to teams that value
                            data-driven thinking, continuous learning, and high-quality software development.
                        </p>
                    </div>
                </motion.div>            </div>
        </SectionWrapper>
    );
};

export default AboutMeSection;
