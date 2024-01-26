import Image from 'next/image';

const TechnologySection = () => {
  return (
    <div className='h-[900px] xl:h-[900px] w-full md:h-full bg-gradient-to-b from-indigo-950 to-indigo-950 text-white md:justify-center md:items-center'>
      <div className='w-full h-1/4'>
        <div className='flex justify-center h-[80px]'>
          <h1 className='text-4xl md:text-6xl'>Technology I Use</h1>
        </div>
        <div className='w-full p-5 flex justify-evenly flex-wrap mt-1'>
          <div className='w-[150px] h-32 xl:w-[350px] xl:h-64 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <Image alt='html logo' src='/html.png' width={80} height={80}/>
            </div>
            HTML
          </div>
          <div className='w-[150px] h-32 xl:w-[350px] xl:h-64 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <Image alt='css logo' src='/css.png' width={80} height={80} />
            </div>
            CSS
          </div>
          <div className='w-[150px] h-32 xl:w-[350px] xl:h-64 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <div className='rounded-full overflow-hidden'>
                <Image
                  alt='javascript logo'
                  src='/js.png'
                  width={80}
                  height={80}
                />
              </div>
            </div>
            Type/Javascript
          </div>
          <div className='w-[150px] h-32 xl:w-[350px] xl:h-64 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <Image
                alt='reactjs logo'
                src='/React.png'
                width={80}
                height={80}
              />
            </div>
            ReactJS
          </div>
          <div className='w-[150px] h-32 xl:w-[350px] xl:h-64 glass m-1 flex flex-col justify-center items-center'>
            <div className='m-5'>
              {' '}
              <Image
                alt='tailwindCss logo'
                src='/Tailwind CSS.svg'
                width={80}
                height={80}
              />
            </div>
            TailwindCSS
          </div>
          <div className='w-[150px] h-32 xl:w-[350px] xl:h-64 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <div className='bg-white rounded-full'>
                <Image
                  alt='nextjs logo'
                  src='/nextjs.svg'
                  width={80}
                  height={80}
                />
              </div>
            </div>
            NextJS
          </div>
          <div className='w-[150px] h-32 xl:w-[350px] xl:h-64 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <Image
                alt='nodejs logo'
                src='/nodejsfinal.png'
                width={80}
                height={80}
              />
            </div>
            NodeJS
          </div>
          <div className='w-[150px] h-32 xl:w-[350px] xl:h-64 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <div className='bg-white rounded-full w-[80px] h-[80px]'>
                <Image
                  alt='github logo'
                  src='/githublogo.png'
                  width={80}
                  height={80}
                />
              </div>
            </div>
            Git/Github
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
