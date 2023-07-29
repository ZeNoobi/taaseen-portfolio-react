const NavBar = () => {
  return (
    <div className='w-full bg-transparent fixed'>
      <div className='text-cyan-50 flex justify-between'>
        <p>Icon</p>
        <ul className='flex'>
          <li>Home</li>
          <li>About</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
