import AboutMeSection from '../sections/AboutMeSection';
import ExperienceSection from '../sections/ExperienceSection';
import EducationSection from '../sections/EducationSection';
import SkillsSection from '../sections/SkillsSection';
import CertificationsSection from '../sections/CertificationsSection';
import ProjectsSection from '../sections/ProjectsSection';
import ResumeContactSection from '../sections/ResumeContactSection';

const Home = () => {
    return (
        <div className="w-full">
            <AboutMeSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <CertificationsSection />
            <ProjectsSection />
            <ResumeContactSection />
        </div>
    );
};

export default Home;
