const IntroPage = () => {
  return (
    <div className='w-full h-full bg-gradient-to-b from-blue-500 to-sky-950 text-white flex justify-center items-center'>
      <div className='flex justify-center items-center'>
        <div className=' w-full '>
          <h3>
            Hello, My Name is <span>Taaseen Chowdhury</span>
          </h3>
          <h1 className='font-extrabold text-8xl'>Fullstack Developer</h1>
          <div>
            <button className='bg-black p-3 pr-5 pl-5 m-2 rounded-full'>
              Projects
            </button>
            <button className='bg-black p-3 pr-5 pl-5 m-2 rounded-full'>
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
