const IntroPage = () => {
  return (
    <div className='h-full w-full bg-gradient-to-b from-blue-500 to-sky-950 text-white flex justify-center items-center'>
      {/*<section className='flex items-center justify-between'></section>*/}
      <div className='bg-red-500 flex justify-center min-w-full h-56'>
        <div className='w-1/2'>
          <h3 className='text-5xl'>
            Hello, I am <span>Taaseen.</span>
          </h3>
          <h3 className='text-6xl'>
            <span>Fullstack</span> Developer
          </h3>
        </div>
        {/*<div className='w-1/5'></div>*/}
        <div className='w-1/3'>Picture</div>
      </div>
    </div>
  );
};

export default IntroPage;
