import NavDupe from "../components/NavDupe";
import IntroPage from "../sections/Introduction";
import AboutMe from "../sections/About";
import TechnologySection from "../sections/Technology";
import ProjectSection from "../sections/Projects";
import ContactSection from "../sections/Contact";

export default function page(){
    return(
        <>
<div>
    <NavDupe/>
</div>

    <IntroPage />
    <AboutMe />
    <TechnologySection />
    <ProjectSection />
    <ContactSection />

</>

    ) 
}

