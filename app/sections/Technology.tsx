const TechnologySection = () => {
  return (
    <div className='w-full h-full bg-gradient-to-b from-indigo-950 to-indigo-950 text-white center flex justify-center items-center'>
      <div className='w-full h-1/4'>
        <div className='flex justify-center h-[40px]'>
          <h1>Technology I Use</h1>
        </div>
        <div className='w-full p-5 flex justify-evenly flex-wrap mt-1'>
          <div className='h-20 w-[150px] bg-slate-500 m-1'>HTML</div>
          <div className='h-20 w-[150px] bg-slate-500 m-1'>CSS</div>
          <div className='h-20 w-[150px] bg-slate-500 m-1'>Javascript</div>
          <div className='h-20 w-[150px] bg-slate-500 m-1'>React</div>
          <div className='h-20 w-[150px] bg-slate-500 m-1'>TailwindCSS</div>
          <div className='h-20 w-[150px] bg-slate-500 m-1'>NextJS</div>
          <div className='h-20 w-[150px] bg-slate-500 m-1'>NodeJS</div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
