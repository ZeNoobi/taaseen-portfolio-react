import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className='w-full h-full bg-gradient-to-b from-lightnavy to-indigo-950 text-white flex items-center flex-col md:flex-row'>
      <div className='w-1/3 p-5 flex items-center justify-center'>
        <Image
          src='/CuriousUndraw.svg'
          alt='CuriousSVG'
          height={400}
          width={400}
        />
      </div>
      <div className='w-2/3 p-5'>
        <h2 className='text-6xl p-5'>About Me</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
          similique veritatis commodi modi illum consequatur. Neque
          perspiciatis, facilis laudantium, quibusdam corrupti, omnis veritatis
          ut nemo eligendi quaerat ipsum. Tenetur, sapiente. Veritatis deserunt
          laboriosam suscipit harum optio dignissimos vel necessitatibus
          sapiente animi explicabo cumque tenetur, officia, earum magni
          consequatur inventore dolorem quos eligendi praesentium excepturi.
          Modi illum perferendis praesentium fuga tempora. Aut, cupiditate
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
