const ProjectSection = () => {
  return (
    <div className='w-full h-[2000px] flex flex-col items-center bg-gradient-to-b from-indigo-950 to-lightnavy text-white'>
      <div className='w-full h-[50px] bg-gray-800'>
        <h2 className='text-5xl flex justify-center'>
          What I&apos;ve Worked On
        </h2>
      </div>
      <div className='bg-green-500 w-[1300px] h-80 m-5 p-5 flex'>
        <div className='h-full w-1/3 bg-gray-600'></div>
        <div className='bg-red-500 w-full h-full'>
          <div className='w-full bg-orange-700'>
            <h3 className='text-5xl'>Project 1</h3>
          </div>
        </div>
      </div>
      <div className='bg-green-500 w-[1300px] h-80 m-5'>Project 2</div>
      <div className='bg-green-500 w-[1300px] h-80 m-5'>Project 3</div>
    </div>
  );
};

export default ProjectSection;
