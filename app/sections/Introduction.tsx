import Image from 'next/image';

const IntroPage = () => {
  return (
    <div className='h-full w-full bg-gradient-to-b from-lightnavy to-navy text-white flex justify-center items-center'>
      {/*<section className='flex items-center justify-between'></section>*/}
      <div className=' flex justify-center min-w-full h-56'>
        <div className='w-1/2'>
          <h3 className='text-xl p-3'>
            Hi, My name is{' '}
            <span className='text-emerald-400'>Taaseen Chowdhury</span>.
          </h3>
          <h3 className='text-8xl'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Fullstack
            </span>{' '}
            Developer
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
