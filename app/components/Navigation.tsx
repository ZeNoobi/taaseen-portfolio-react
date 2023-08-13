'use client';

const NavBar = () => {
  const handleClick = () => {};

  return (
    <div className='w-full fixed glass shadow-xl'>
      <div className='flex justify-between text-emerald-400 font-medium'>
        <p className='p-2'>Icon</p>
        <ul className='flex p-2'>
          <li
            className='pr-3 hover:text-pink-600 cursor-pointer'
            onClick={handleClick}
          >
            Home
          </li>
          <li className='pr-3 hover:text-pink-600 cursor-pointer'>About</li>
          <li className='pr-3 hover:text-pink-600 cursor-pointer'>
            Technologies
          </li>
          <li className='pr-3 hover:text-pink-600 cursor-pointer'>Projects</li>
          <li className='pr-3 hover:text-pink-600 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
