import Image from 'next/image';
import IntroPage from './sections/Introduction';
import AboutMe from './sections/About';
import TechnologySection from './sections/Technology';
import ProjectSection from './sections/Projects';
import ContactSection from './sections/Contact';

export default function Home() {
  return (
    <>
      <IntroPage />
      <AboutMe />
      <TechnologySection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
