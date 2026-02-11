import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiX, FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const EmailModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error'

    const validateForm = () => {
        const newErrors = {};

        if (!formData.subject || formData.subject.trim().length < 3) {
            newErrors.subject = 'Subject must be at least 3 characters';
        }

        if (!formData.message || formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        if (!formData.reply_to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.reply_to)) {
            newErrors.reply_to = 'Please enter a valid email address';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setStatus(null);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.from_name || 'Anonymous',
                    reply_to: formData.reply_to,
                    subject: formData.subject,
                    message: formData.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            setTimeout(() => {
                onClose();
                setFormData({ from_name: '', reply_to: '', subject: '', message: '' });
                setStatus(null);
            }, 2000);
        } catch (error) {
            setStatus('error');
            console.error('Email send error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Toast Notification - Top Right */}
                    <AnimatePresence>
                        {status && (
                            <motion.div
                                initial={{ opacity: 0, y: -20, x: 100 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                exit={{ opacity: 0, y: -20, x: 100 }}
                                className={`fixed top-6 right-6 z-[60] px-6 py-4 rounded-lg backdrop-blur-md 
                                          border font-medium shadow-2xl max-w-md ${status === 'success'
                                        ? 'bg-green-500/20 border-green-500/40 text-green-400'
                                        : 'bg-red-500/20 border-red-500/40 text-red-400'
                                    }`}
                            >
                                {status === 'success'
                                    ? "✅ Email sent successfully! I'll get back to you soon."
                                    : "❌ Failed to send. Please try again."}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={(e) => e.target === e.currentTarget && onClose()}
                    >
                        <div className="glass-card p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold heading-gradient flex items-center gap-2">
                                    <FiMail className="text-primary" />
                                    Send Me an Email
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors focus-visible-custom"
                                    aria-label="Close modal"
                                >
                                    <FiX className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name (Optional) */}
                                <div>
                                    <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2">
                                        <FiUser className="inline w-4 h-4 mr-1" />
                                        Your Name (optional)
                                    </label>
                                    <input
                                        type="text"
                                        id="from_name"
                                        name="from_name"
                                        value={formData.from_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                                                 text-white placeholder-gray-500 focus:outline-none focus:border-primary 
                                                 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email (Required) */}
                                <div>
                                    <label htmlFor="reply_to" className="block text-sm font-medium text-gray-300 mb-2">
                                        <FiMail className="inline w-4 h-4 mr-1" />
                                        Your Email <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="reply_to"
                                        name="reply_to"
                                        value={formData.reply_to}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white 
                                                  placeholder-gray-500 focus:outline-none transition-colors
                                                  ${errors.reply_to ? 'border-red-500' : 'border-white/10 focus:border-primary'}`}
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                    {errors.reply_to && (
                                        <p className="mt-1 text-sm text-red-400">{errors.reply_to}</p>
                                    )}
                                </div>

                                {/* Subject (Required) */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        <FiMessageSquare className="inline w-4 h-4 mr-1" />
                                        Subject <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white 
                                                  placeholder-gray-500 focus:outline-none transition-colors
                                                  ${errors.subject ? 'border-red-500' : 'border-white/10 focus:border-primary'}`}
                                        placeholder="What would you like to discuss?"
                                        required
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                                    )}
                                </div>

                                {/* Message (Required) */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        <FiMessageSquare className="inline w-4 h-4 mr-1" />
                                        Message <span className="text-primary">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white 
                                                  placeholder-gray-500 focus:outline-none transition-colors resize-none
                                                  ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-primary'}`}
                                        placeholder="Tell me about your project, question, or opportunity..."
                                        required
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 
                                                 rounded-lg font-medium transition-colors focus-visible-custom"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary 
                                                 hover:from-primary/80 hover:to-secondary/80 rounded-lg font-medium 
                                                 transition-all focus-visible-custom flex items-center justify-center gap-2
                                                 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FiSend className="w-4 h-4" />
                                                Send Email
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default EmailModal;
