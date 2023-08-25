import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className='h-[1000px] w-full md:h-full bg-gradient-to-b from-lightnavy to-indigo-950 text-white flex items-center flex-col md:flex-row'>
      <div className='w-1/2 md:w-1/3 h-[200px] p-5 flex items-center justify-center'>
        <Image
          src='/CuriousUndraw.svg'
          alt='CuriousSVG'
          height={400}
          width={400}
        />
      </div>
      <div className='w-2/3 p-5'>
        <h2 className='text-4xl md:text-6xl p-5 flex justify-center'>
          About Me
        </h2>
        <div>
          <p>
            From a young age, I grew up using computers. I became interested in
            how different applications and programs worked. This curiosity
            blossomed into interest in software development and engineering. I
            majored in computer science and learned about the theory and the
            Agile development cycle. I fell in love with the entire development
            process, from requirement gathering to user deployment. I faced each
            new challenge with a positive and inquisitive mind thus overcoming
            many hurdles in my software development journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
