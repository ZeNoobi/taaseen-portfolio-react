const IntroPage = () => {
  return (
    <div className='h-full w-full bg-gradient-to-b from-blue-500 to-sky-950 text-white'>
      {/*<section className='flex items-center justify-between'></section>*/}
      <div className='h-16'></div>
      <div className='flex justify-center'>
        <div className='w-1/3'>
          <div>
            <h3>
              <span>Hello</span>, my name is <span>Taaseen</span>.
            </h3>
            <h3>
              I am a <span>Fullstack Developer</span>
            </h3>
          </div>
        </div>
        <div className='w-1/4'></div>
        <div className='w-1/3'>Picture</div>
      </div>
    </div>
  );
};

export default IntroPage;
