const TechnologySection = () => {
  return (
    <div className='w-full h-full bg-gradient-to-b from-indigo-950 to-indigo-950 text-white center flex justify-center items-center'>
      <div className='w-full h-full'>
        <div className='flex justify-center'>
          <h1>Technology I Use</h1>
        </div>
        <div className='w-full p-5 flex justify-evenly flex-wrap'>
          <div className='h-20 w-[150px] bg-slate-500'>HTML</div>
          <div className='h-20 w-[150px] bg-slate-500'>CSS</div>
          <div className='h-20 w-[150px] bg-slate-500'>Javascript</div>
          <div className='h-20 w-[150px] bg-slate-500'>React</div>
          <div className='h-20 w-[150px] bg-slate-500'>TailwindCSS</div>
          <div className='h-20 w-[150px] bg-slate-500'>NextJS</div>
          <div className='h-20 w-[150px] bg-slate-500'>NodeJS</div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
