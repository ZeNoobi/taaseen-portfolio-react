import Image from 'next/image';

const IntroPage = () => {
  return (
    <div className='h-full w-full bg-gradient-to-b from-blue-500 to-sky-950 text-white flex justify-center items-center'>
      {/*<section className='flex items-center justify-between'></section>*/}
      <div className=' flex justify-center min-w-full h-56'>
        <div className='w-1/2'>
          <h3 className='text-xl'>
            Hi, My name is <span>Taaseen Chowdhury</span>.
          </h3>
          <h3 className='pt-5'>I`m a</h3>
          <h3 className='text-8xl'>
            <span>Fullstack</span> Developer
          </h3>
        </div>
        {/*<div className='w-1/5'></div>*/}
        <div className='w-1/3 flex justify-center items-center'>
          <Image
            src='/undraw_code_thinking_re_gka2.svg'
            width={625}
            height={625}
            alt='draw'
          />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
