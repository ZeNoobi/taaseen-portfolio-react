'use client';
import { useRef } from "react";

interface NavItems{
  handleHome: ()=> void;
  handleAbout: ()=> void;
  handleTech: ()=> void;
  handleProj: ()=> void;
  handleContact: ()=> void;
}

const NavDupe: React.FC<NavItems> = ({handleHome, handleAbout, handleTech, handleProj, handleContact}) => {

  return (
    <div className='w-full fixed glass shadow-xl z-10'>
      <div className='flex justify-between text-emerald-400 font-medium'>
        <p className='p-2'>Icon</p>
        <ul className='flex p-2'>
          <li className='pr-3 hover:text-pink-600 cursor-pointer' onClick={handleHome}>
              <span className='text-sm text-zinc-400 hover:text-white'>1.</span> Home
          </li>
          <li className='pr-3 hover:text-pink-600 cursor-pointer' onClick={handleAbout}>
            <span className='text-sm text-zinc-400'>2.</span> About
          </li>
          <li className='pr-3 hover:text-pink-600 cursor-pointer' onClick={handleTech}>
            <span className='text-sm text-zinc-400'>3.</span> Technologies
          </li>
          <li className='pr-3 hover:text-pink-600 cursor-pointer' onClick={handleProj}>
            <span className='text-sm text-zinc-400'>4.</span> Projects
          </li>
          <li className='pr-3 hover:text-pink-600 cursor-pointer' onClick={handleContact}>
            <span className='text-sm text-zinc-400'>5.</span> Contact
          </li>
          {/*<li><span><button onClick={handleHome}>playGround</button></span></li>*/}
        </ul>
      </div>
    </div>
  );
};

export default NavDupe;