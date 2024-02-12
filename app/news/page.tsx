"use client"
import NavDupe from "../components/NavDupe";
import IntroPage from "../sections/Introduction";
import AboutMe from "../sections/About";
import TechnologySection from "../sections/Technology";
import ProjectSection from "../sections/Projects";
import ContactSection from "../sections/Contact";
import Playground from "./playground";
import { ReactComponentElement, ReactHTML, useRef } from "react";

export default function Page(){
    const bob = useRef<any | null>();
    const intro = useRef<any | null>();
    const about = useRef<any | null>();
    const tech = useRef<any | null>();
    const proj = useRef<any | null>();
    const contact = useRef<any | null>();

    const jump = (id:string) =>{
        if(id == "playg"){
            bob.current?.scrollIntoView({behavior: 'smooth'});
        }
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

    return(
        <>
<div>
    <NavDupe handleHome={()=>{jump("intro")}} handleAbout={()=>{jump("about")}} handleContact={()=>{jump("contact")}} handleProj={()=>{jump("proj")}} handleTech={()=>{jump("tech")}}/>
</div>
    
    <span ref={intro}><IntroPage /></span>
    <span ref={about}><AboutMe /></span>
    <span ref={tech}><TechnologySection /></span>
    <span ref={proj}><ProjectSection /></span>
    <span ref={contact}><ContactSection /></span>
    <div id = "playg" ref={bob}>
    <Playground />
    {/*<div><button onClick={()=>{jump("playg")}}>Scroll to Playground</button></div>*/}
    </div>
</>

    ) 
}

