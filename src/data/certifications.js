// Certification data structure - Import logos properly for Vite
import udemyLogo from '../assets/certifications/providers/udemy.png';
import googleLogo from '../assets/certifications/providers/google.jpg';
import simplilearnLogo from '../assets/certifications/providers/simpli.png';
import nptelLogo from '../assets/certifications/providers/nptel.jpg';
import outskillLogo from '../assets/certifications/providers/outskill.jpg';

const certifications = [
    {
        id: 'cert-1',
        title: 'Data Analytics',
        provider: 'Udemy',
        providerLogo: udemyLogo,
        certificatePath: '/certificates/Data_Analytics_udemy.pdf',
        completed: 'Completed'
    },
    {
        id: 'cert-2',
        title: 'Project Management',
        provider: 'Google',
        providerLogo: googleLogo,
        certificatePath: '/certificates/project-management-google.pdf',
        completed: 'Completed'
    },
    {
        id: 'cert-3',
        title: 'Introduction to SQL',
        provider: 'Simplilearn',
        providerLogo: simplilearnLogo,
        certificatePath: '/certificates/intro-to-sql-simplilearn.pdf',
        completed: 'Completed'
    },
    {
        id: 'cert-4',
        title: 'Python Programming',
        provider: 'Swayam (NPTEL)',
        providerLogo: nptelLogo,
        certificatePath: '/certificates/python-programming-nptel.pdf',
        completed: 'Completed'
    },
    {
        id: 'cert-5',
        title: 'Agile Scrum',
        provider: 'Simplilearn',
        providerLogo: simplilearnLogo,
        certificatePath: '/certificates/agile-scrum-simplilearn.pdf',
        completed: 'Completed'
    },
    {
        id: 'cert-6',
        title: 'Generative AI Mastermind',
        provider: 'Outskill',
        providerLogo: outskillLogo,
        certificatePath: '/certificates/generative-ai-mastermind-outskill.pdf',
        completed: 'Completed'
    }
];

export default certifications;
