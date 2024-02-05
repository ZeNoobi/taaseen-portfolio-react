//import Image from 'next/image';
import IntroPage from './sections/Introduction';
import AboutMe from './sections/About';
import TechnologySection from './sections/Technology';
import ProjectSection from './sections/Projects';
import ContactSection from './sections/Contact';
import NavBar from './components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <IntroPage />
      <AboutMe />
      <TechnologySection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
