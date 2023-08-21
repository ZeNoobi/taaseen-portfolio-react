import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className='h-[900px] w-full md:h-full bg-gradient-to-b from-lightnavy to-indigo-950 text-white flex items-center flex-col md:flex-row'>
      <div className='w-1/3 p-5 flex items-center justify-center'>
        <Image
          src='/CuriousUndraw.svg'
          alt='CuriousSVG'
          height={400}
          width={400}
        />
      </div>
      <div className='w-2/3 p-5'>
        <h2 className='text-4xl md:text-6xl p-5'>About Me</h2>
        <div>I grew up</div>
      </div>
    </div>
  );
};

export default AboutMe;
