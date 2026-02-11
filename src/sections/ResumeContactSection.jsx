import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import EmailModal from '../components/EmailModal';
import { FiMail, FiPhone, FiMapPin, FiDownload, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const ResumeContactSection = () => {
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

    const contactInfo = [
        { icon: FiMail, label: 'Email', value: 'bhaskarpurimitla@gmail.com', href: 'mailto:bhaskarpurimitla@gmail.com' },
        { icon: FiPhone, label: 'Phone', value: '+91 6305163499', href: 'tel:+916305163499' },
        { icon: FiMapPin, label: 'Location', value: 'Hyderabad, India', href: null },
    ];

    const socialLinks = [
        { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/bhaskar-purimitla-b97158258/', color: 'text-blue-400' },
        { icon: FiGithub, label: 'GitHub', href: 'https://github.com/BhaskarPurimitla8', color: 'text-gray-300' },
        { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/u/bachipuri/', color: 'text-yellow-500' },
    ];

    return (
        <SectionWrapper id="contact" className="min-h-screen">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">Let's Connect</h2>
                    <p className="text-gray-400 text-lg">Download my resume or get in touch</p>
                </motion.div>

                {/* Resume Download */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex justify-center"
                >
                    <motion.a
                        href="/resume.pdf"
                        download
                        className="glass-card-hover px-8 py-4 flex items-center gap-3 text-lg font-medium 
                     focus-visible-custom group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FiDownload className="w-6 h-6 text-primary group-hover:animate-bounce" />
                        <span className="heading-gradient">Download Resume</span>
                    </motion.a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <FiMail className="text-primary" />
                            Contact Information
                        </h3>

                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => (
                                <motion.div
                                    key={contact.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                                >
                                    <contact.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">{contact.label}</p>
                                        {contact.href ? (
                                            <a
                                                href={contact.href}
                                                className="text-white hover:text-primary transition-colors focus-visible-custom"
                                            >
                                                {contact.value}
                                            </a>
                                        ) : (
                                            <p className="text-white">{contact.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

                        <div className="grid grid-cols-2 gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="glass-card-hover p-6 flex flex-col items-center gap-3 
                           focus-visible-custom group text-center"
                                >
                                    <social.icon className={`w-8 h-8 ${social.color} group-hover:scale-110 transition-transform`} />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">
                                        {social.label}
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Email CTA */}
                        <motion.button
                            onClick={() => setIsEmailModalOpen(true)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 w-full glass-card-hover px-6 py-4 flex items-center justify-center gap-3 
                       font-medium focus-visible-custom group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <FiMail className="w-5 h-5 text-primary" />
                            <span className="heading-gradient">Send Me an Email</span>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center text-gray-500 text-sm"
                >
                    <p>&copy; 2026 Bhaskar Purimitla. All rights reserved.</p>
                    <p className="mt-2">Built with React, Tailwind CSS, and Framer Motion ❤️</p>
                </motion.div>

                {/* Email Modal */}
                <EmailModal
                    isOpen={isEmailModalOpen}
                    onClose={() => setIsEmailModalOpen(false)}
                />
            </div>
        </SectionWrapper>
    );
};

export default ResumeContactSection;
