import Image from 'next/image';

const TechnologySection = () => {
  return (
    <div className='h-[900px] w-full md:h-full bg-gradient-to-b from-indigo-950 to-indigo-950 text-white lg:flex md:justify-center md:items-center'>
      <div className='w-full h-1/4'>
        <div className='flex justify-center h-[40px]'>
          <h1>Technology I Use</h1>
        </div>
        <div className='w-full p-5 flex justify-evenly flex-wrap mt-1'>
          <div className='w-[150px] h-32 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <Image alt='html logo' src='/html.png' width={50} height={50} />
            </div>
            HTML
          </div>
          <div className='w-[150px] h-32 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <Image alt='css logo' src='/css.png' width={50} height={50} />
            </div>
            CSS
          </div>
          <div className='w-[150px] h-32 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <div className='rounded-full overflow-hidden'>
                <Image
                  alt='javascript logo'
                  src='/js.png'
                  width={50}
                  height={50}
                />
              </div>
            </div>
            Type/Javascript
          </div>
          <div className='w-[150px] h-32 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <Image
                alt='reactjs logo'
                src='/React.png'
                width={50}
                height={50}
              />
            </div>
            ReactJS
          </div>
          <div className='w-[150px] h-32 glass m-1 flex flex-col justify-center items-center'>
            <div className='m-5'>
              {' '}
              <Image
                alt='tailwindCss logo'
                src='/Tailwind CSS.svg'
                width={50}
                height={50}
              />
            </div>
            TailwindCSS
          </div>
          <div className='w-[150px] h-32 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <div className='bg-white rounded-full'>
                <Image
                  alt='nextjs logo'
                  src='/nextjs.svg'
                  width={50}
                  height={50}
                />
              </div>
            </div>
            NextJS
          </div>
          <div className='w-[150px] h-32 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <Image
                alt='nodejs logo'
                src='/nodejsfinal.png'
                width={50}
                height={50}
              />
            </div>
            NodeJS
          </div>
          <div className='w-[150px] h-32 glass m-1 flex flex-col justify-center items-center'>
            <div className='pb-5'>
              {' '}
              <div className='bg-white rounded-full w-[50px] h-[50px]'>
                <Image
                  alt='github logo'
                  src='/githublogo.png'
                  width={51}
                  height={51}
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
