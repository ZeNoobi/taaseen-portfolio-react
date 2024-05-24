//import Image from 'next/image';
'use client';
import IntroPage from './sections/Introduction';
import AboutMe from './sections/About';
import TechnologySection from './sections/Technology';
import ProjectSection from './sections/Projects';
import ContactSection from './sections/Contact';
import NavBar from './components/Navigation';
import { useRef } from 'react';

export default function Home() {
  //const bob = useRef<any | null>();
  const intro = useRef<any | null>();
  const about = useRef<any | null>();
  const tech = useRef<any | null>();
  const proj = useRef<any | null>();
  const contact = useRef<any | null>();

  const jump = (id:string) =>{
      if(id == "intro"){
          intro.current?.scrollIntoView({behavior: 'smooth'});
      }
      if(id == "about"){
          about.current?.scrollIntoView({behavior: 'smooth'});
      }
      if(id == "tech"){
          tech.current?.scrollIntoView({behavior: 'smooth'});
      }
      if(id == "proj"){
          proj.current?.scrollIntoView({behavior: 'smooth'});
      }
      if(id == "contact"){
          contact.current?.scrollIntoView({behavior: 'smooth'});
      }
  }

  return (
    <>
      <div>
        <NavBar handleHome={()=>jump('intro')} handleAbout={()=>jump('about')} handleTech={()=>{jump('tech')}} handleProj={()=>{jump('proj')}} handleContact={()=>{jump('contact')}}/>
      </div>

      <span ref={intro}><IntroPage /></span>
      <span ref={about}><AboutMe /></span>
      <span ref={tech}><TechnologySection /></span>
      <span ref={proj}><ProjectSection /></span>
      <span ref={contact}><ContactSection /></span>
    </>
  );
}
