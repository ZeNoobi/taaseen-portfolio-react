'use client';

const NavBar = () => {
  const handleClick = () => {};

  return (
    <div className='w-full fixed bg-slate-700 blur-sm'>
      <div className='text-cyan-50 flex justify-between'>
        <p className='p-2'>Icon</p>
        <ul className='flex p-2'>
          <li className='pr-3' onClick={handleClick}>
            Home
          </li>
          <li className='pr-3'>About</li>
          <li className='pr-3'>Technologies</li>
          <li className='pr-3'>Projects</li>
          <li className='pr-3'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
