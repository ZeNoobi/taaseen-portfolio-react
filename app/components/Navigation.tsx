'use client';

const NavBar = () => {
  const handleClick = () => {};

  return (
    <div className='w-full fixed glass shadow-xl'>
      <div className='flex justify-between text-emerald-400 font-medium'>
        <p className='p-2'>Icon</p>
        <ul className='flex p-2'>
          <li
            className='pr-3 hover:text-pink-600 cursor-pointer font-bold'
            onClick={handleClick}
          >
            Home
          </li>
          <li className='pr-3 hover:text-pink-600 cursor-pointer hover:font-bold'>
            About
          </li>
          <li className='pr-3 hover:text-pink-600 cursor-pointer hover:font-bold'>
            Technologies
          </li>
          <li className='pr-3 hover:text-pink-600 cursor-pointer hover:font-bold'>
            Projects
          </li>
          <li className='pr-3 hover:text-pink-600 cursor-pointer hover:font-bold'>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
