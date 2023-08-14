import Image from 'next/image';

const IntroPage = () => {
  return (
    <div className='h-[900px] md:h-full w-full bg-lightnavy text-white flex justify-center md:items-center'>
      {/*<section className='flex items-center justify-between'></section>*/}
      <div className=' flex justify-center min-w-full h-56 flex-wrap mt-32 md:mt-0'>
        <div className='w-[600px]'>
          <h3 className='text-xl p-3'>
            Hi, My name is
            <span className='text-emerald-400'> Taaseen Chowdhury</span>.
          </h3>
          <h3 className='text-8xl lg:text-8xl'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Fullstack
            </span>{' '}
            Developer
          </h3>
        </div>
        {/*<div className='w-1/5'></div>*/}
        <div className='w-[600px] flex justify-center items-center'>
          <Image
            src='/UndrawCodeThinkingEmerald.svg'
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
