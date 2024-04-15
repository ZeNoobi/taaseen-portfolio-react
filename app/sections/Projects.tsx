import Image from "next/image";

const ProjectSection = () => {
  return (
    <div id='project' className='w-full h-[2000px] md:h-[1800px] flex flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-lightnavy text-white'>
      <div className='w-full h-[50px]'>
        <h2 className='text-5xl flex justify-center'>
          What I&apos;ve Worked On
        </h2>
      </div>
      <div className='bg-purple-400 w-[1300px] h-80 m-5 p-5 flex rounded-lg projectView'>
        <div className='h-full w-1/3 bg-gray-600'>
          <Image src='/ScrumLogo.png' alt="projectlogo" width={800} height={800} />
        </div>
        <div className='bg-red-500 w-full h-full'>
          <div className='w-full bg-orange-700 h-1/4'>
            <h3 className='text-5xl pr-2 pl-2'>Project 1</h3>
          </div>
          <div className='h-2/4 bg-lime-500 pr-2 pl-2'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              ipsa veniam est enim consectetur doloribus obcaecati sed quasi,
              provident id ut repellat consequatur nesciunt cum minima quaerat
              maxime a velit. Repellendus similique sit non magni pariatur
              laboriosam atque quod quisquam iste. Excepturi dolorum porro
              voluptatibus quo suscipit modi, veniam nihil fugiat nisi molestias
              itaque minima atque, quidem illum facere cum. Quod quasi error
              totam voluptatibus optio, unde vero, ducimus aut officia eos harum
              incidunt nobis modi minima similique sapiente esse nam accusamus
              porro repellendus est fugiat cupiditate eligendi? Nisi, nobis?
            </p>
          </div>
          <footer className='h-1/4 bg-green-600 w-full flex'>
            <button className='ml-5'>Visit</button>
            <button>Github</button>
            <button>Demo</button>
          </footer>
        </div>
      </div>

      <div className='bg-green-500 w-[1300px] h-80 m-5 p-5 flex rounded-lg projectView'>
        <div className='h-full w-1/3 bg-gray-600'>
        <Image src='/ScrumLogo.png' alt="projectlogo" width={800} height={800} />
        </div>
        <div className='bg-red-500 w-full h-full'>
          <div className='w-full bg-orange-700 h-1/4'>
            <h3 className='text-5xl pr-2 pl-2'>Project 2</h3>
          </div>
          <div className='h-2/4 bg-lime-500 pr-2 pl-2'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              ipsa veniam est enim consectetur doloribus obcaecati sed quasi,
              provident id ut repellat consequatur nesciunt cum minima quaerat
              maxime a velit. Repellendus similique sit non magni pariatur
              laboriosam atque quod quisquam iste. Excepturi dolorum porro
              voluptatibus quo suscipit modi, veniam nihil fugiat nisi molestias
              itaque minima atque, quidem illum facere cum. Quod quasi error
              totam voluptatibus optio, unde vero, ducimus aut officia eos harum
              incidunt nobis modi minima similique sapiente esse nam accusamus
              porro repellendus est fugiat cupiditate eligendi? Nisi, nobis?
            </p>
          </div>
          <footer className='h-1/4 bg-green-600 w-full flex'>
            <button className='ml-5'>Visit</button>
            <button>Github</button>
            <button>Demo</button>
          </footer>
        </div>
      </div>

      <div className='bg-green-500 w-[1300px] h-80 m-5 p-5 flex rounded-lg projectView'>
        <div className='h-full w-1/3 bg-gray-600'>
        <Image src='/ScrumLogo.png' alt="projectlogo" width={800} height={800} />
        </div>
        <div className='bg-red-500 w-full h-full'>
          <div className='w-full bg-orange-700 h-1/4'>
            <h3 className='text-5xl pr-2 pl-2'>Project 3</h3>
          </div>
          <div className='h-2/4 bg-lime-500 pr-2 pl-2'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              ipsa veniam est enim consectetur doloribus obcaecati sed quasi,
              provident id ut repellat consequatur nesciunt cum minima quaerat
              maxime a velit. Repellendus similique sit non magni pariatur
              laboriosam atque quod quisquam iste. Excepturi dolorum porro
              voluptatibus quo suscipit modi, veniam nihil fugiat nisi molestias
              itaque minima atque, quidem illum facere cum. Quod quasi error
              totam voluptatibus optio, unde vero, ducimus aut officia eos harum
              incidunt nobis modi minima similique sapiente esse nam accusamus
              porro repellendus est fugiat cupiditate eligendi? Nisi, nobis?
            </p>
          </div>
          <footer className='h-1/4 bg-green-600 w-full flex'>
            <button className='ml-5'>Visit</button>
            <button>Github</button>
            <button>Demo</button>
          </footer>
        </div>
      </div>

      <div className='bg-green-500 lg:w-[1000px] h-fit m-5 p-5 projectView2'>
        <div className='w-full flex justify-center pb-6'>
          <h3>Project 1</h3>
        </div>

        <header id="pict" className='w-full flex justify-center pb-6'>
        <Image src='/ScrumLogo.png' alt="projectlogo" width={380} height={380} />
        </header>
        
        <div id="madewith" className='w-full flex justify-center pb-6'><ul className='flex space-x-3'>
            <li>React</li>
            <li>Taiwlind</li>
            <li>Typescript</li>
            </ul>
            </div>
          <p id="description">Libero earum nemo minus totam voluptas sit doloribus, ducimus magni eum est autem tempore nisi, deleniti aut unde praesentium velit commodi deserunt dolorum error amet! Repudiandae quibusdam sequi atque dolorem?</p>
        <footer className='w-full pt-6'>
          <div id="thelinks" className='w-full flex justify-center'>
          <ul className='flex space-x-3'>
            <li>Visit</li>
            <li>Github</li>
            <li>Demo</li>
            </ul>
          </div>
        </footer>
      </div>
      <div className='bg-green-500 lg:w-[1000px] h-fit m-5 p-5 projectView2'>
        <div className='w-full flex justify-center pb-6'>
          <h3>Project 1</h3>
        </div>

        <header id="pict" className='w-full flex justify-center pb-6'>
        <Image src='/ScrumLogo.png' alt="projectlogo" width={380} height={380} />
        </header>
        
        <div id="madewith" className='w-full flex justify-center pb-6'><ul className='flex space-x-3'>
            <li>React</li>
            <li>Taiwlind</li>
            <li>Typescript</li>
            </ul>
            </div>
          <p id="description">Libero earum nemo minus totam voluptas sit doloribus, ducimus magni eum est autem tempore nisi, deleniti aut unde praesentium velit commodi deserunt dolorum error amet! Repudiandae quibusdam sequi atque dolorem?</p>
        <footer className='w-full pt-6'>
          <div id="thelinks" className='w-full flex justify-center'>
          <ul className='flex space-x-3'>
            <li>Visit</li>
            <li>Github</li>
            <li>Demo</li>
            </ul>
          </div>
        </footer>
      </div>
      <div className='bg-green-500 lg:w-[1000px] h-fit m-5 p-5 projectView2'>
        <div className='w-full flex justify-center pb-6'>
          <h3>Project 1</h3>
        </div>

        <header id="pict" className='w-full flex justify-center pb-6'>
        <Image src='/ScrumLogo.png' alt="projectlogo" width={380} height={380} />
        </header>
        
        <div id="madewith" className='w-full flex justify-center pb-6'><ul className='flex space-x-3'>
            <li>React</li>
            <li>Taiwlind</li>
            <li>Typescript</li>
            </ul>
            </div>
          <p id="description">Libero earum nemo minus totam voluptas sit doloribus, ducimus magni eum est autem tempore nisi, deleniti aut unde praesentium velit commodi deserunt dolorum error amet! Repudiandae quibusdam sequi atque dolorem?</p>
        <footer className='w-full pt-6'>
          <div id="thelinks" className='w-full flex justify-center'>
          <ul className='flex space-x-3'>
            <li>Visit</li>
            <li>Github</li>
            <li>Demo</li>
            </ul>
          </div>
        </footer>
      </div>

    </div>
  );
};

export default ProjectSection;
