const ProjectSection = () => {
  return (
    <div className='w-full h-[2000px] flex flex-col items-center bg-gradient-to-b from-indigo-950 to-lightnavy text-white'>
      <div className='w-full h-[50px] bg-gray-800'>
        <h2 className='text-5xl flex justify-center'>
          What I&apos;ve Worked On
        </h2>
      </div>
      <div className='bg-green-500 w-[1300px] h-80 m-5'>
        <div className='h-full w-1/3 bg-gray-600'></div>
      </div>
      <div className='bg-green-500 w-[1300px] h-80 m-5'>Project 2</div>
      <div className='bg-green-500 w-[1300px] h-80 m-5'>Project 3</div>
    </div>
  );
};

export default ProjectSection;
